import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";


@Entity("colors")
export class Color extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
    id: string;

  @Column()
  @Unique(["name"])
    name: string;

  @Column()
    value: string;

  @CreateDateColumn()
    createdDate: Date;

  @UpdateDateColumn()
    updatedDate: Date;

  @DeleteDateColumn()
    deletedDate: Date;
}
