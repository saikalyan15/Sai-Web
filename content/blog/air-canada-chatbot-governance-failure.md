---
title: "Air Canada Let a Chatbot Make a Promise It Refused to Keep. 
A Tribunal Said That Was Not Okay."
date: 2026-04-14
slug: air-canada-chatbot-governance-failure
category: responsible-ai
excerpt: "Air Canada's chatbot gave a grieving passenger incorrect 
information about bereavement fares. When he asked for a refund the 
airline argued the chatbot was a separate legal entity not responsible 
to them. A tribunal disagreed. Here is what the engineering team should 
have asked before launch."
featuredImage: /images/blog/air-canada-chatbot.jpg
draft: false
---

Jake Moffatt's grandmother died on November 11 2022.

The same day he visited Air Canada's website to book a last minute
flight from Vancouver to Toronto. He asked the chatbot about bereavement
fares. The chatbot told him he could apply for a discounted rate within
90 days of travel. He booked the full fare tickets trusting that
information. He submitted his refund application. He provided his
grandmother's death certificate.

Air Canada refused. They told him bereavement fares cannot be claimed
after travel has already happened.

He showed them a screenshot of the chatbot's exact words. An Air Canada
representative looked at it and admitted the chatbot had provided
misleading words.

They still refused to refund him.

---

In February 2024 the British Columbia Civil Resolution Tribunal ruled
against Air Canada.

Air Canada's defence was remarkable. They argued the chatbot was a
separate legal entity responsible for its own actions. Not Air Canada's
problem.

The tribunal found this argument astonishing. A chatbot is part of your
website. Your website is your responsibility. It does not matter whether
the information comes from a static page or from a bot. If it is on your
site you own it.

Jake Moffatt was awarded 812 dollars. Not a life changing sum. But the
ruling set a precedent that every engineering team building customer
facing AI should read carefully.

---

I spent 25 years in software and I can tell you exactly how this
happened. Not the legal part. The team part.

There were two governance failures here. Neither of them required
advanced technology to prevent. Both of them required someone to ask
the right questions before launch.

**The first failure happened the moment the chatbot spoke.**

When the chatbot told Jake he could apply for a bereavement refund
retroactively it was working from outdated policy data. The actual
policy said no retroactive claims. The chatbot said the opposite.

That conversation should have been logged. If the chatbot's response
contradicted current policy it should have been flagged automatically.
A responsible team should have been alerted that a customer just
received advice that does not match what the policy page says.

None of that happened. The conversation disappeared into silence. No
log. No flag. No alert. No human ever reviewed it.

Jake was not the only person who asked that question. He was just
the one who fought long enough to reach a tribunal.

**The second failure happened when Air Canada found out.**

An Air Canada representative saw the screenshot. They admitted the
chatbot had given misleading words. They noted the issue to update
the chatbot.

And that was it.

No audit of how many other customers received the same incorrect
advice. No investigation into how many people booked full fare tickets
trusting information that was wrong. No review of whether other
chatbot responses contradicted other policies. Just a note to fix
this one thing and move on.

That is not a post mortem. That is burying the problem.

---

But underneath both of those failures was something more worrying.

There was no automated monitoring of chatbot responses against
current policy. There was no exception flagging. There was no
escalation path. There was no responsible team to escalate to.
There was no audit trigger when a complaint revealed a systemic issue.

The governance structure was not weak. It was absent.

Which means Jake Moffatt's tribunal claim was the only detection
mechanism Air Canada had. A grieving customer fighting for 812
dollars was the monitoring system.

Think about that for a moment. A company deployed a customer facing
AI tool that was making promises on its behalf. And the only way
they would ever know the tool was giving wrong advice was if a
customer complained loudly enough and long enough to force the issue.

---

I have been in hundreds of sprint planning sessions across 25 years.
The questions that never get asked are not the hard ones. They are
the obvious ones that get crowded out by the pressure to ship.

Who reviews chatbot responses when they contradict current policy.

What is our escalation path when a customer says the AI gave them
wrong information.

Who owns the accuracy of this system after it goes live. Not who
built it. Who owns it. Every day. Every time the business changes
a rule. Every time a new edge case appears.

If those questions do not have named answers before you launch you
do not have a governance model. You have a chatbot and a hope.

---

The Air Canada chatbot did not malfunction. It worked exactly as it
was built. The training data was out of date. Nobody had built a
process to keep it current. Nobody had built a system to detect
when it went wrong. Nobody had defined who was responsible when it
did.

That is not a technology failure. It is three governance failures
sitting on top of each other.

And the only reason we know about it is because one person refused
to give up.

Jake Moffatt got 812 dollars. His grandmother was already gone. He
spent months fighting for a refund while grieving.

The amount does not matter. What matters is that a grieving person
trusted a company's AI tool on the worst day of his year. And the
only thing standing between that trust and accountability was his
own persistence.

That is what happens when teams ship without governance. Not
frameworks. Not policies. Just three simple questions with named
answers before you go live.
