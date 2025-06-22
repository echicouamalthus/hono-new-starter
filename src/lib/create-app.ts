import type { AppBindings } from "./types";
import { OpenAPIHono } from "@hono/zod-openapi";
import { cors } from "hono/cors";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";
import { defaultHook } from "stoker/openapi";
import { pinoLogger } from "../middlewares/pino-logger";

export function createRouter() {
  return new OpenAPIHono<AppBindings>({
    strict: false,
    defaultHook,
  }).basePath("/api");
}

export default function createApp() {
  const app = createRouter();
  app.use(serveEmojiFavicon("💀"));
  app.use(pinoLogger());

  app.onError(onError);
  app.notFound(notFound);

  app.use(
    "*",
    cors({
      origin: "http://localhost:9999/api", // Replace with your frontend's origin
      allowMethods: ["GET", "POST", "PUT", "DELETE"], // Allow specific methods
      allowHeaders: ["Content-Type", "Authorization", "Cookie"], // Allow specific headers
    }),
  );

  return app;
}
