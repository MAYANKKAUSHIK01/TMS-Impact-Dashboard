# 🌍 Bharat Yuva | Real-Time Impact Dashboard

![React](https://img.shields.io/badge/Frontend-React_18-61DAFB?logo=react&logoColor=black)
![Django](https://img.shields.io/badge/Backend-Django_REST-092E20?logo=django&logoColor=white)
![Docker](https://img.shields.io/badge/Deployment-Docker-2496ED?logo=docker&logoColor=white)
![Tailwind](https://img.shields.io/badge/Style-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)

<img width="1919" height="980" alt="Screenshot 2026-01-21 201947" src="https://github.com/user-attachments/assets/d9861f97-6c14-4c98-be5c-a49345612266" />



> **A decoupled full-stack platform designed to increase non-profit transparency through real-time data visualization.**

---

## 📸 Project Overview

**The Problem:** Non-profit organizations often struggle to build trust with donors due to a lack of transparency regarding how funds are utilized and real-time activity tracking.

**The Solution:** This project provides a **Real-Time Impact Dashboard** that visualizes donation trends, tracks volunteer growth, and displays live activity feeds. It allows donors to see the immediate impact of their contributions, fostering trust and engagement.

### 🌟 Key Features
* **📊 Real-Time Visualization:** Interactive charts (Chart.js) showing donation trends over the last 6 months.
* **📱 Fully Responsive:** Adaptive UI that stacks perfectly on mobile devices for on-the-go access.
* **⚡ Decoupled Architecture:** React Frontend and Django Backend are separated, allowing for future mobile app integration without backend changes.
* **🔒 Enterprise Security:** Implemented strict CORS policies to prevent unauthorized API access.
* **🐳 One-Click Deployment:** Fully containerized with Docker Compose for instant setup.

---

## 🛠️ Tech Stack

| Domain | Technologies Used |
| :--- | :--- |
| **Frontend** | React.js, Tailwind CSS, Chart.js, Lucide Icons |
| **Backend** | Python, Django, Django REST Framework (DRF) |
| **Database** | SQLite (Dev) / PostgreSQL (Prod Ready) |
| **DevOps** | Docker, Docker Compose, Git |

---

## 🏗️ Architecture Decision

This project uses a **Decoupled Architecture** (Headless CMS approach) rather than a traditional Monolithic structure.



**Why this approach?**
1.  **Scalability:** The backend API can simultaneously serve this web dashboard, a future Mobile App (React Native), and a WhatsApp Chatbot.
2.  **Performance:** The frontend is a Single Page Application (SPA), ensuring instant page transitions and a "native app" feel.
3.  **Optimization:** Backend calculations utilize **Database Aggregation** (SQL-level math) instead of Python loops, processing thousands of records in milliseconds.

---

## 🚀 Getting Started

You can run the entire application (Frontend + Backend + Database) with a single command.

### Prerequisites
* Docker Desktop installed on your machine.

### Installation
1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/decoupled-ngo-platform.git](https://github.com/your-username/decoupled-ngo-platform.git)
    cd decoupled-ngo-platform
    ```

2.  **Run with Docker**
    ```bash
    docker-compose up --build
    ```

3.  **Access the Dashboard**
    Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📂 Project Structure

```text
/
├── 📂 backend         # Django REST API (Business Logic)
│   ├── 📂 core        # Settings & CORS Config
│   └── 📂 dashboard   # Models & Serializers
├── 📂 frontend        # React Application (UI Layer)
│   ├── 📂 src         # Components & Tailwind Styles
│   └── 📄 Dockerfile
└── 📄 docker-compose.yml  # Orchestration Config
