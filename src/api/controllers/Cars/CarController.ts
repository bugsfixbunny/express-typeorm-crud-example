import {Get, JsonController } from "routing-controllers";

import { Car } from "../../models";

@JsonController("/cars")
export class CarController {
  @Get()
  get(): Promise<Car[]> {
    return Car.find();
  }
}
