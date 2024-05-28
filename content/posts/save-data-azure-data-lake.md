---
title: How many copies is stored by default in Azure Data Lake
date: 2022-10-28
Description: How many copies of data is stored in Azure Data Lake
Tags: []
Categories: []
DisableComments: false
lastmod: 2022-10-28T05:47:55.853Z
---

The way Azure stores data depends on the type of redundancy option it has been configured. By default, it stores three copies in primary region so that It's protected from planned and unplanned events like outages, hardware failures etc.

Often when choosing a redundancy option we need to strike a balance between costs and higher availability.
For example in the primary region we have two options viz. Locally redundant storage (LRS) and Zone Redundant Storage (ZRS). While LRS replicates your data 3 times it does so in a single data center. So if there is an outage in that data center it would affect all 3 copies of your data whereas ZRS would still give your data as it stores 3 copies of data in 3 availability regions hence the cost of this option is more.

Based on the sensitivity, criticality and availability of data you would need to select which option would work best for your use case.

For scenarios which require high availability one can store additional copies into secondary region. In secondary regions again you have two options viz. Geo redundant storage (GRS) and Geo Zone redundant storage (GZRS). Interestingly the data copies in secondary region either by GRS or GZRS would replicate data three times using LRS. One should note that the paired secondary region is tied to the primary region which cannot be changed.
With GRS the data would be stored 3 times in primary region using LRS, and then it stores 3 copies in secondary region using LRS.
With GZRS the data is copied 3 times into 3 availability regions, but it is stored 3 times in LRS in the secondary region. You don't get 3 availability regions like in primary region.

Microsoft says that "The primary difference between GRS and GZRS is how data is replicated in the primary region." I am not quite sure what it means. It was an interesting revelation to see how the replication options are different when it comes to choosing the secondary option which kind of contradicts the understanding of how its set in primary region.
