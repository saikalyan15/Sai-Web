---
title: "Introduction to Machine Learning"
date: 2023-07-27T21:15:54+05:30
draft: false
categories: ["machine-learning"]
tags: ["ml"]
---
In this ML series I intend to document my journey and learnings on ML. With so many videos on youtube I thought its best to follow a simple curated bite size videos from Google Machine Learning Course.

Machine Learning (ML) is a process of training a piece of software called the model to make useful predictions or generate data.
Traditional Softwares took inputs, models to deliver the desired output. ML takes in inputs and possible outputs and then generates a model or pattern of the data so the it can use that to predict future outputs. The model tends to evolve as the inputs and outputs change.

There are four different types of ML Systems
- Supervised Learning
- UnSupervised Learning
- Reinforcement Learning
- Generative AI

## Supervised Learning
In this type the model make predictions after seeing a lot of data with correct answers and then discovering the pattern around it. Supervised Learning can further be broken down into Regression and Classification
### Regression
In regression model the result is always a numeric value. Say we would like to know what would be the predicted amount of rainfall expected tomorrow we would use a regression model to arrive at it

### Classification
In classification model the result is the likelyhood of which data belongs to a particular category. Its kind of like sorting into particular category. Whether a mail is spam or not is a good example of a classification model.

Classification in turn is divided into two groups
- Binary Classification
- Multiclass Classification

#### Binary Classification 
Binary classification results in two groups more like true or false. An example of that could be whether there will rain or no rain tomorrow.

#### Multiclass Classification
Multiclass classification results in more that two values of categorization. An example of that could be whether it will rain, snow or hail tomorrow

## UnSupervised Learning
These models make predictions on a given set of data that doesnt contain any correct answers. Its subjective hence the goal here is to identify meaningful patterns among the data. This means that the model categorizes data by deriving its own rules. There are no correct outputs or answers provided for it to learn as there isnt any.

A commonly used technique of unsupervised learning model employs a technique called **clustering**.
The model determines the grouping based on the data. Clustering is different from classification because in classification we determine the groups while in clustering the groups are determined based on the data and not by us.

## Reinforcement Learning
Reinforcement learning makes predictions by getting rewards or penalties based on action performed within an environment. An example of this could be training a dog. He gets treats when he obeys a command else he doesnt get any. Reinforcement learning is used to train robots to perform tasks.

## Generative AI
This is a class of models that generates or creates content from user inputs. e.g. chatGPT. Generative AI can take multiple formats of inputs like text, images, video, audio and can even combine inputs.

