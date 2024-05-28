+++
author = "Saikalyan Akunuri"
title = "Defect Leakage Metric in Cloud Environments"
date = "2022-08-05"
draft = false
description = "How to plan and track the quality of dev builds in the cloud environments"
lastmod = "2022-09-01T15:16:39.026Z"
publishdate = "2022-08-05"
+++

When we started on our cloud journey one of the key decisions we had to make was how do we want to setup our development environments. We decided to have sandbox, feature, integration, sprint, stage and production environments with CI/CD in place. We added unit tests and linting to be executed at every build and fail the build if there were errors either during compilation or unit tests failed

We defined the following environments
![](/images/post/defect-leakage-cloud-environments-2022-07-29-23-02-29.png)

- Sandbox: This environment was for developers to test their code. As soon as they check in the code they had the option to manually push the code to the sandbox environment in the cloud to see how it works
- Feature: Once the developer has completed the coding and unit test he will move the task or story to the SQA or tester queue. The tester would then merge the code into the test branch which would then trigger an automatic build and deployment. Once the code is deployed they would test the code in the feature environment
- Integration : After the tester has certified everything is working fine the developer would merge the code into the integration branch which is the "Develop" branch. This would trigger an automated build and the goal is to see if anything is breaking when it is merged with the development line code base
- Sprint: We followed a 2-week sprint and at the end of the sprint all teams would merge their code into the sprint branch. Any demos for sprint review would be showcased from the sprint environment
- Stage: At the end of all the sprints in a release code is frozen or locked and is merged into the stage branch to be deployed into the stage environment
- Production: Once testing is completed on stage and QA gives a sign off we release the code to production.

From left to right sandbox is highly volatile as it would contain developer builds while sprint and stage would be considered more stable due to the level of testing that would have taken place in these environments.

Metrics: A metric I like to define is "defect leakage %" across environments. 
E.g
Defect leakage % feature environment  = feature defect count / (sandbox+feature+integration+sprint+stage+production) * 100%

You can calculate it similarly for other environments and plot a visual chart to see the percentage of testing in different environments. You can do these calculations easily by using [Table Transformer macro](https://docs.stiltsoft.com/display/public/TFAC/How+to+use+Table+Transformer+macro) which is part of [Table Filter and Charts for Confluence](https://docs.stiltsoft.com/display/public/TFAC/How+to+use+Table+Transformer+macro)

Sample Code inside a Transformer. Table transformer supports AlaSQL which applies SQL operations to Javascript. Its quite similar to database SQL but with certain limitations.
```SQL
SELECT *, 
Round(T1.'Feature Bugs'+T1.'Integration Bugs'+T1.'Sprint Bugs'+T1.'Stage Bugs'+T1.'Production Bugs',0) AS 'Total Bugs',
(T1.'Feature Bugs'/(T1.'Production Bugs' +T1.'Stage Bugs'+T1.'Sprint Bugs'+T1.'Integration Bugs'+T1.'Feature Bugs')*100) as 'Feature Bug Leakage %', 
(T1.'Integration Bugs'/(T1.'Production Bugs' +T1.'Stage Bugs'+T1.'Sprint Bugs'+T1.'Integration Bugs'+T1.'Feature Bugs')*100) as 'Integration Bug Leakage %',
(T1.'LPT Bugs'/(T1.'Production Bugs' +T1.'Stage Bugs'+T1.'Sprint Bugs'+T1.'Integration Bugs'+T1.'Feature Bugs')*100) as 'LPT Bug Leakage %',
(T1.'Sprint Bugs'/(T1.'Production Bugs' +T1.'Stage Bugs'+T1.'Sprint Bugs'+T1.'Integration Bugs'+T1.'Feature Bugs')*100) as 'Sprint Bug Leakage %',
(T1.'Stage Bugs'/(T1.'Production Bugs' +T1.'Stage Bugs'+T1.'Sprint Bugs'+T1.'Integration Bugs'+T1.'Feature Bugs')*100) as 'Stage Bug Leakage %',
(T1.'Production Bugs - Internal'/(T1.'Production Bugs' +T1.'Stage Bugs'+T1.'Sprint Bugs' +T1.'Integration Bugs' +T1.'Feature Bugs')*100) as 'Production Bug Leakage %',

FROM T*
```

The goal is to have more defects found in lower environments rather than in production. Have a regular cadence of when to review the metrics and take counter measures when you see the metric in red.

