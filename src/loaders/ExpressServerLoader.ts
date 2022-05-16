import { Application } from "express";
import { createExpressServer } from "routing-controllers";

import * as Controllers from "../api/controllers";
import { CustomErrorHandler } from "../api/middlewares/CustomErrorHandler";

export function ExpressServerLoader(): Application {
  const expressApp: Application = createExpressServer({
    cors: true,
    classTransformer: true,
    defaultErrorHandler: false,
    middlewares: [CustomErrorHandler],
    controllers: Object.values(Controllers),
  });

  expressApp.listen(process.env.PORT);

  return expressApp;
}
