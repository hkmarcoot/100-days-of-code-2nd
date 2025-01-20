Infrastructure Configuration
This article looks at infrastructure configuration, its challenges, and modern DevOps practices.

Introduction
Camila just learned that one of the packages used by her team’s application has a major security flaw. A new patch for the package is available which fixes the problem. Camila is eager to protect customers’ data so she rushes to update the package on production servers.

Days later, the team finishes testing a new auto-complete feature. They deploy the feature, only to find that it does not work in production! How was this missed during staging? Camila’s stomach sinks. She realizes she forgot to update the package on staging servers. Staging and production were not in sync.

Stories like this are all too common. With good infrastructure configuration practices, they are preventable. This article will explore infrastructure configuration and its challenges. We’ll also introduce some DevOps tools and practices for infrastructure configuration. Let’s start by taking a look at what infrastructure configuration means.

## What is infrastructure configuration?

Before an application is deployed, its infrastructure must be provisioned and configured. Traditionally, business staff performed these tasks manually. Let’s dig a little bit deeper into what they entail.

## Provisioning

Provisioning means setting up servers, network equipment, and other infrastructure. Traditional server provisioning has several steps:

1. An operations team member must acquire a server and install an operating system.
2. Next, they configure the IP address, hostname, firewall, and DNS settings.
3. Finally, they connect it to a network.

In today’s cloud world, server provisioning means spinning up a virtual machine. There are other types of provisioning as well:

- Network provisioning means setting up network components such as switches, routers, and gateways.
- User provisioning means setting up users, user groups, and privileges.
- Service provisioning refers to the provisioning of cloud services.

Once infrastructure has been provisioned it can be configured.

## Configuration

Infrastructure configuration involves customizing provisioned resources. Some example tasks include:

- Installing dependencies on a server.
- Updating to a specific Linux distribution.
- Setting up logging.
- Creating database configuration files.

Unlike the initial step of provisioning, infrastructure configuration can be ongoing. Software needs updating. Passwords need changing. Further changes to infrastructure fall under the realm of infrastructure configuration.

As a company grows, its infrastructure needs to scale as well. Keeping up with infrastructure configuration becomes a daunting task. Let’s dive into some of the problems that arise.

## Problems

Infrastructure configuration is often fraught with challenges. Below are some common problems with manually configuring infrastructure.

Cost

Infrastructure configuration is tedious and repetitive. Large-scale infrastructure requires a large staff to configure it. High staffing needs lead to high operating costs.

Scalability

Provisioning new infrastructure is time-consuming. The time required makes it difficult to scale in response to increased demand.

Configuration Drift

Manual setup is prone to error. Over time, configurations will become inconsistent. These accumulating errors are known as configuration drift.

Poor Visibility

Due to human error, there is no guarantee that servers are in their desired configuration. It can be difficult to pinpoint these errors later on.

Many of these problems have been mitigated with modern practices. However, it took a while to get to where we are today. Let’s explore how infrastructure configuration has evolved over the years.

## Modern Infrastructure configuration

Realizing the flaws with manual configuration, teams began to automate tasks. At first, this consisted of shell scripts that configured servers. Tools such as csshx allowed commands to be passed to many servers simultaneously.

These steps helped pave the way for how DevOps handles infrastructure. People realized that many common-sense development practices were missing from infrastructure configuration. A developer would never change code without checking it into version control. Why was it okay for server configurations to remain untracked? This thinking led to one of the core principles of DevOps, which is discussed in the next section.

## Infrastructure as Code

Infrastructure as Code (IaC) is the act of defining infrastructure in configuration files that are stored and tracked in version control. With IaC, best practices from development are applied to infrastructure. For example:

- Configuration files should be version-controlled.
- Configuration files should be the source of truth for infrastructure state.
- Changes to configuration files should be tested before they are deployed.
- Provisioning and configuration should be automated as much as possible.

These practices solve many of the issues with manual infrastructure configuration. Let’s explore how.

## Benefits of IaC

Compared to manual configuration, IaC has the following benefits:

- Speed: It is easier to automate repetitive tasks since configuration files are machine-readable.
- Consistency: It leads to reliable configurations since setup tasks are automated from configuration files.
- Visibility: It is easy to tell exactly when and where changes are made.
- Cost: It lowers staff hours spent configuring and troubleshooting infrastructure.

Given these benefits, IaC is an important concept. How is it achieved in practice? IaC gave rise to some important tools in the DevOps toolbox. Let’s look at a few of them.

## IaC tools

IaC tools can be categorized in two different ways. Let’s first look at how IaC tools are split by the stage of configuration they focus on.

## Configuration orchestration vs configuration management

IaC tools can be classified as either configuration orchestration or configuration management tools. Configuration orchestration focuses on the provisioning of cloud resources. Configuration management focuses on maintaining a desired state in already provisioned resources. Most tools can perform some degree of both tasks but specialize in one.

One example of a configuration orchestration tool is Terraform. It has native support for the most common cloud providers. Configuration files are written in either HashiCorp Configuration Language (HCL) or JavaScript Object Notation (JSON). These files are then passed into Terraform. Terraform makes the cloud API calls needed to spin up the declared resources.

Configuration management tools include Ansible, Chef, and Puppet. These tools maintain a consistent state across cloud resources. They can help automate daily tasks. Examples of these tasks are:

- Updating dependencies.
- Modifying database settings.
- Monitoring health are examples.

These are the goals of IaC tools, but they take different approaches to achieve them. Let’s look at how IaC tools are categorized based on their approach.

## Declarative vs imperative approach

IaC tools take one of two approaches to configuration files. In the declarative approach, configuration files describe the desired state of infrastructure. With the declarative approach, an IaC tool will configure your infrastructure for you based on this defined state. In the imperative approach, configuration files list the specific commands, in a specific order, needed for configuring infrastructure.

Both approaches are capable of achieving the same configuration. The difference is that the declarative approach focuses on what infrastructure state you want to achieve, while the imperative approach focuses on how to get there.

For example, the declarative approach to a peanut butter and jelly sandwich might show a picture of a completed sandwich. A sandwich-making robot would then attempt to recreate the sandwich. The imperative approach would list the steps needed to complete the sandwich:

1. Slice the bread.
2. Spread the peanut butter and jelly on the slices.
3. Put the slices together.

Most IaC tools, such as Terraform and Puppet, fall under the declarative approach. Chef is a notable exception; it follows the imperative approach. Ansible is a tool that allows for declarative or imperative configuration files. Let’s look at an example in Ansible to see how both approaches can achieve the same result.

## Configuration examples

Below we have an Ansible “play” which is written in YAML. Ansible will execute tasks in the order in which they appear in the play.

The following play is declarative — it describes the desired state and lets Ansible determine the correct way to achieve it. The play ensures that a database server is always running the latest version:

```
- name: Update mysql server
  hosts: databases
  remote_user: root

  tasks:
  - name: Update mysql server to the latest version
    ansible.builtin.yum:
      name: mysql-server
      state: latest
      update-cache: yes
  - name: Restart mysql server
    ansible.builtin.service:
      name: mysql-server
      state: restarted
      sleep: 1
```

The first task in this declarative play updates the MySQL server to the latest version. It uses the built-in Ansible package manager called yum. The second task restarts the MySQL server with one second of downtime. It uses another built-in Ansible module called service.

Below, we have another play that achieves the same configuration. This time, however, we list the exact shell commands that will configure the server. This makes it an example of the imperative approach:

```
- name: Update mysql server
  hosts: databases
  remote_user: root

  tasks:
  - name: Update mysql server to the latest version
    ansible.builtin.shell:
      echo “Ensuring mysql-server is at latest version”
      yum clean mysql-server
      ​​yum update mysql-server
  - name: Restart mysql server
    ansible.builtin.shell:
      echo “Restarting mysql server”
      service mysql stop
      sleep 1
      service mysql start
```

As is often the case, these two approaches offer a tradeoff. The declarative approach is convenient. We don’t have to know exactly how to achieve the desired configuration. The imperative approach offers more control and insight into what is going on. This control comes at the expense of convenience.

Either way, the use of IaC tools helps maintain a healthy and scalable infrastructure. We’ve come a long way since the early days of infrastructure configuration. Let’s review what we learned.

Review
Manual infrastructure configuration can be fraught with challenges. It is often costly, error-prone, and difficult to troubleshoot. Over the years, teams began to automate these processes. Eventually, IaC became a core DevOps practice. This practice helps create a cost-effective, scalable, and consistent infrastructure. IaC is a prime example of how DevOps bridges the gap between development and operations.
