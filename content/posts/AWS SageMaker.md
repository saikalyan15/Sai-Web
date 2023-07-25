---
title: "AWS SageMaker"
date: 2023-07-20T16:08:24+05:30
draft: false
cover: 
    image: images/posts/AWS%20SageMaker-2023-07-25-14-52-09.png
    alt: AWS SageMaker
    caption : AWS SageMaker
tags: ["sagemaker", "aws"]
categories: ["ML"]
---

My journey in learning AWS Sage Maker. Here I would be documenting my journey of learning AWS SageMaker
and to learn how to depoly models into production. I will documenting steps right from setting up AWS Sagemaker 
building a pipeline, data preprocessing, model training and tuning, model registration, model deployment, 
data monitoring and model monitoring. 


# Setting up Domain in AWS SageMaker
1. Once you log into SageMaker on the LHS menu click Domains
2. Click on create domain
3. I choose quick setup and you would need to create a new execution role and specify an S3 bucket. I chose to use "Any S3 bucket" as when I tried to specify one I landed into some issues
4. It take a while for the domain to get created but once done it would have also created a default user profile





