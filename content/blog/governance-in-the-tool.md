---
category: responsible-ai
title: "Governance That Lives in a Document is Optional. Governance That Lives in the Tool is Inevitable."
date: "2026-03-12"
slug: "governance-in-the-tool"
excerpt: "We had a retro agreement that developers would stop closing their own tickets. Everyone agreed. Nothing changed. Then I moved it into the Jira workflow. Everything changed."
featuredImage: "/images/blog/governance-in-the-tool.jpg"
draft: false
---

In one of my agile teams we had a recurring problem.

Developers were opening tickets and closing them without QA ever seeing them. It kept coming up in retros. Everyone agreed it was a problem. Everyone committed to fixing it.

Two weeks later nothing had changed.

So I stopped asking people to remember the agreement and built it into the Jira workflow instead.

A developer could no longer close a ticket. Only QA could close it after testing. If the team genuinely needed to bypass that step they had to have a conversation with QA first and QA closed it anyway. The decision was visible. The agreement was structural. Nobody could quietly skip it.

Within a week the behaviour changed completely. Not because the team suddenly became more disciplined. Because the tool made the old behaviour impossible.

I have been reading AI governance frameworks for the past two weeks. NIST. EU AI Act. Google, Microsoft, and IBM's responsible AI reports.

They are full of things teams should do.

Log human interventions. Document data quality processes. Maintain human oversight mechanisms. Conduct bias assessments before deployment.

All of it reasonable. All of it agreed to in principle by every team I have ever seen discuss it.

And almost all of it forgotten by the next sprint.

Because it lives in a document. Not in the tool.

The retro agreement to involve QA lived in our team norms document for two sprints before I moved it into Jira. The moment it moved into the tool it became inevitable. Before that it was optional regardless of what anyone had agreed.

AI governance has the same problem at a much higher stakes level.

The EU AI Act requires teams to log every human intervention in a high risk AI system. Most teams will create a logging policy. They will document the requirement. They will agree in principle to follow it.

And then a developer under deadline pressure will ship without configuring the logging because nothing in the pipeline stopped them.

The governance lived in the document. The deployment lived in the tool. The tool won.

Governance that lives in a document is optional. Governance that lives in the tool is inevitable.

This is not a new insight. Every experienced engineering lead knows that the only process that survives contact with a real team under pressure is the process baked into the workflow. The rest is aspiration.

What AI governance frameworks are missing is not more documentation. It is the equivalent of my Jira workflow change. The structural enforcement that makes the right behaviour the only available behaviour.

Build the logging into the deployment gate. Make the pipeline fail without a completed data quality check. Require a human review step before a high risk decision reaches the end user. Not as a policy. As a workflow state that cannot be bypassed without a visible conversation.

The team will follow it. Not because they are disciplined. Because the tool gives them no choice.

That is how governance survives contact with a real engineering team.