// Import the dotenv package
import dotenv from "dotenv";

// Inject environment variables
dotenv.config();

// Print out the value of one of the four environment variables below
console.log(process.env.DB_HOST);
