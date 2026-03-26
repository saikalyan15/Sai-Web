---
title: "I Read Everything Written About Auditing AI. Nobody Tells You What To Do On Monday."
date: 2026-03-31
slug: ai-auditing-beauty-pageant-problem
category: responsible-ai
excerpt: "Every AI auditing framework tells you what to measure. None of them 
tell you how. And the deeper you go the more you realise the problem is harder 
than anyone is admitting."
featuredImage: /images/blog/ai-auditing.jpg
draft: false
---

I spent time reading everything written about auditing AI systems.

Frameworks. Academic papers. Regulatory guidance. Industry reports.

They all do the same thing. They tell you the audit must measure compliance
against a normative framework. The audit must include target scoping,
documentation submission, evidence verification. The audit must assess
fairness, transparency, and accountability.

It reminded me of a beauty pageant answer. Big words. Noble intent.
Zero instructions for Monday morning.

Nobody tells you what to actually do.

---

The reason the frameworks feel hollow is not because the people writing
them are wrong. It is because they are applying the wrong mental model.

Traditional software auditing works because software is deterministic.
You give it input A and it returns output B. Every time. Without exception.
You write a test case. It passes or fails. You have a result.

Traditional software also fails loudly. It crashes. It throws an error.
You know something went wrong and you go fix it.

AI does neither of those things.

The same input can produce different outputs on different days. The model
drifts over time. It can be confidently wrong without any error appearing
in your logs. It can treat one group of people differently from another
in ways that never show up in a test run.

AI fails silently. And the entire audit industry is still using frameworks
built to catch loud failures.

---

But there is a deeper problem that almost nobody is talking about.

In traditional software, running a test does not change the software.
The act of testing is neutral. You test the same artifact today that you
will test tomorrow.

With AI that is not true.

When you run a test the model processes it. If the model is updating based
on interactions your next test is running against a slightly different model
than your first test ran against. Your baseline keeps shifting under you.

This means a point in time audit tells you what the system was like at
that moment. Not what it is like now. Not what it will be like next month.

You cannot certify something that is changing while you are examining it.

---

I do not have a complete answer to this yet. I am still working through it.

What I do know is that the current approach of borrowing audit frameworks
from traditional software and financial systems and applying them to AI is
not working. The problem is fundamentally different and it needs a
fundamentally different approach.

So I started building something to find out what that looks like in practice.

Not a framework document. An actual test harness that runs a model against
real scenarios and measures what it does. Not what it claims to do.

I will share what I learn as I build it.
