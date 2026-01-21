---

## 📖 Table of Contents
1.  [Executive Summary](#-executive-summary)
2.  [Task 1: Strategic Analysis & Audit](#-task-1-strategic-analysis--audit)
    * [Decoupled Architecture Benefits](#a-benefits-of-decoupled-architecture)
    * [UI/UX Audit](#b-uiux-audit-devbharatyuvaorg)
    * [Architecture Proposal](#c-architecture-proposal)
    * [Redesign Vision](#d-redesign-vision-impact-dashboard)
3.  [Task 2: Technical Implementation](#-task-2-technical-solutions)
4.  [Installation Guide](#-installation--setup)

---

## 💡 Executive Summary
This submission presents a **scalable, cost-effective, and transparent** technical solution tailored for the TMS Foundation.
* **Architecture:** A decoupled React + Django system designed to support future mobile apps and third-party integrations.
* **Performance:** Optimized utilizing database aggregation to handle high-volume donation data.
* **Readiness:** Fully containerized with Docker for immediate deployment.

---

## 🧠 Task 1: Strategic Analysis & Audit

### a) Benefits of Decoupled Architecture
*Why separate React (Frontend) and Django (Backend) is the superior choice for Non-Profits.*

| Benefit | Strategic Advantage |
| :--- | :--- |
| **📱 Omni-Channel Ready** | The Django Backend acts as a "Headless CMS." The same API can power the website, a future **Mobile App** for volunteers, and **WhatsApp Chatbots** simultaneously. |
| **👥 Volunteer Ecosystem** | It lowers the barrier to entry. We can recruit specialized React developers and Python developers independently, rather than requiring "Full Stack" experts. |
| **🚀 UX & Speed** | React provides a "Single Page Application" (SPA) feel. Page transitions are instant, reducing "donor drop-off" during the payment process. |

> **Verdict:** While monolithic apps are simpler initially, a decoupled approach future-proofs the TMS Foundation for mobile apps and complex integrations.

### b) UI/UX Audit: dev.bharatyuva.org
*A heuristic evaluation of the current development build.*

#### 🔴 1. Critical Flaw: Mobile Responsiveness
* **Issue:** Navigation links and card layouts overlap on screens smaller than 768px.
* **Impact:** Alienates the "Yuva" (Youth) demographic who primarily access via mobile.
* **Fix:** Implement a CSS Grid layout (`grid-template-columns: 1fr`) and a **Hamburger Menu** for mobile breakpoints.

#### 🟠 2. Major Flaw: Weak CTA Hierarchy
* **Issue:** "Join" and "Donate" buttons compete for visual attention.
* **Impact:** Decision paralysis for new visitors.
* **Fix:** Apply the **60-30-10 Rule**.
    * **Donate:** Primary Color (Solid Fill).
    * **Join:** Secondary Style (Outline).

#### 🟡 3. Major Flaw: Lack of Feedback
* **Issue:** No visual feedback (spinners/loaders) during data fetching.
* **Impact:** Users perceive the site as "broken" or slow.
* **Fix:** Implement **Skeleton Loaders** to maintain layout stability and indicate progress.

### c) Architecture Proposal
I propose a **Decoupled Architecture** to separate concerns:
1.  **Security:** Django DRF handles sensitive data (donations) behind a secure API layer, protected from XSS attacks on the frontend.
2.  **Cost Efficiency:** The frontend can be hosted on static platforms (Netlify/Vercel) which are often free for non-profits, reducing server costs.
3.  **Interactivity:** Complex features like "Volunteer Hours Tracking" require state management that React handles significantly better than Django Templates.



### d) Redesign Vision: Impact Dashboard
**Feature:** A generic "Welcome" banner is replaced by a **Real-Time Impact Dashboard**.
* **Why?** Donors demand transparency. Showing live data builds trust.
* **Components:**
    * 📈 **Live Chart:** Funds raised over the last 6 months.
    * ❤️ **Live Counter:** "Lives Touched" ticker.
    * 🔔 **Activity Feed:** Real-time anonymized donation feed (Social Proof).
* **Implementation:** Fully coded in the `/frontend` directory of this repo.

**Submitted by:** Mayank Kaushik
**Email:**mayankkaushik730@gmail.com
**Phone No:**9131184753
**Linkedin:** https://www.linkedin.com/in/mayank-k-314112288