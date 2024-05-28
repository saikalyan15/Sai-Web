+++
author = "Saikalyan Akunuri"
title = "Learning: Basic concepts of Cosmos DB"
date = "2022-09-16"
description = "Understanding basic concepts of Cosmos DB"
publishdate = "2022-09-16"
lastmod = "2022-09-02T18:19:53.173Z"
+++

Today I was reading up a bit on Cosmos DB. Below are some highlights.

Azure Cosmos DB is a fully managed serverless NO SQL database

What's special about NO SQL Databases?
The below figure describes it in a nutshell.
![](/images/post/understanding-cosmosdb-basics-2022-09-02-23-14-09.png)

There are four broad types of NoSQL databases viz.

- Document Databases
- Key-Value Store
- Column Oriented Databases
- Graph databases

In the microservices' architecture world where JSON is the defacto standard for data transmission, NoSQL is a no-brainer for storing such data.

Cosmos DB offers multiple database API's 

- Core(SQL) API : this is native to cosmos db and supports SQL to query JSON objects
- API for MongoDB : this API stores data in document structure using the BSON format. MongoDB is a document store 
- Cassandra API: this API stores data in column oriented database schema
- Gremlin API: This API allows querying graph queries and stores data as edges and vertices
- Table API: This API stores data in key/value format

In order to create a Cosmos DB you need for first create an account as shown in the figure.
The account acts like a collection for all the CosmosDB databases. Currently, one can create a max of 50 accounts under one subscription.
![](/images/post/understanding-cosmosdb-basics-2022-09-02-23-29-52.png)

The databases act like a namespace to group containers. Containers are where the data is actually stored. When you create a container a partition key is required. Currently, there is a limit of partition size to 20 GB.

The logical architecture in CosmosDB is via partitions separated by partition key. All documents with the same partition key are stored together physically.

Below is an implementation of an IOT architecture
![](/images/post/understanding-cosmosdb-basics-2022-09-02-23-39-39.png)

The IOT devices are connected to IOT Hub to send measurement data. You can choose to or not to have Azure stream analytics. It's used to run real-time analytics before the data is eventually stored in Cosmos DB. Once the data is stored in CosmosDB, one can run analytics on top of it using Azure Synapse Analytics