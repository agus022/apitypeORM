import "reflect-metadata";
import app from "./app";
import { appDataSource } from "./db";

async function main() {
  try {
    await appDataSource.initialize();
    console.log("DATABASE CONNECTED :)");
    app.listen(3000);
    console.log("SERVER IS LISTENIGN ON PORT", 3000);
  } catch (error) {
    console.log(error);
  }
}

main();
