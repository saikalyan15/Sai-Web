+++
author = "Saikalyan Akunuri"
title = "Issues with Hot Path on Azure Service Fabric"
date = "2022-10-07"
description = "Issues with Hot Path on Azure Service Fabric"
publishdate = "2022-10-07"
lastmod = "2022-10-06T18:18:55.673Z"
+++
Couple of years back we embarked on our IOT Journey on Azure. We had large amount of sensors and controllers sending data to the cloud every 30 seconds. We chose to adopt the Lambda Architecture which has the three components of Speed Layer, Batch Layer and Processing Layer

![](/images/post/azure-hot-and-cold-path-2022-10-01-22-48-10.png)

All the sensor data was transmitted to the cloud in JSON format and passed through the speed layer. The speed layer was implemented as a stateful service on Service Fabric which would store 14 days of data and the batch layer as another stateful service which moved data from speed layer to CosmosDB.

The speed layer or the hot path is normally referred to getting of real-time data and analyzing it. It is designed for low latency at the expense of accuracy.

The batch layer or the cold path stores all incoming data in raw form and then performs batch processing.

When we implemented this solution on service fabric we ran into issues with the speed layer taking in a lot of memory as it was storing 14 days of sensor data in state thereby increasing the log size and eventually bringing the cluster down due lack of disk space. Even though we were purging the data the log files would increase in size and never decrease even after we removed the data after processing. We never could figure out why service fabric was not able to resize the log files once data was removed. 

Multiple calls with Microsoft didn't get us anywhere on why the log files wouldn't get resized once data was removed.

Eventually we reduced the amount of data we stored in speed layer from 14 days to 1 day.
So any data more than a day old was retrieved from batch layer.

I still have the feeling that they way we implemented speed processor and batch processor as stateful services would be the issue. I am still exploring some good designs to implement Lambda on Azure. Please add comments if you have any thoughts or suggestions.