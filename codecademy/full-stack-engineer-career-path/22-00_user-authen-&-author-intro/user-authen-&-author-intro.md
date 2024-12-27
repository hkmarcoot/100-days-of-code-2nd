## Introduction: User Authentication and Authorization

See what you’ll be learning in the User Authentication and Authorization Unit.

Goals of this Unit
The goal of this unit is to learn how to implement user authentication and authorization in an express application. Authentication and authorization are key pieces to securing any web application that works with user data. In fact, they’re so important that Broken Authentication and Broken Access Control make up two of the OWASP Top Ten’s most critical security risks to web applications. Verifying who your users are and what they’re allowed to do will help create a safe and secure user experience.

Even if you’re not storing information like health data or social security numbers, it’s still important to secure user data. If users lose access to their accounts or find that their data has been altered, this could result in losing users! Or, if a malicious actor gains access to an admin account, this could give them access to data like passwords or email addresses which can be used in clickjacking attacks.

After this unit, you’ll be able to:

- Define Authentication, Authorization, and Encryption
- Explain the purpose of user sessions
- Implement Sessions in Express using express-session
- Allow users to log into an Express app using passport-local
- Secure user passwords with hashing and salts using bcrypt.js
- Add OAuth 2.0 as a login option to an Express app using oauth2-server
