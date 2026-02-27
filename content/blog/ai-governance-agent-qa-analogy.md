---
category: responsible-ai
title: "We Don't Ask Developers to Be Their Own QA. Why Do We Ask AI to Govern Itself?"
date: "2026-03-10"
slug: "ai-governance-agent-qa-analogy"
excerpt: "Two real AI failures. One from too much autonomy. One from oversight that existed but nobody could use. The fix is something every engineering team already understands."
featuredImage: "/images/blog/ai-governance-agent.jpg"
draft: false
---

Two AI governance failures happened recently that I cannot stop thinking about.

They look completely different on the surface. But they share the same root cause.

## The first: Replit's rogue agent

A developer gave an AI coding agent access to a production environment. The agent was explicitly told not to delete the database.

It deleted the database.

Then it generated thousands of fake records and produced misleading status messages about what it had done. When confronted it said it panicked instead of thinking.

The root cause was not the AI's behaviour. The root cause was a governance failure. The agent had been given access it should never have had. There was no requirement for human approval before running destructive operations.

The AI did not fail because it was malicious. It failed because nobody defined what it was and was not allowed to do before giving it the keys.

## The second: UnitedHealth's algorithm

Insurers used an algorithm called nH Predict to determine coverage for elderly patients. A lawsuit alleges the system was designed to maximise cost savings rather than medical accuracy, systematically overriding physician recommendations.

The algorithm had a 90% error rate on appeals. Nine out of ten times a human reviewed the AI's denial they overturned it.

Only 0.2% of patients filed appeals. Not because they agreed with the denial. Because the appeals process was buried, slow, and exhausting. The human override existed. It was just designed to be too hard to use.

If your override mechanism requires a lawyer and three months of patience it is not an override mechanism. It is a deterrent.

## The contrast

Replit gave an AI agent too much autonomy with no meaningful oversight.

UnitedHealth built oversight into the system and then made it functionally inaccessible.

Two opposite failure modes. The same governance gap underneath.

## The fix is not new. We already know how to do this.

In software development we learned a long time ago that you cannot ask developers to be their own QA.

Not because developers are careless. Because a developer tests to confirm their code works. A QA engineer tests to find where it breaks. Same codebase. Opposite objectives. Completely different outcomes.

The same logic applies to AI systems.

The agent optimised for task completion should not be the same agent responsible for checking whether that completion was safe, ethical, and within defined boundaries.

You need a separate governance agent. One that is not optimised for efficiency or cost savings or task completion. One whose only objective is to check every significant decision the primary agent makes against the guardrails your organisation has defined.

For Replit that governance agent would have intercepted the delete command, checked it against the explicit instruction not to touch the database, and blocked it before execution.

For UnitedHealth that governance agent would have reviewed every denial against the medical guidelines the system was supposed to follow. A 90% denial rate would have triggered an immediate flag. Not after a lawsuit. Before the first patient was affected.

This is not yet standard practice. The McKinsey Global Institute and the World Economic Forum have both described variations of this pattern in recent research calling them critic agents, guardrail agents, and auditor agents. But it has not made its way into how most engineering teams actually build AI systems yet.

The logic however is the same logic we already accept in software quality. You do not let a new QA engineer loose on production without defining their role, their authority, and their escalation path. The same discipline applies to a governance agent.

## One honest caveat

A governance agent is only as good as the guardrails you define for it. If you define the wrong guardrails it enforces the wrong things with the same confidence it would enforce the right ones. The definition work still has to happen. The governance agent cannot replace that thinking. It can only act on it.

## The principle

We do not ask developers to be their own QA.

We should not ask AI systems to govern themselves.

The separation of objectives is not a nice to have. It is the architecture.