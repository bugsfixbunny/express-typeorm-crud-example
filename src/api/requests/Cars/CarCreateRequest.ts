import { IsString, IsDateString, IsNumber, IsNotEmpty } from "class-validator";

export class CarCreateRequest {
  @IsString()
  @IsNotEmpty()
    license_plate: string;

  @IsNumber()
  @IsNotEmpty()
    registration_number: number;

  @IsString()
  @IsNotEmpty()
    registration_state_id: string;

  @IsDateString()
  @IsNotEmpty()
    registration_expiration: Date;

  @IsString()
  @IsNotEmpty()
    register_name: string;

  @IsString()
  @IsNotEmpty()
    vin: string;

  @IsNumber()
  @IsNotEmpty()
    value: number;

  @IsNumber()
  @IsNotEmpty()
    mileage: number;

  @IsString()
  @IsNotEmpty()
    description: string;

  @IsString()
  @IsNotEmpty()
    color_id: string;
}
