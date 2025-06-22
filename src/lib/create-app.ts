import type { AppBindings } from "./types";
import { OpenAPIHono } from "@hono/zod-openapi";
import { serveEmojiFavicon } from "stoker/middlewares";
import { defaultHook } from "stoker/openapi";
import { pinoLogger } from "../middlewares/pino-logger";

export function createRoute() {
  return new OpenAPIHono<AppBindings>({
    strict: false,
    defaultHook,
  });
}

export default function createApp() {
  const app = createRoute();
  app.use(serveEmojiFavicon("💀"));
  app.use(pinoLogger());
}
