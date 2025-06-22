import { createRoute } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent } from "stoker/openapi/helpers";
import { createMessageObjectSchema } from "stoker/openapi/schemas";
import { createRouter } from "../lib/create-app";

const router = createRouter()
  .openapi(
    createRoute({
      tags: ["index"],
      method: "get",
      path: "/",
      summary: "welcome to the API",
      responses: {
        [HttpStatusCodes.OK]: jsonContent(
          createMessageObjectSchema("Welcome to the API"),
          "Welcome to the API endpoint",
        ),
      },
    }),
    c => c.json({ message: "Welcome to the API!" }, HttpStatusCodes.OK),
  );

export default router;
