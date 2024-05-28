---
title: Quick Tips to analyze your Azure Workloads
date: 2022-11-25
Description: Azure
Tags:
  - Azure
Categories:
  - Azure
DisableComments: false
lastmod: 2022-11-28T11:24:33.590Z
---

Have you felt overwhelmed trying to figure out how your workloads performed in Azure? Is there any design changes I need to do to make my cloud solution improve on reliability, security, cost optimization, operational excellence and performance efficiency.

When I was researching on all the above topics I got know about [Microsoft Azure Well-Architected Framework](https://learn.microsoft.com/en-us/azure/architecture/framework/). It provides prescriptive guidance and recommendations for architects for creating and reviewing their solutions around the 5 pillars of Reliability, Security, Cost Optimization, Operational Excellence, and Performance Efficiency.

Before you get into reading the best practices and guidance it is so important to evaluate or assess your current workloads and that is where Azure Advisor becomes a very handy tool.
![](/images/post/ways-to-improve-azure-workloads-2022-11-28-15-58-27.png)
The advisor quickly evaluates your environment and provides best practice recommendations against the 5 pillars of [Microsoft Azure Well-Architected Framework](https://learn.microsoft.com/en-us/azure/architecture/framework/)

You also get a neat overall score and a breakdown of advisor categories in percentages. I would first like to start with cost category as often I have seen resources that were started but left or forgotten and over a period of time piles up into a large bill

![](/images/post/ways-to-improve-azure-workloads-2022-11-28-16-07-18.png)
Here is how recommendations for my environment looked like. When I look at the bottom recommendation I clearly know that a developer was experimenting with a resource and forgot to delete. Not all recommendations can be actioned like the one here which talks about moving to a reserved instance which not be feasible for us at the moment.

Nevertheless, It's good to know what's happening with your environment. Always baseline your environment with such assessments before you move to recommendations. That way you get to know whether it has improved or deteriorated the environment.

**CONCLUSION**
I recommend all of you to give Azure Advisor a try and baseline the results. Have a periodic cadence to review the advisor rating and take corrective actions. Baseline the scores and track the trend of the score. Work on increments and evolve your best practices which are tailored to your environment and business so that over a period of time you have a good playbook to optimize your environments.