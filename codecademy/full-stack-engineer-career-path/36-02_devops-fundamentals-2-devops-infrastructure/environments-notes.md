Environments
In this article, you’ll learn about the different environments that a project can be in as it goes through the process of development and eventually being released.

## What Are Environments?

An environment, in the context of creating and deploying software, is the subset of infrastructure resources used to execute a program under specific constraints. Throughout the various stages of development, different environments are used to handle the requirements of the Development and Operations team members. Each environment allows developers to test their code under the environment’s specific set of resources and constraints.

Though the names and number of environments can vary from organization to organization, the five environments we will cover in this article are:

- The local development environment.
- The integration environment.
- The testing/quality assurance (QA) environment.
- The staging environment.
- The production environment.

To give context to the environments explained in this article, we’ll use an example of a company that is making an email client, such as Gmail.

## Local Development Environment

A local development environment is where programmers initially build the features of an application, often on their own computer and with their own unique version of the project. In a local development environment, a programmer can work on their feature without worrying about, or potentially breaking, what other developers may be working on. In this environment, the developer can run unit tests as well as integration tests with mocked external services, while end to end tests are less common.

In our email client example, the local development environment is where developers would be programming all the features and functionalities of the client. Individual developers may each be assigned to locally develop – and test in isolation – a single feature, such as fetching the user’s emails, displaying them, navigating between emails, drafting emails, etc.

## Integration Environment

The integration environment is where developers attempt to merge their changes into a unified codebase, often using source-control software like Git. The application is likely to have tests fail during this integration step as multiple developers, who had previously been working in isolation, simultaneously attempt to merge their code. If this happens, developers can work on fixes in their local development environment and attempt to merge again. Integration tests may need to be updated in this environment as well.

In our email client example, as developers complete their individual features locally, they may simultaneously attempt to integrate their changes into a unified codebase.

## QA / Testing

The quality assurance (QA) environment (a.k.a. the testing environment) is where tests are executed to ensure the functionality and usability of each new feature as it is added to a project. These tests include unit tests of individual units of code, integration tests of interactions between internal services, and end-to-end tests which include all internal and external services running. When these tests are written and performed depends on the organization, but new and existing features are typically run against a test environment throughout the development process. The testing environment typically requires less infrastructure than is used in production.

In our email client example, tests run automatically when there is a change to the main branch to verify the functionality of units in isolation, such as testing displaying an email with mocked data. They’ll also have integration tests executed that exclusively test the application’s internal services (the client as a whole) with mocks for any external services needed (actual email data). End-to-end tests would also be conducted that use real networking and external services, with the client working as an actual email client.

## Staging

The staging environment is an environment that attempts to match production as closely as possible in terms of resources used, including computational load, hardware, and architecture. This means that when an application is in staging, it should be able to handle the amount of work it is expected to be doing in production. In some cases, an organization may choose to employ a period when the project is used internally (often referred to as “dogfooding”) before moving to production.

In our email client example, the email client will be fully functional at this stage and will be tested, simulated and in use internally within the organization. The architecture and hardware used for our client is the same as it will be once our project reaches the production environment.

## Production

The production environment refers to the infrastructure resources that support the application accessed by clients. This infrastructure consisted of hardware and software components including databases, servers, APIs, and external services scaled for real-world usage. The infrastructure required in the production environment must be able to handle large amounts of traffic, cyber-attacks, hardware failures, etc.

Depending on how a company wants to release their project, deployment strategies can greatly differ. Some examples of deployment strategies include:

completely replacing the existing application with the next version.
granting early access to a small group of users before releasing to the full user base (“canary deployment”).
executing A/B tests where different versions of the application can be run simultaneously and new features are toggled on or off using feature flags.
These various approaches allow the development team to test their application in a full production environment, including when the application is released to 100% of users.

For our email client example, the organization will use a phased approach – at first, only 10% of users will be able to use the feature, gradually increasing to 100%.

Summary
In software development, environments are the sets of infrastructure resources and tools used throughout the different stages of development.

In this article, we covered the following environments:

- Local Development: the environment where developers create features of an application on their own computers.
- Integration Environment: the environment where developers attempt to merge features into a unified codebase, often using version-control software like Git.
- Quality Assurance (QA) / Testing: the environment where tests are executed to ensure the functionality and usability of a project.
- Staging: the environment where the final production environment is mimicked and performance testing can take place.
- Production: the environment where new features are rolled out to real users on robust infrastructure. Multiple strategies exist for deploying to production.

Regardless of the terminology or where the boundaries are drawn, the ultimate objective of separating the development of software into various environments is to ensure stable software is released to end-users. Differences in environments — for example, how a web server is configured locally versus in production — are a common source of bugs. To learn about how the field of DevOps seeks to reduce these issues, you can read about various types of infrastructure that aim to create parity between different environments.
