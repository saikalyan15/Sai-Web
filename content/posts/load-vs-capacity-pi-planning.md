+++
author = "Saikalyan Akunuri"
title = "Live Load vs Capacity Tracking during PI Planning "
date = "2022-08-12"
description = "How to track live load vs capacity numbers for distributed agile teams"
publishdate = "2022-08-12"
lastmod = "2022-09-01T15:17:41.213Z"
draft = false
+++


During PI Planning we often struggled to match the load and capacity of teams. As we had all the epics defined in Jira figuring out the load from Jira would always be a challenge. We invariably would export the data in excel as it was easier to do calculations. We often landed in sync issues and lost lot of time reconciling data between jira and excel.

[Table Filter and Charts for Confluence](https://docs.stiltsoft.com/display/public/TFAC/How+to+use+Table+Transformer+macro) helped us solve this problem by allowing us to do calculations on the fly. No matter how many reassignments were done or story points changed we were always able to get a true picture of whether teams were under capacity or over capacity. Our PI Planning experience improved considerably as teams were now able to see in real-time whether they were overloaded instead of manually tracking it individually

You can either use [Table Filter macro](https://docs.stiltsoft.com/display/public/TFAC/How+to+use+Table+Filter+macro) or [Pivot Table macro](https://docs.stiltsoft.com/display/public/TFAC/How+to+use+Pivot+Table+macro) to build load pages and then use a transformer to join Load and capacity tables via SQL Join and then perform calculations. The best part is that the tables can be of different types. I used Jira tables to get the load and created a static table in confluence to put the team's capacity. 