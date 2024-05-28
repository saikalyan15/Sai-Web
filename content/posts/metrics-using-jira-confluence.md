+++
author = "Saikalyan Akunuri"
title = "Metrics using Jira & Confluence"
date = "2022-07-29"
description = "How I simplified tracking delivery and quality metrics for distributed agile teams across different timezones"
publishdate = "2022-07-29"
lastmod = "2022-09-01T15:17:41.215Z"
+++

Have you ever had to export data out of Jira into excel just so that you could do the analysis, and apply formulas in excel to track metrics for your team? And how frustrating it is to know that while you were away working on the data, the data has changed so much that all the visualizations turn out to be useless. I have had so many such frustrating moments when I took the role of managing 10+ scrum teams across the US, EU, and India.

When I moved into program management, we were already on the Atlassian suite of products. We had Jira and confluence being used actively for our projects. Both Jira and confluence are fantastic tools but you are felt wanting more when your teams, product management, and leaders each need specific information which doesn't fit into the standard offering of Jira and confluence widgets supplied out of the box.

Some of the use cases include

1. Track the progress of features committed during Program Increment (PI). Version reports include everything like tasks, stories, bugs, epics, etc, and give overall progress of what's happening in the release.
2. How to check and track if teams are over capacity
3. Excel-like functionality to calculate simple totals, percentages, and charts which are so easy to do in excel but challenging to do in confluence.

Google search has very limited content when you look for Jira and confluence integration and putting it all together. I started exploring and evaluating various plug-ins but most of them needed some extra setup of moving data into a custom database and then running reporting queries on it something I wasn't too keen on pursuing due to the inherent cost and heavy infra-setup. Then I stumbled into an awesome add-on for confluence called [Table Filter and Charts for Confluence](https://marketplace.atlassian.com/apps/27447/table-filter-and-charts-for-confluence?tab=overview&hosting=cloud)

Table Filter and Charts for confluence helped me to run transformations on data after confluence renders the data onto the page which is simply awesome.
[Table Filter & Charts Documentation](
https://docs.stiltsoft.com/pages/releaseview.action?pageId=42239760)

Here is a link specifically on use cases on [How to use the app with Jira Issues](https://docs.stiltsoft.com/display/public/TFAC/How+to+use+the+app+with+Jira+Issues)

I have been using this combination to build quite a few advanced reports. You would need knowledge of SQL especially when you use the Table Transformer control. This is by far the most versatile and my favorite in building custom dashboards.

Come to the topic of Metrics. Below are a few of the metrics I have used to manage delivery and quality for our distributed scrum teams

1. Defect Leakage across various cloud environments
2. Feature progress status and metric around feature planned vs actual completion percentage
3. Visual representation of features that our on track and at risk
4. Real-time tracking of Team Load vs Capacity 
5. Split distribution of new product development vs sustainment work

Closing thoughts:
Tools are just enablers and have to be complemented with robust processes.

- Data is king so have processes in place to keep Jira data up-to-date
- When you see a problem area that needs improvement see how you can coin a metric around it. You know you have the right metric once you can define what a red or green looks like with that metric. Often times standard metrics might not cut it out and you would need to define one tailored to your needs
- Track your metrics and review it in meetings
- Track action items related to metric when it goes beyond the tolerable limit
- Have regular cadence in place to review whether data is up-to-date.
- Follow up with teams if data has not been updated or is not relevant. Metric won't make any sense if underlying data has issues
- You will need to use custom fields in jira when you are trying to track specific metric which is not available out of the box.

Hopefully, this article should help you get started in defining customer reports and dashboards that too in real-time.