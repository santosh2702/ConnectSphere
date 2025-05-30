ConnectSphere
https://fanciful-youtiao-a308d2.netlify.app/

# ConnectSphere

A non-monetary skill-sharing platform where users exchange skills (e.g., teach coding, learn Spanish) using AI-driven matchmaking, real-time chat, and gamified badges.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Overview
ConnectSphere is a web application that enables users to exchange skills without financial transactions, fostering community learning and accessibility. Whether you’re teaching coding or learning photography, ConnectSphere connects you with others through AI-driven matchmaking. The platform features real-time chat, a gamified badge system, and a responsive, accessible UI, making skill-sharing engaging and inclusive.

## Features
- **Skill Exchange**: Users list skills they offer (e.g., coding, design) and want (e.g., Spanish, photography) to barter without money.
- **AI-Driven Matchmaking**: Simulated AI matches users based on complementary skills and location.
- **Real-Time Chat**: Supabase-powered chat for seamless communication between matched users.
- **Gamification**: Earn badges (e.g., “First Exchange”, “Skill Master”) and view a community feed of recent exchanges.
- **Authentication**: Supabase for Google Sign-In and email/password sign-up/login, with Firebase as an alternative for email-based auth.
- **Responsive UI**: Tailwind CSS with dark mode toggle, ARIA labels, and keyboard navigation for accessibility.
- **Mock API Integrations**: Simulated Google Calendar and Zoom for scheduling and virtual sessions (extendable with real APIs).

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Authentication**: Supabase (Google Sign-In, email/password), Firebase (email/password alternative)
- **Database & Chat**: Supabase for real-time chat and user profiles
- **Animations**: Framer Motion for badge animations
- **Deployment**: Vercel (free tier)
- **Development Tools**: Git, Node.js, npm

## Getting Started

### Prerequisites
- **Node.js**: Version 18.x or higher (LTS recommended). Download from <https://nodejs.org/>.
- **Supabase Account**: Sign up at <https://app.supabase.com> for Google Sign-In and auth.
- **Git**: For cloning the repository.
- **Code Editor**: VS Code or similar.

### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<your-username>/app.git
   cd app
