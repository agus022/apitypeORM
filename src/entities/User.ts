import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column()
  firstname: String;

  @Column()
  lastname: String;

  @Column({ default: true })
  active: boolean;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateAdd: Date;
}
