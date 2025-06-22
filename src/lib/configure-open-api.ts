import type { AppOpenAPI } from "./types";
// import { Scalar } from "@scalar/hono-api-reference";

export default function configureOpenApi(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Awesome API",
    },
  });

//   app.get("/reference", Scalar({
//     defaultHttpClient: {
//       targetKey: "javascript",
//       clientKey: "fetch",
//     },
//     theme: "purple",
//     layout: "modern",
//     url: "/doc",
//     pageTitle: "Awesome API",
//   }));
}
