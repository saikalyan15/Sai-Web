---
category: automation
title: "How I Integrated Calendly with Notion and n8n for Smarter Booking Workflows"
slug: calendly-notion-n8n-workflow
excerpt: "A practical guide on building an automated booking and notes system using Calendly, Notion, and n8n — perfect for freelancers and consultants."
date: 2025-06-05
featuredImage: /images/blog/calendly-notion-n8n.jpg
tags: [n8n, automation, calendly, notion, productivity]
---


# How I Synced Google Calendar with Notion using n8n

As someone juggling multiple meetings and project tasks, I wanted a way to bring all my Google Calendar events into Notion automatically. I use Notion as my central dashboard, so manually copying over meetings didn’t make sense.

Instead of relying on third-party Notion integrations, I turned to **n8n** to build a no-cost, self-hosted automation.

## 🧠 The Problem

I needed a way to:
- Read upcoming events from Google Calendar
- Filter only relevant ones (like client calls)
- Create or update pages inside Notion with meeting info

## ⚙️ How I Solved It

Here’s what the workflow looks like:

1. **Trigger**: A scheduled Cron node runs every morning at 6:00 AM.
2. **Google Calendar Node**: Pulls events for the next 24 hours using the Google Calendar API.
3. **IF Filter Node**: Filters only events with a keyword or specific calendar.
4. **Notion Node**: Creates or updates a page inside a Notion database with the event name, time, and link.

It took me just 25 minutes to build, and now I always have a visual schedule in Notion without needing to switch tabs.

## 🔁 Why This Workflow Works

- Saves time every day
- Keeps my Notion dashboard always in sync
- Makes meeting prep easy

Want to build this? Let’s talk.

