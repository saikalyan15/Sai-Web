---
title: The Demerits of Live Tracking
date: 2022-11-11
Description: The demerits of live tracking when systems fail
Tags: []
Categories: []
DisableComments: false
lastmod: 2022-11-12T15:46:52.691Z
---

I have been a strong proponent of automating JIRA and confluence to track live metrics on delivery and quality. It makes tracking super easy when managing distributed teams across different timezone.

A few weeks back we upgraded JIRA and confluence and that broke all our macros and live tracking reports. Jira was very slow as many macros were failing normally queries were taking a long time to execute.
![](/images/post/the-demerits-of-live-tracking-2022-11-12-21-14-46.png)

 At that point in time I just wished I had also taken a snapshot of the reports' week on week at least during the scrum of scrums. Because now with all our reports failing we were practically in the dark on our current status. That week when I ran the Scrum of Scrum meetings, all my confluence reports were failing, couldn't run any queries directly in JIRA, and it overall turned out to be a very short meeting. It also impacted our sprint planning where assignments of tasks and user stories, estimating story points and hours all took forever to update. We finally had to make a note in Excel to update it later in JIRA.

It took us almost a week to solve all the JIRA's problems that occurred due to the upgrade, but it taught us a valuable lesson. No matter how good your live tracking is, always take periodic snapshots and store it for reference.
