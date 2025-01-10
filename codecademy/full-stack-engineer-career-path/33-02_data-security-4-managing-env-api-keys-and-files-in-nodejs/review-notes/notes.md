In just a few steps, we can make our web applications more secure:

- Create and populate two files, .env and .gitignore.
- Inside .env, initialize each of the environment variables that should be secret.
- Inject our environment variables into a global variable called process.env using the npm package, dotenv.
- Refer to the environment variables in the source code using process.env.
- Inside .gitignore, add the .env file.
