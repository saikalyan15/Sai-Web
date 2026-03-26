---
title: "I Spent an Afternoon Reading Model Cards. I Still Could Not Pick a Model."
date: 2026-03-26
slug: model-cards-ai-discovery-gap
category: responsible-ai
excerpt: "Model cards have the right idea. But after an afternoon reading them 
I still could not answer the one question I needed to. Is this model right for 
my use case?"
featuredImage: /images/blog/model-cards-discovery.jpg
draft: false
---

I spent this afternoon reading model cards.

Google DeepMind. Meta. Several models on Hugging Face.

The information is there. Training data. Performance benchmarks.
Evaluation results. Ethical considerations. Intended use. Limitations.

I came away with a lot of information and no decision.

That is not a criticism of the people who wrote them. The intent behind
model cards is genuinely good. A nutrition label for AI models. Proposed
by researchers at Google in 2019. The idea was simple and right. Every
model should come with documentation that tells you what it is, what it
was tested on, and where it falls short.

But I kept asking myself one question as I read.

If I am an engineering lead evaluating two models for a specific use case
and I have a sprint starting Monday, which one do I pick and why?

The model card did not answer that. Not because the information was
wrong. Because it was written for someone else. A researcher. A regulator.
A compliance officer building a documentation trail.

Not for the developer who needs to make a selection decision this week.

---

This reminded me of something from software engineering history.

In the early days of web services we had the same problem. You knew
services existed somewhere. But finding the right one for your use case
meant reading long technical documents and making a judgement call.

Then we got WSDL and UDDI. Web service description and discovery
standards. You published a structured description of what your service
did, what it accepted, what it returned, and what it could not do. Any
developer could query it and know within minutes whether it matched their
use case before writing a single line of code.

I wonder if model cards need something like that layer on top.

Not a replacement. Just a structured discovery view designed specifically
for the selection decision.

Something that answers three questions in plain language.

What is this model designed to do well. What has it actually been tested
on. And what should you not use it for.

---

Here is what I mean with a simple example.

Imagine you are building a customer service tool for a financial
services company. You are comparing two models. Today you read two
long documents and make a judgement call based on what you can absorb
in the time you have.

With a structured discovery layer it might look different. You describe
your use case. The output tells you: this model was tested on general
conversation and document summarisation. Known limitations include
performance degradation on complex numerical queries and limited
evaluation on financial regulatory language. Review these gaps before
deploying in this context.

That is not a new technology. That is the same logic we applied to
web services twenty years ago. Applied to AI model selection.

---

I could be wrong about this. Maybe the answer is that engineering
teams are supposed to go deeper and I am just not reading the cards
carefully enough. Maybe the right audience for model cards really is
compliance and I am looking for something that does not exist yet
because nobody has needed it at scale until now.

But I do not think I am the only engineering lead who has read a
model card and walked away still unsure.

If this problem has already been solved somewhere I would genuinely
like to know. And if it has not I think it is worth asking whether
we solved a version of this problem before and what that might look
like for AI.
