<div align="center">

# 🧺 EasyLaundry

**B2B SaaS platform for laundry business management**

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)

### 🌐 [easylaundry.mx](https://easylaundry.mx)

</div>

---

## 📌 Overview

EasyLaundry is a **multitenant SaaS platform** that enables laundry businesses to digitize and automate their entire operation — from order intake and employee management to payments, notifications, and delivery.

The platform supports multiple independent businesses under a single infrastructure, each with their own storefront, staff, inventory, and customer data.

> ⚠️ The main production codebase is private. This repository contains an early public snapshot. The architecture and features described below reflect the current production system.

---

## ✨ Key Features

### 🤖 MIA — AI Assistant
- Conversational AI assistant embedded in the platform, powered by **Claude (Anthropic)**
- **Reliable tool-calling** with structured schemas, error handling, and automatic retries
- **Spanish-language voice synthesis** pipeline: Chatterbox TTS → ffmpeg post-processing → client streaming
- Business-context awareness: MIA understands the active business, its services, and order history
- Cortana-style floating orb UI with animated states (idle / listening / processing / speaking)

### 🏢 Multitenant Architecture
- Each business gets its own storefront URL, branding, and isolated data
- Role-based access control: **Admin → Business Owner → Employee**
- Employee invitation system with secure token-based onboarding

### 📦 Order & Inventory Management
- Full laundry order lifecycle: creation → processing → delivery → confirmation
- QR code integration on printed tickets for delivery confirmation
- Dual thermal ticket printing system (folio + customer copy)
- Real-time inventory tracking with automatic reversal on cancellation

### 💳 Payments — Stripe Connect
- Per-business payment processing via **Stripe Connect**
- Full and partial refund logic based on order status
- Webhook handling for async payment events
- Session metadata linking for accurate product sold-count tracking

### 🔔 Real-Time & Notifications
- **Socket.IO** for live order updates, employee permission changes, and cart state sync
- **WhatsApp Business API** for transactional notifications (order confirmed, ready for pickup, delivered)
- PDF document delivery via **Cloudinary** (template-free approach)

### 👥 Employee Management
- Role assignment and real-time permission updates pushed via Socket.IO (no polling)
- Employee dashboard with scoped access based on business and role
- Secure route guards per user type

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────┐
│                    CLIENT (Vercel)                   │
│         React · Redux · Socket.IO · Tailwind         │
└─────────────────┬───────────────────────────────────┘
                  │ REST + WebSocket
┌─────────────────▼───────────────────────────────────┐
│                  SERVER (Railway)                    │
│        Node.js · Express · Socket.IO · JWT           │
│                                                      │
│   ┌──────────┐  ┌───────────┐  ┌─────────────────┐  │
│   │  Stripe  │  │ WhatsApp  │  │   MIA (AI Core) │  │
│   │ Connect  │  │ Business  │  │ Claude API + TTS │  │
│   └──────────┘  └───────────┘  └─────────────────┘  │
└─────────────────┬───────────────────────────────────┘
                  │
┌─────────────────▼───────────────────────────────────┐
│                  MongoDB Atlas                       │
│      Multitenant · Mongoose · Schema per domain      │
└─────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React, Redux Toolkit, Socket.IO Client, Tailwind CSS |
| Backend | Node.js, Express, Socket.IO, JWT |
| Database | MongoDB, Mongoose |
| AI | Anthropic Claude API, Chatterbox TTS, ffmpeg |
| Payments | Stripe Connect, Webhooks |
| Notifications | WhatsApp Business API, Cloudinary |
| Infrastructure | Vercel (frontend), Railway (backend), MongoDB Atlas |

---

## 🚀 Other Projects

| Project | Description |
|---------|-------------|
| [EasyLaundryLockers](https://github.com/MarkVisionz/EasyLaundryLockers) | Smart locker management module for EasyLaundry |
| [ButlerAssignmentApp](https://github.com/MarkVisionz/ButlerAssignmentApp) | Automated guest-to-butler assignment system with XML upload, auto-assignment, and admin override |
| [MedicalOperationsManagementWebApp](https://github.com/MarkVisionz/MedicalOperationsManagementWebApp) | Web app for creating, organizing, and tracking medical procedures |

---

## 📬 Contact

**Marco Giovanni Loeza Aleman**  
📧 margio1998@gmail.com  
📍 Cancún, México  
🌐 [easylaundry.mx](https://easylaundry.mx)

---

<div align="center">
<sub>Built solo — from architecture to production.</sub>
</div>
