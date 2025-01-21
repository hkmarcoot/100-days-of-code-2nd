Resiliency
This article introduces practices for making systems that continue to perform under adverse conditions.

From an unknown location, behind layers of virtual network providers (VPNs), an enter key is pressed. Millions of requests begin bombarding the servers. It’s a classic DDoS cyber attack. The company’s servers start to buckle under the traffic. Customers first see the web pages load slower, then slower still, then they don’t load at all. How can we prevent this?

When it comes to software systems, time really is money — unexpected downtime can result in a loss of transactions, decay of customer trust, and a host of other issues. Failure will always be a part of our systems. However, with the right preparation, we can build systems that are resilient to failure.

In this article, we will introduce resiliency, a system’s ability to continue to perform despite experiencing problems. Creating a resilient system allows our services to be highly-available, which means our customers can access our functionality a vast majority of the time.

So we should make our systems resilient, but against what? Let’s get started by discussing problems we need to be resilient against.

## System threats

Infrastructure can fail in a variety of ways. It is impossible to prevent any failure within such a system. Instead, we can only predict how it might fail and design the system to respond acceptably. Let’s discuss some common types of failures.

### Internal failures

Over time, infrastructure becomes more prone to failure. Some reasons for this include:

- Hardware failures: disk drives, RAM, CPU breakage over time.
- Firmware becomes outdated over time, hardware support ends.

### External Failures

Systems dependent on external services require the resiliency of those external services. We can’t control whether a service or API we use will stop being supported or be shut down.

### Attack

Cyberattacks are attempts to disrupt system services or steal an organization’s data. They can happen to businesses of all different sizes and types. Some common types of cyberattack include:

- Distributed Denial of Service (DDoS) attacks try to crash a target by overwhelming it with requests.
- SQL injections try to run malicious database code to reveal internal information.
  Learn more about cyberattacks in our Introduction to Cybersecurity course!

We now have an understanding of some of the main threats to our systems. Let’s discuss how we can protect ourselves against them.

## Methods for resiliency

Failures will always happen. Resiliency is about making our systems able to handle failure well. Two strategies for doing this are:

1. Reducing the workload.
2. Spreading the work around.

Let’s discuss how we might implement each of these strategies.

### Reducing workload

We can start by reducing the requests our system needs to process. We can minimize system work via two mechanisms: input validation and caching.

#### Input validation

Input validation involves running checks on requests coming into the system. These checks will allow us to “throw away” malformed or malicious requests. Validation prevents these “bad” requests from reaching our inner systems.

#### Caching

Some of the regular requests that come into our system might return the same results again and again. Caching stores the commonly requested results, reducing the work necessary to resolve similar requests. Caching separates requests into two types:

- Cache hits: those that are already in the cache.
- Cache misses: which need work from the application server.

### Spreading The Work Around

We need our system to be able to handle varying levels of workload. The amount of work will vary in a system over time, and during high traffic events, it needs to be more distributed. Below are some mechanisms for accomplishing this, which work hand in hand.

#### Automatic scaling

Automatic scaling allows us to use more or fewer servers based on need. Monitoring can detect when our system is encountering a high or low amount of traffic. When monitoring detects a high amount of traffic, our system can add more servers. Upon low traffic level detection, automatic scaling can reduce the number of servers.

Adding or removing servers isn’t enough. We need a system to direct the appropriate amount of traffic to any servers we have. Let’s discuss the mechanism for doing so, load balancing.

#### Load balancing

A load balancer distributes requests across many resources. With two servers, a load balancer might send every other request to each server.

We’ve discussed some of the primary ways to build resiliency into our systems, but how do we know we’ve done a good job? Let’s discuss some methods for measuring how well our resiliency systems are working.

## Measuring resiliency

We want to be able to estimate how our systems will perform under adverse conditions. There are three approaches we can use to measure the resiliency of our systems. Each approach provides a different degree of accuracy.

### Analysis of infrastructure

Static infrastructure analysis is the easiest but least accurate method of measuring resiliency. We make assumptions about system performance based on our infrastructure specifications.

Imagine we have three servers, each capable of handling 3000 requests per second. We then reason that our system can handle 9000 requests per second. But when we connect everything, we find our system starts to struggle at 8000 requests per second.

Unfortunately, the conditions our systems can handle on paper often differ from reality. While this kind of analysis can produce a ballpark figure, we shouldn’t rely on it for exact amounts.

### Controlled chaos

Remember, we want to know how our system will perform under difficult circumstances. It makes sense then to create some problems on purpose, to see how our system responds. Let’s take a look at some ways engineers test the resiliency of their systems.

#### Penetration testing

Penetration testing involves trying to exploit security vulnerabilities by simulating cyberattacks. Penetration testing gives us a chance to see how our system might respond to a malicious user. Using penetration testing allows us to identify holes in our security that we need to fix.

#### Load testing

Load testing seeks to replicate situations in which the system is under heavy use. Load testing might simulate millions of customers trying to access our site all at once. Load testing can help us identify areas in which the system will break under real-world conditions.

#### Chaos engineering

Engineers practicing chaos engineering will purposely cause system failures. The engineers might unplug a server, take down a critical API, or disconnect storage. These actions reveal how our system will respond in failure scenarios. We can use these insights to identify weaknesses and strategies for these situations.

## The Real World

The most accurate predictor of how systems react to problems is how they respond to real problems. We can use aspects of monitoring to measure our system’s responses to problems. Some important metrics might include:

- Uptime: what percentage of the time is our system available?
- Recovery speed: when an outage occurs, how long does it take for the system to become available?
- Request resolution time - how fast are incoming requests able to be processed?
- Request failures - how many requests are failing to resolve?

With these processes and metrics, we have a way to create and measure system resiliency. Let’s wrap things up!

Review
We’ve introduced resiliency, a system’s ability to perform under problematic conditions. These problems range from device failures to orchestrated attacks by malicious actors. Resiliency practices allow us to provide critical services even under adverse conditions. Let’s start building systems capable of weathering any storm!
