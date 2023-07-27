---
title: "Supervised Learning"
date: 2023-07-27T22:15:30+05:30
draft: false
categories: ["machine-learning"]
tags: ["ml"]
---

As we saw in [Introduction to Machine Learning]({{<ref "posts/introduction-to-ml.md">}}) post, Supervised learning is all about training the model with set of inputs and right answers so that it can discover a pattern for it to predict on new data bsaed on historical data. Detecting whether an email is spam or not is a good use case for supervised learning.

Supervised Learning comprises of 
- Data
- Model
- Training
- Evaluating
- Inference

## Data
Data is stored in datasets which comprises of two parts viz. **features** and **label**. Features are various data inputs which are used to determine a label. The label is the answer we want the model to predict. E.g. In a weather model that predicts rainfall, the features could be latitude, longitude, temperature, humidity, atmospheric pressure while the label would be the amount of rainfall.

A dataset is characterized by its size and diversity. Size indicates the number of examples while diversity indicates the range those examples cover. Hence its usually better to have data with large size and high range or diversity to make the prediction near about accurate.

## Model
A model is a pattern which defines mathematical relationship from specific inputs to outputs. This evolves as the model undergoes training

## Training
Before Supervised learning can make predictions it needs to be trained with a dataset which has labels. The model works out a best solution for predicting labels from the features. Based on the differences between predicted and actual values which is defined as loss the model gradually updates its solution or learns. Over a period of time the model learns correct relationship between features and label. A model needs to be trained in order to learn the mathematical relationship between the features and the label in a dataset.

## Evaluating
Evaluation is all about how well the trained model has learned by giving it a trained dataset and comparing the model's prediction with actual values.

## Inference
Once we are satisifed with the results from evaluating the model we can use the model to make predictions called inferences or unlabled examples.


