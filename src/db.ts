import { DataSource } from "typeorm";
import { User } from "./entities/User";

export const appDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  username: "blogger",
  password: "1234",
  port: 5432,
  database: "blogtec",
  entities: [User],
  logging: true,
  synchronize: true,
});
