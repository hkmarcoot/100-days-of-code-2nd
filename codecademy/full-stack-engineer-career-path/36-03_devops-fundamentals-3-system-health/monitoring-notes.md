Monitoring
This article provides an overview of the practice of monitoring a system.

## What is Monitoring?

In DevOps culture, feedback loops are critical to improving processes and fixing issues. Monitoring is feedback coming from our code deployment environments.

Monitoring refers to the set of technical practices and tools that tell us what is happening in a system. Monitoring is achieved by defining and exposing the measurements we want to see while the system is running. As a result:

- We gain deeper insights into our systems’ operations.
- We can identify issues sooner.
- We can provide longer-lasting solutions.

Throughout this article we will describe some of the core concepts of monitoring:

- What are monitoring and observability?
- Why implement monitoring?
- What aspects of our infrastructure should we monitor?
- How do we measure the quality of our monitoring?

Let’s get started by looking at what it can do for our organization.

## Goals of Monitoring

Metrics can provide all sorts of business value. Let’s take a look at an example where the team is monitoring their servers handling payments:

After an update to the payment system, the number of servers handling payments drops. The monitoring system sends out an alert to engineers. Order processing starts slowing, but engineers begin finding the issue.

Monitoring is a critical way of learning that something is wrong with the health of the system. Without monitoring, the company might not know of a problem until customers complain. Orders not going through cost the company money. Monitoring can inform the engineering team as soon as a problem starts. Let’s see what happens next:

Deb is the engineer assigned to the order processing issue. She can open the logs of the downed servers and find out what was happening before the crash. The last message in each case is the system trying to talk with an authorization provider. She can locate the issue. The update had accidentally changed the authorization request format. She puts the fix in.

Monitoring also helps determine why a system is failing. Using logs and metrics, engineers can investigate what is happening within the system. The ability to see inside a system leads to more informed solutions. But, not all issues are resolved by individuals:

The order processing issue has been resolved, but graphs are indicating high usage of server CPUs. The system automatically deploys more servers and balances the web traffic across them.

Monitoring can help stop problems before they cause a failure. Through monitoring our systems, we can detect strains early and implement automation to respond as necessary.

Now that we’ve covered some of the uses of monitoring let’s discuss how we should do it. We will start by identifying some key things to monitor.

## What Should We Measure?

We’ve established that it is crucial to monitor, but what exactly should we monitor? Some critical metrics include request and server metrics.

### Request Metrics

Request metrics have to do with measuring the requests that our server receives. Some metrics in this category include (click on each item to learn more!):

Number of Incoming Requests

We can measure the amount of traffic to predict the amount of infrastructure we will need.

Response time

When requests take a long time to resolve, that’s usually a sign something is wrong in our system.

Error Responses

The error codes of our responses can provide helpful data. 400-level codes (such as 404) tend to indicate client-side errors. Pay extra attention to 500-level errors, which show an error on the server-side.

These request metrics tell us about the data flowing in and out of our infrastructure. But what can we learn about the infrastructure itself? Let’s look at some more physical metrics:

### Server Metrics

Server metrics tell us about what our servers might be experiencing at the physical level:

Hardware usage

Metrics like CPU, RAM, and disk space usage tell us about our systems’ available capacity. When usage is low, we can save money by shutting servers down. When high, we would be wise to add more servers.

Uptime

This is the degree to which our servers are available to our users. We want servers to be available as much as possible, with many organizations aiming to be “up” at least 99% of the time.

With some basic metrics covered, how can we know how effective our monitoring system is?

## Observability — Measuring Monitoring

Good monitoring seeks to create observability in a system. Observability is the ability to use a system’s information to locate and fix a problem.

Some key questions we can investigate to measure observability include:

### Issue Metrics

How long did it take to notice a system issue?

An ideal system notifies us before a problem affects a single user. In the worst case, we only find out about a problem when we get thousands of angry user emails.

How long did it take to locate the cause of the issue?

Monitoring should assist in finding the cause of the issue. When our logs fail to reflect critical issues, it is a clear sign we are not capturing essential metrics.

### Alert Metrics

The quality of our alerts tells us much about how effective our monitoring systems are. Some types of alerts that may hamper the observability of our system include:

False negatives

Pay attention when a user-affecting issue has happened, and the system does not alert us. The lack of alert indicates a hole in our monitoring. We should hold a retrospective meeting to find out what metrics could have alerted us to the problem.

False positives

This occurs when an alert is generated, but there is nothing wrong with the system. The threshold for an alert may need to be adjusted, or the alert might need to be deleted altogether.

Unactionable alerts

This type of alert has little to do with a problem and doesn’t need anything done. Like false negatives, we should reduce or delete unactionable alerts.

Useless or incorrect alerts add to the chance that valuable alerts will be ignored or unseen. Keeping our alerts at a high quality to ensure that each is given proper attention.

These metrics help us evaluate the performance of our monitoring systems. There is much more to learn, but these guidelines will give us an excellent start.

Review
In this article, we learned about monitoring, which allows our systems to tell us:

- How well they are doing,

- What is happening inside them

- Where issues might be coming from

Along the way, we’ve learned:

- How monitoring can solve important business problems

- Important aspects of a system to be monitored

- How to measure the quality of our monitoring

Monitoring is critical to applying DevOps in any organization. Start gaining system insights with monitoring today!
