---
category: automation
title: "How I Automated Instagram from Notion using n8n"
date: "2024-06-01"
slug: "automate-instagram-notion-n8n"
excerpt: "How I built a workflow to auto-generate and schedule Instagram content from Notion using n8n — saving hours each week."
featuredImage: "/images/blog/instagram-automation-notion.jpg"
---

# How I Automated Instagram from Notion using n8n

As part of building a content strategy for my sustainability blog, I wanted a simple, low-cost way to repurpose blog content for Instagram. The goal was to avoid manual posting — while staying consistent and true to my tone.

I decided to use [n8n](https://n8n.io) — the open-source workflow tool — to build an automation that:

- Watches my Notion content database
- Generates Instagram captions using OpenAI
- Creates quote-based images using a Node.js + Canvas script
- Saves everything to a Notion queue
- And (soon) schedules posts via Buffer API

## Why Notion?

Notion is my single source of truth. Every blog post and content idea lives there already. By tagging items as "Ready for Instagram," I can trigger automations without extra tools.

## Workflow Overview

1. **Trigger**: Notion updated with "Ready for Instagram" tag  
2. **Action 1**: Extract title + key points  
3. **Action 2**: Use OpenAI API to generate 5 caption variations  
4. **Action 3**: Use custom script to generate image  
5. **Action 4**: Save image + caption back into Notion  
6. *(Optional)* Send to Buffer queue

## What I Learned

- Notion's API is powerful, but requires good database design
- n8n is perfect for self-hosted, privacy-first automation
- Scheduling is easier than creation — automate content creation first

## What's Next

I'm refining image design and exploring short Reels automation next. If you're curious, feel free to reach out or ask me to open source the template.

---

*Built with Notion, n8n, OpenAI, and a bit of scripting.*
