import {Body, Get, Post, Put, Delete, JsonController, HttpCode, Param } from "routing-controllers";
import vinDecoder from "vin-decode";

import { Car } from "../../models";
import { CarCreateRequest } from "../../requests/Cars/CarCreateRequest";
import { CarUpdateRequest } from "../../requests/Cars/CarUpdateRequest";

@JsonController("/cars")
export class CarController {
  @Get()
  get(): Promise<Car[]> {
    return Car.find();
  }

  @Post()
  @HttpCode(201)
  async create(@Body() body: CarCreateRequest) {
    if(!vinDecoder(body.vin)) throw new Error("Vin is not valid.");
    const car =  new Car();
    Object.assign(car, body);
    return await car.save();
  }

  @Get("/:id")
  async detail(@Param("id") id: string) {
    return await Car.findOne(id);
  }

  @Put("/:id")
  async update(@Param("id") id: string, @Body() body: CarUpdateRequest) {
    if(!vinDecoder(body.vin)) throw new Error("Vin is not valid.");
    const car = await Car.findOne(id);
    Object.assign(car, body);
    return await car.save();
  }

  @Delete("/:id")
  @HttpCode(204)
  async delete(@Param("id") id: string) {
    return await Car.delete(id);
  }
}
