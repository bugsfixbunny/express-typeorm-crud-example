import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  Unique,
} from "typeorm";

import { Color } from "./Color";
import { State } from "../Base/State";

@Entity("cars")
@Unique(["vin"])
export class Car extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
    id: string;

  @Column()
    license_plate: string;

  @Column()
    registration_number: number;

  @Column()
    registration_state_id: string;

  @ManyToOne(() => State)
  @JoinColumn({ name: "registration_state_id" })
    registration_state: State;

  @Column("date")
    registration_expiration: Date;

  @Column()
    register_name: string;

  @Column()
    vin: string;

  @Column()
    value: number;

  @Column()
    mileage: number;

  @Column("text")
    description: string;

  @Column()
    color_id: string;

  @ManyToOne(() => Color)
  @JoinColumn({ name: "color_id" })
    color: Color;

  @Column()
    year: number;

  @Column()
    make: string;

  @CreateDateColumn()
    createdDate: Date;

  @UpdateDateColumn()
    updatedDate: Date;

  @DeleteDateColumn()
    deletedDate: Date;
}
