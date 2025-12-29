# Construction Project Management & 3D Portal

A centralized construction management platform designed to replace legacy spreadsheet workflows with a real-time, cloud-based system. This project integrates a **High-Performance 3D/IFC Viewer** directly into the browser, enabling "Zero-Cost" BIM accessibility for all stakeholders.

## 🚀 Features

- **End-to-End Workflow Automation**: Manages the entire project lifecycle (Survey → Design → Bidding → PM) with strict state management and Role-Based Access Control (RBAC).
- **Web-Based 3D Viewer**: Built with **Three.js** and **web-ifc** to render IFC models and perform section cuts in real-time without requiring proprietary software.
- **Interactive Dashboard**: Visualizes project status and metrics using **Chart.js**, offering clear insights for management.
- **Real-Time Database**: Powered by **Supabase** (PostgreSQL) for instant data synchronization and document storage.
- **Automated Scheduling**: (Demo feature) Integration logic for meeting automation via Microsoft Bookings/Teams.

## 🛠 Tech Stack

- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3
- **3D Engine**: Three.js, web-ifc
- **Backend-as-a-Service**: Supabase (Database, Auth, Storage)
- **Visualization**: Chart.js, Tom Select
- **Deployment**: Netlify / Vercel Ready

## 📂 Project Structure

- `index.html`: Main entry portal.
- `admin.html`: Project dashboard and management interface.
- `ifc_viewer.html`: Standalone 3D model viewer engine.
- `app.js`: Core application logic and state management.
- `config.js`: Configuration and Supabase connection settings.

## 🔧 Setup & Usage

1. Clone this repository.
2. Create a `config.js` file based on the example (see below).
3. Insert your own Supabase credentials.
4. Run via a local server (e.g., Live Server in VS Code).

> **Note:** This repository is a technical demonstration of a construction management system. All data presented is mock-up data for privacy and confidentiality.

---
*Developed by [Your Name]*
