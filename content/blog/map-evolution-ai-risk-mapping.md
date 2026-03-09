---
category: responsible-ai
title: "MAP Evolution: Why Your AI Risk Map Should Never Stop Changing"
date: "2026-03-19"
slug: "map-evolution-ai-risk-mapping"
excerpt: "NIST says map your AI risks before deployment. Most teams do it once and move on. Here is why that is the same mistake we made with waterfall. And what to do instead."
featuredImage: "/images/blog/map-evolution.jpg"
draft: false
---

At one of my previous companies our team needed to store measurement data from IoT devices in the cloud.

We did the architecture work properly. Cost comparisons. Stack evaluations. Performance tests. After thorough analysis we selected a NoSQL database service on Azure. Right choice on every dimension we had mapped.

Development went well. Testing went well. Release testing went well.

Then we deployed to production.

We ran dual region deployments. US and EU. GDPR required EU data residency so we always deployed EU first. We had done all our testing in US.

On release day we discovered that Microsoft had not yet rolled out the service to the EU region.

Not because the team was careless. Because the MAP we built at the start looked complete. It had one invisible gap. We never asked whether the service was available in every region we needed to deploy to.

Reality tested our MAP on release day and found what we missed.

I have been reading the NIST AI Risk Management Framework this week. The MAP function asks teams to identify context, categorise their AI system, and assess risks before deployment.

It is treated as a one time exercise. You do it before deployment. You produce a document. You move on.

That is the same mistake my team made.

AI systems make this problem significantly worse. A traditional software system has fixed behaviour you can map at the start. An AI system learns, drifts, and encounters contexts in production that nobody anticipated. The MAP you wrote before deployment describes a system that will not exist six months after go live.

## MAP Evolution

What if the MAP was not a document produced once but a living artifact that gets more accurate as the system encounters reality?

Here is the simple version.

When an AI system causes harm or produces outputs that trigger human intervention above threshold it automatically detects and logs the incident. That incident triggers a human led analysis of what the original MAP missed. The analysis produces a specific MAP improvement. A designated human reviews it, makes a documented decision, and the audit trail records everything. Who flagged it. Who reviewed it. What was decided. When.

Sprint by sprint the MAP gets more accurate. Each incident is a retro. Each retro improves the MAP.

One important caveat. The AI detects and logs. Humans analyse and decide. You do not ask the system that caused the incident to analyse its own failure. Same reason you do not ask the developer who wrote the bug to write the root cause analysis.

## Not all incidents are equal

A rough grading to guide the response:

- Operational failures: metrics crossed thresholds, performance degraded. Fast lightweight human review.
- Contextual failures: the system worked as designed but the design assumptions were wrong. The IoT deployment story above is a good example.
- Ethical failures: harm that raises questions about fairness or fundamental rights. Independent review. Possibly external audit.

## The audit trail is the accountability layer

Every flag logged. Every human decision attributed to a named individual with a recorded rationale.

If the MAP improvement is accepted the record shows who approved it.

If it is ignored that is also in the record.

The UnitedHealth algorithm denied elderly patients medical claims with a 90% error rate on appeals. Under MAP Evolution that pattern would have been flagged early. A human would have had to make a documented decision about what to do with it.

The defence of we did not know becomes we knew and we chose not to act.

That is a completely different legal and ethical position.

## The principle

My IoT deployment story happened because we mapped thoroughly at the start and then stopped questioning the MAP.

AI governance frameworks are making the same mistake at a much higher stakes level.

MAP is not a document you produce before deployment. It is a living artifact that reality continuously tests and improves.

The incidents are not failures of the system.

They are the system telling you what your original MAP missed.

The question is whether you are listening.