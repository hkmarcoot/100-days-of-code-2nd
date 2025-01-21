Continuous Delivery and Deployment
Learn about continuous delivery and deployment and how they connect with continuous integration to form the CI/CD pipeline!

Have you read our article on Continuous Integration? Check it out before continuing on!

### Introduction

Jaiden and their team have finally decided to follow continuous integration (CI) practices. CI has improved their application’s speed and stability. Jaiden has the newest version of the web app tested locally but is waiting on integration tests. Afterward, if no errors occurred, they must manually deploy the app on a production environment.

Although CI sped up development and reduced bugs, manual deployments waste a lot of time. Jaiden and their team can add continuous delivery and deployment to increase their speed and effectiveness!

In this article, we will learn how continuous delivery and continuous deployment increase project speed and quality. We will also learn how these practices work with CI to form the CI/CD pipeline.

## Continuous delivery

Continuous delivery automates the preparation of software for deployment. Continuous delivery begins where CI finishes, with the application built and tested. Automated processes move the application through staging environments while executing more tests. Continuous delivery ensures the newest version of the project is ready for production.

When the application moves between environments, the differences in how those environments were configured can cause problems. For example, code may build in a development environment but break in staging. These breakages could be due to differences in dependency versions or other issues.

A practice called containerization can reduce these differences. Containerization packages the application and its dependencies into a container. This packaging allows the entire container to migrate between environments with ease. Adding containers to continuous delivery simplifies the application movement across its environments.

After continuous delivery, the project has been built and tested in production-like environments. The project would still need to be manually deployed to a production environment to be visible to users. This step can be automated using continuous deployment.

## Continuous deployment

Continuous deployment automatically deploys an application to the production environment. Continuous integration and delivery must prepare the application before continuous deployment. Through continuous deployment, customers will always have the newest version of the application.

When using continuous deployment in combination with continuous integration, rapid merges take priority over completed features. We can use feature flags and dark launches to prevent users from accessing incomplete features.

- Feature flags are a coding technique that prevents users from accessing certain features. We can implement feature flags with simple conditional statements (such as an “if” statement). We can change the condition once the feature is ready to be released. But what if we want only a specific group of users to access a service?
- Dark launching is similar to feature flags, but certain users have access to new features while others are kept “in the dark”. Dark launching uses feature flags but specifically with conditions based on the type of user. Once a small group of real users tests the new feature, it can be gradually released to all users.

Implementing continuous delivery and deployment (CD) can further improve the automated processes started by continuous integration (CI). Together, these three processes form the CI/CD pipeline, also referred to as a deployment pipeline. Let’s take a look at how these pieces fit together.

## The CI/CD pipeline

Remember that Continuous Integration (CI) consists of frequent merging, building, and testing. CI combined with continuous delivery and deployment (CD) forms the CI/CD pipeline.

Let’s walk through the full CI/CD process. Keep in mind that CI and CD processes are automated:

1. A developer makes a change and commits their code.
2. The change is merged by CI.
3. CI builds the changed codebase and runs initial tests.
4. The “delivery” part of CD puts the build onto test and staging environments.
5. Another set of tests are run by the “delivery” part of CD.
6. Then, the “deployment” part of CD moves the build from staging to production.
7. Customers can potentially see the changes in the product.

Although the pipeline may seem complex and requires a lot of setup, we receive many benefits! Let’s explore them.

## CI/CD pipeline benefits

CI/CD automates code merging, deployment, and testing to improve speed and quality. With these automated processes in place, a number of benefits are achieved:

- With less time needed to devote to these tasks, team members can focus on developing.
- Through monitoring, developers can use feedback from the pipeline to make further speed and quality improvements.
- Frequent builds allow CI/CD tools to have a record of many older releases. When an issue occurs, developers can quickly revert to one of these previous versions. Developers can then fix the issue, and a new release can go through the pipeline.

We need to take a few steps to add CD into our deployment pipeline to gain these benefits.

## Completing the pipeline

To use CD in a project, we can do the following:

1. Make sure that CI practices are already being used in the project.
2. Configure the CD server to deploy builds to test and staging environments automatically.
3. Write post-deployment tests which trigger after continuous delivery.
4. Monitor the deployments and alert if any problems arise.
5. Configure the CD server to deploy to a production environment if no issues occur.

Since CD is often implemented along with CI, many CI tools also contain CD capabilities. If CI is set up for a project, the same tool can likely be used when setting up the CD servers.

Review
CD completes the CI/CD pipeline. Continuous delivery moves the built application through test and staging environments. In each environment, a series of additional tests are run. After continuous delivery, the build is ready to be pushed to production. Without continuous deployment, this would occur via a manual process. With the full pipeline active, continuous deployment automatically moves the build into production.

The CI/CD pipeline limits manual work, improves code reliability, and provides a detailed version history. Most tools used to add CI also enable the addition of CD. Containers, feature flags, and dark launches help CD to be a more effective process.

The full CI/CD pipeline puts into practice key themes of a successful DevOps culture. The rapid deployment of changes allows for faster continuous experimentation. The testing throughout the pipeline provides feedback about where code is failing. These benefits make the CI/CD pipeline central to a DevOps organization.

It’s time to boost our development with CI/CD!
