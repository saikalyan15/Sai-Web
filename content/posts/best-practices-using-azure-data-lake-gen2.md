---
title: Best Practices for Using Azure Data Lake Gen2
date: 2022-10-29
Description: Best Practices for Using Azure Data Lake Gen2
Tags: []
Categories: []
DisableComments: false
lastmod: 2022-10-19T09:16:40.131Z
thumbnail: images/post/best-practices-using-azure-data-lake-gen2-2022-10-18-23-03-36.png
---
Few best practices to help optimize performance and reduce cost and secure data inside Azure Data Lake

1. **Low Latency:** In case you need to process high volumes of data with minimum delay or low latency it is advisable to create storage accounts with performance options set to **PREMIUM.** ![](/images/post/best-practices-using-azure-data-lake-gen2-2022-10-18-23-15-29.png) Premium tier of storage accounts stores data in SSD drives which are optimized for low latency however costs would spike. Hence, its prudent to consider this tier only if you are dealing with large volumes of data. Another thing to keep in mind is that you won't be able to upgrade an exiting standard tier to a premier tier directly. You will need to create a new premium tier storage account and then migrate data from the standard tier to premium tier
2. **Performance of ingesting data:** Often the speed of loading data into data lake depends on disk hardware like SSD, faster network connectivity like Azure Express Routes and improving throughput by performing as many reads and writes in parallel.
3. **File Formats & Sizes:** Choosing the right file format based on the file size can help optimize efficiency and costs. Large file sizes can actually help improve performance and reduce transaction costs.
4. **Directory Structure:** Choose the right directory structure when consuming data.
   IOT data, batch jobs and time series would have different directory structure in order to ease processing
5. **Access Control:** Choose the appropriate access control model to access data. Data Lake Storage Gen2 supports the following authorization mechanisms:
   - Shared Key authorization
   - Shared access signature (SAS) authorization
   - Role-based access control (Azure RBAC)
   - Access control lists (ACL)
6. **Ingest, Process and Analyze:** Based on the type of data choose an appropriate ingestion tool to load data into data lake and then process and visualize data
7. **Monitor usage and performance:** Always monitor usage and performance of your storage account using **Azure Storage Logs in Azure Monitor**
