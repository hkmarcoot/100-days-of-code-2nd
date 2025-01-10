// Import the dotenv package
import dotenv from "dotenv";

// Inject your environment variables into `process.env`
dotenv.config();

// Print out your environment variables
console.log(process.env.PROGRAM_NAME);
console.log(process.env.ZIP_CODE);
