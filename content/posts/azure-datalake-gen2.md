+++
author = "Saikalyan Akunuri"
title = "Where is Azure Data Lake Gen2?"
date = "2022-09-09"
description = "How do I create an Azure Data Lake Gen2 resource"
publishdate = "2022-09-09"
lastmod = "2022-09-02T13:11:58.649Z"
+++

Have you tried creating an Azure Data Lake Gen2 resource. Chances are you would go to the azure portal and search for data lake keyword. You will be surprised to see only "Data Lake Storage Gen 1" and no Gen 2 resource

![](/images/post/azure-datalake-gen2-2022-09-02-18-01-49.png)

On further googling I found out that there is no explicit gen 2 resource. In order to create one I need to create a storage account
![](/images/post/azure-datalake-gen2-2022-09-02-18-07-01.png)

Specify the storage name and click next. On the next screen you will get the option to select "Enable hierarchical namespace". Check that to create an Azure Data Lake Storage Gen 2 resource

![](/images/post/azure-datalake-gen2-2022-09-02-18-17-30.png)

At first, it was weird why they had to make it this complex. I decided to dig further into the documentation I found that Azure Data Lake Gen 2 is built on top of Azure Blob Storage and the fundamental part to Gen 2 is adding hierarchical namespace to Blob Storage.
Hierarchical namespace support means it would allow the blob storage to organize objects/files into a hierarchy of categories.

It's also cheaper as it's built on top of low-cost Azure Blob Storage.

In conclusion, I do get it as to why Azure Data Lake Storage Gen 2 is part of Azure Storage, but it can be baffling for a newbie and I must admit I was a bit overconfident to create it right away instead of looking at the how-to documentation.
