# Medium Publishing Guide — saikalyanakunuri.com

A step-by-step workflow for cross-posting responsible AI posts to Medium while keeping the personal site as the canonical source.

---

## Step 1 — Create Your Medium Account

1. Go to [medium.com](https://medium.com) and sign up
2. Choose your handle: **`@saikalyanakunuri`** (matches your domain, easy to find)
3. Verify your email

---

## Step 2 — Set Up Your Profile

Go to **medium.com/me/settings** and fill in the following:

**Full name:** Sai Kalyan Akunuri

**Bio (140 characters max):**
> AI governance, responsible AI, and the gap between frameworks and practice. Writing at saikalyanakunuri.com

**Profile photo:** Use the same headshot as your website for consistency

**Location:** Your city (optional but helps with local credibility)

**Website:** `https://saikalyanakunuri.com`

**Social links:** Add LinkedIn and any other profiles you want visible

---

## Step 3 — Generate Your Integration Token (Save for Later)

1. Go to **medium.com/me/settings** → scroll to **Integration tokens**
2. Give it a name: `saikalyan-automation`
3. Generate and save the token somewhere safe — you'll need it if you ever want to automate publishing via script

---

## Step 4 — Import Existing Posts (One-Time Batch)

Medium's Import feature scrapes a live URL and **automatically sets the canonical URL** back to your site. This means Google treats your site as the original — no SEO penalty.

**How to import a post:**
1. Go to `medium.com/p/import`
2. Paste the full URL: `https://saikalyanakunuri.com/blog/[slug]`
3. Click **Import**
4. After import, open **Story Settings** (top right) → **Advanced** → confirm **Original URL** shows your saikalyanakunuri.com URL
5. Add tags (see tag suggestions below)
6. Publish or submit to a publication (see Step 5)

---

### Import Order — Priority by Expected Reach

Work through these in order. The titles at the top have the strongest hooks for Medium's audience.

| # | Post Title | URL Slug | Tags to Use |
|---|-----------|----------|-------------|
| 1 | The Override Button is Not Governance. The Feedback Loop Is. | `override-button-is-not-governance` | AI Governance, Responsible AI, AI, Product Management, Software Engineering |
| 2 | I Read Everything About Auditing AI. Nobody Tells You What To Do On Monday. | `ai-auditing-beauty-pageant-problem` | AI Governance, Responsible AI, AI, Auditing, Machine Learning |
| 3 | Your AI Governance Dashboard is Lying to You | `ai-governance-dashboard-lying` | AI Governance, Responsible AI, AI, Data Science, Machine Learning |
| 4 | We Don't Ask Developers to Be Their Own QA. Why Do We Ask AI to Govern Itself? | `ai-governance-agent-qa-analogy` | AI Governance, Responsible AI, Software Engineering, AI, Machine Learning |
| 5 | Governance That Lives in the Tool is Inevitable | `governance-in-the-tool` | AI Governance, Responsible AI, Product Management, AI, Software Engineering |
| 6 | Before You Trust an AI with Your Money, Test It | `ai-model-eval-product-story` | AI, Machine Learning, Finance, Responsible AI, LLM |
| 7 | How We Built a Model Evaluation Harness in a Weekend | `ai-model-eval-technical-build` | Machine Learning, AI, Next.js, LLM, Software Engineering |
| 8 | I Could Not Find a Practical AI Audit Framework. So I Started Building One. | `ai-audit-harness-plan` | AI Governance, Responsible AI, AI Auditing, Machine Learning, AI |
| 9 | You Cannot Interview a Neural Network. The Hidden Cost of AI Decommissioning. | `ai-decommissioning-knowledge-preservation` | AI Governance, Responsible AI, AI, Knowledge Management, Machine Learning |
| 10 | MAP Evolution: Why Your AI Risk Map Should Never Stop Changing | `map-evolution-ai-risk-mapping` | AI Governance, Responsible AI, AI Risk, NIST, Machine Learning |
| 11 | I Spent an Afternoon Reading Model Cards. I Still Could Not Pick a Model. | `model-cards-ai-discovery-gap` | AI, Machine Learning, Responsible AI, LLM, AI Governance |
| 12 | 63% of Organisations Deploying AI Have No Governance. I Spent a Week Finding Out Why. | `ai-governance-63-percent-gap` | AI Governance, Responsible AI, AI, Enterprise, Machine Learning |
| 13 | AI Governance Metrics: Your Compliance Log is Just Decoration Without This | `ai-governance-metrics-compliance-log` | AI Governance, Responsible AI, EU AI Act, Compliance, Machine Learning |

---

## Step 5 — Submit to Publications (High Leverage)

Getting accepted into a publication gives you access to their existing audience. Apply to these before publishing your first post.

### Towards Data Science
- Largest ML/AI publication on Medium (~700k followers)
- Application: Search "Towards Data Science write for us" on Medium for their current submission form
- Pitch angle: AI governance and responsible AI in practice — there's very little practitioner-level content vs. research-heavy posts

### The Generator
- AI-focused Medium publication
- Good fit for your governance and evaluation posts

### Level Up Coding
- Technical posts — best fit for the eval harness build posts

**How to submit once accepted:**
After importing a story, go to **Story Settings** → **Add to publication** → select the publication → the editors review and approve before it goes live under their banner.

---

## Step 6 — Ongoing Workflow (New Posts)

Follow this order for every new post from now on:

1. Write and publish on saikalyanakunuri.com (your current process — keep this)
2. Wait **24–48 hours** so Google indexes your site as the original
3. Go to `medium.com/p/import` and paste the live URL
4. Verify canonical URL is set correctly in Story Settings
5. Add 3–5 tags from the tag list above
6. Submit to a publication if applicable, or publish directly
7. Share the Medium link on LinkedIn (Medium posts tend to perform better in LinkedIn feed than personal site links)

---

## Checklist — Before You Publish Each Post on Medium

- [ ] Canonical URL set to `https://saikalyanakunuri.com/blog/[slug]`
- [ ] 3–5 relevant tags added
- [ ] Featured image looks correct (check preview)
- [ ] Bio at the bottom of the post is up to date
- [ ] Submitted to a publication OR published directly

---

## SEO Safety Note

The canonical URL is what prevents Google from treating the Medium version as a duplicate. Always verify it before publishing. Medium's import tool sets it automatically, but double-check every time under **Story Settings → Advanced → Original URL**.
