+++
author = "Saikalyan Akunuri"
title = "Outage Azure API MGMT - Reason: Incorrect Pricing Tier"
date = "2022-08-26"
description = "How we missed setting the correct pricing tier for Azure API Management in Production"
publishdate = "2022-08-26"
lastmod = "2022-09-01T15:16:57.002Z"
+++

Last week we were shocked to see our production environment go down for a few minutes. Azure API Management was facing network issues for 10 mins, and then it came back and everything was normal. Since it was production environment we wanted to get to the bottom of what caused an outage. A Microsoft ticket and a couple of hours later we got to know that a compute node that powers API Management service was being rebooted, and it was triggered by an automatic upgrade

![](/images/post/azure-api-mgmt-pricing-tier-2022-08-17-21-30-31.png)

As you can see the above message from the azure portal can be as cryptic as ever giving no further leads into what was causing it.
Though we love upgrades, but we didn't want such ad-hoc situations to happen in production. Normally our production environment upgrades are planned and schedule in non-business hours so that the impact to customer is minimum.

Upon further investigations we got to know that our pricing tier for API management in production was set to developer tier which means NO SLA

![](/images/post/azure-api-mgmt-pricing-tier-2022-08-17-21-43-23.png)

A further Google search got me to https://azure.microsoft.com/en-in/pricing/details/api-management/ which shows the list of various pricing tiers for Azure API Management. There are 6 tiers viz.

- Consumption
- Developer
- Basic
- Standard
- Premium
- Isolated

My advice is to set this to Premium or isolated tier which has an SLA for 99.99%. Without API Management your services are as good as dead and hence it makes sense to have good SLA for it.

We learned it the hard way. How I wish Azure had a recommendation advisor for moving apps to production. For those reading this article please go and check what's the pricing tier for your azure API management service like in production.
