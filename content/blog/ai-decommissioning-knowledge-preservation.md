---
category: responsible-ai
title: "You Cannot Interview a Neural Network. The Hidden Cost of AI Decommissioning."
date: "2026-03-17"
slug: "ai-decommissioning-knowledge-preservation"
excerpt: "When I joined one company as an architect I discovered they had hired five of us to replace one person's ten years of institutional knowledge. It did not work. AI decommissioning has the same problem. Except it is worse."
featuredImage: "/images/blog/ai-decommissioning.jpg"
draft: false
---

When I joined one company as an architect I discovered something uncomfortable on my first week.

Management had hired five architects including me to solve what they saw as a people problem.

There was a senior architect who had been with the product since it was built. She knew everything about the system. Every edge case. Every architectural decision. Every workaround and why it existed. Over ten years she had become the only person who truly understood it.

Management saw her as a bottleneck. Their solution was to hire five architects and let us learn what she knew.

When I heard the full story I thought if you had told me this upfront I would never have joined.

Architecture and design do not work that way. Ten years of living with a system cannot be transferred by hiring five people and pointing them at the codebase. That knowledge was not in any document. It was not in the code comments. It was in her head, built from a decade of encounters with the system's real behaviour under real conditions.

We spent months trying to extract it. We got maybe thirty percent.

I have been reading the NIST AI Risk Management Framework this week. Govern 1.7 talks about processes for decommissioning and phasing out AI systems.

It is one paragraph.

And it says almost nothing about the most expensive problem in AI decommissioning.

When you turn off an AI system that has been in production for two years you face exactly the problem my former employer faced with that architect. Except it is worse.

At least with the architect you could sit her down and ask her questions. You could run through scenarios. You could interview her knowledge out of her head even if you only captured a fraction of it.

You cannot interview a neural network.

An AI system that has been in production learns things nobody explicitly taught it. It encounters edge cases your test suite never covered. It develops sensitivities to patterns in real world data that were invisible in your training set. All of that learning is encoded in the model weights. It is not documented anywhere. Nobody on your team can fully describe it. And when you decommission the system most of it disappears.

The compute cost of training the model is visible on your cloud bill. The knowledge cost of losing what it learned in production is invisible until you try to replace it and discover that the new model keeps making mistakes the old one stopped making eighteen months ago.

This is not a problem the industry has solved. Most organisations handle AI decommissioning the same way my former employer handled that architect. They assume the knowledge will somehow transfer and discover too late that it will not.

But there are four things worth doing before you decommission an AI system that most teams never do because nobody planned for them at deployment.

Preserve the model weights with full versioning and documentation of when they were last updated and what production data they have been exposed to. This is the closest thing you have to the architect's institutional knowledge. Do not delete it. Archive it.

Document what the model learned in production before you turn it off. Not the training data. The production behaviour. Where did it perform better than expected. Where did it surprise you. What edge cases did you discover after go live that changed how you used it. This is the equivalent of the exit interview you should have done with that architect.

Preserve and version the training dataset as a long term organisational asset not a temporary artefact. The data that created the model's capabilities is often more valuable than the model itself for training its successor.

Define a knowledge transfer review at go live not at decommissioning. The same way you define your go live criteria before deployment define your decommissioning criteria at the same time. Who is responsible for knowledge preservation. What needs to be documented. What gets archived. Make it a workflow state not an afterthought.

The architect who knew everything about that product eventually left anyway. By then it was too late to capture what she knew.

Do not make the same mistake with your AI systems.

Plan for the end at the beginning. Not because you want the system to fail. Because every system eventually does and the knowledge it accumulated is worth more than the infrastructure it runs on.