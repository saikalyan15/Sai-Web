---
category: responsible-ai
title: "AI Governance Metrics: Your Compliance Log is Just Decoration Without This"
date: "2026-03-02"
slug: "ai-governance-metrics-compliance-log"
excerpt: "The EU AI Act tells you to log human interventions. It does not tell you what three interventions in a week means. That definition is yours to make."
featuredImage: "/images/blog/ai-governance-metrics.jpg"
draft: false
---

At one of my previous companies we had a daily management board.

Every metric had an exact definition of red and green. Not approximate. Exact. 
Three or more incidents in a week triggered a structured problem solving process. 
Root cause analysis. Temporary countermeasures by end of day. Permanent fix with 
a name and a date attached.

A senior leader could walk up to that board knowing nothing about the project or 
the technology and know in thirty seconds whether the team was in trouble.

I have been reading the EU AI Act this week.

It requires high risk AI systems to log every human intervention. Every time a 
human overrides an AI decision that event must be recorded.

Good. But it stops there.

It does not tell you what to do with that log beyond storing it for compliance. 
It does not tell you what a bad number looks like. It does not tell you when the 
log stops being a compliance artifact and starts being a warning signal.

So here is what I would define for a team deploying a high risk AI system.

**Green:** Two or fewer human interventions in a week. The model is performing 
within acceptable bounds. Humans are checking but not regularly correcting.

**Red:** Three or more human interventions in any combination during the week. 
And once you hit three the week is red. Even if the remaining days are clean. 
Because the threshold has been breached. The model has demonstrated within that 
week that it cannot be trusted to operate within acceptable bounds consistently. 
Two good days at the end of the week do not undo three bad ones earlier.

One honest caveat. The exact threshold will vary by system and risk level. A 
medical diagnosis AI needs tighter bounds than a customer service chatbot. The 
point is not the specific number. The point is that you define one before you go 
live. Not after something goes wrong.

Three red weeks in a month and you have a conversation. Not about the AI. About 
whether the problem the AI is solving is well enough understood to be automated 
at all.

I am not saying this is easy to implement. Consistent human review at scale is 
a genuine operational challenge. But the threshold definition problem comes 
before the implementation problem. You cannot solve the second until you have 
solved the first.

The EU AI Act tells you to log human interventions.

It does not tell you what three interventions in a week means.

That definition is yours to make. And without it your compliance log is just 
decoration.