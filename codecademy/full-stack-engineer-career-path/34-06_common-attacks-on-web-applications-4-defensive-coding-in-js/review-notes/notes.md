Writing code defensively is key to securing applications from bad actors who seek to take advantage of your code. Over the course of this lesson we were introduced to some of the fundamental concepts of vulnerabilities and defensive programming with Javascript:

- The risk of user input
- Injection attacks with eval and exec
- Controlling file access with the fs module
- ReDOS attacks with regular expressions
- Validating and sanitizing program input
- Using JavaScript strict mode
- Using code analysis tools like ESLint and its plugins

If you use npm packages in your Node.js applications, always keep them up-to-date and be aware of vulnerable packages.
https://docs.npmjs.com/cli/v7/commands/npm-audit

For keeping up to date with security vulnerabilities we recommend checking out this OWASP cheatsheet.
https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html
