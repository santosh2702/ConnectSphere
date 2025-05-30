ConnectSphere
https://fanciful-youtiao-a308d2.netlify.app/

ConnectSphere
A non-monetary skill-sharing platform where users exchange skills (e.g., teach coding, learn Spanish) using AI-driven matchmaking, real-time chat, and gamified badges.
Table of Contents

Overview
Features
Tech Stack
Getting Started
Prerequisites
Installation
Running Locally


Usage
Deployment
Contributing

Overview
ConnectSphere is a web application that enables users to exchange skills without financial transactions, fostering community learning and accessibility. Whether you’re a coder wanting to learn photography or a language tutor seeking design skills, ConnectSphere connects you with others through AI-driven matchmaking. The platform features real-time chat, a gamified badge system, and a responsive, accessible UI, making skill-sharing engaging and inclusive.
Features

Skill Exchange: Users list skills they offer (e.g., coding, design) and want (e.g., Spanish, photography) to barter without money.
AI-Driven Matchmaking: Simulated AI matches users based on complementary skills and location (local development).
Real-Time Chat: Firebase-powered chat for seamless communication between matched users.
Gamification: Earn badges (e.g., “First Exchange”, “Skill Master”) and view a community feed of recent exchanges.
Authentication: Supabase for Google Sign-In and email/password sign-up/login, with Firebase as an alternative for email auth.
Responsive UI: Tailwind CSS with dark mode toggle, ARIA labels, and keyboard navigation for accessibility.
Mock API Integrations: Simulated Google Calendar and Zoom for scheduling and virtual sessions (extendable with real APIs).

Tech Stack

Frontend: React, TypeScript, Tailwind CSS, Vite
Authentication: Supabase (Google Sign-In, email/password), Firebase (email/password alternative)
Database & Chat: Firebase Firestore for real-time chat and user profiles
Animations: Framer Motion for badge animations
Deployment: Vercel (free tier)
Development Tools: Node.js, npm

Getting Started
Prerequisites

Node.js: Version 18.x or higher (LTS recommended). Download from https://nodejs.org/.
Supabase Account: Sign up at https://app.supabase.com/ for Google Sign-In and auth.
Firebase Account: Sign up at https://firebase.google.com/ for chat and alternative auth.
Git: For cloning the repository.
Code Editor: VS Code or similar.

Installation

Clone the Repository:git clone https://github.com/<your-username>/connectsphere.git
cd connectsphere


Install Dependencies:npm install


Set Up Supabase:
Create a project at https://app.supabase.com/.
Enable Email and Google providers in Authentication > Providers.
Copy the Project URL and Anon Key from Settings > API.
Create src/supabase.ts:import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://<PROJECT_ID>.supabase.co';
const supabaseKey = '<YOUR_ANON_KEY>';
export const supabase = createClient(supabaseUrl, supabaseKey);




Set Up Firebase:
Create a project at https://firebase.google.com/.
Enable Email/Password Authentication and Firestore Database.
Copy the Firebase config from Project Settings.
Create src/firebase.ts:import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);




Configure Google OAuth:
Create a Google Cloud project at https://console.cloud.google.com/.
Enable Google+ API or equivalent.
Create an OAuth Client ID for a web application, adding:
Authorized JavaScript origins: http://localhost:5173
Authorized redirect URIs: http://localhost:5173/auth/v1/callback


Add the Client ID and Secret to Supabase > Authentication > Providers > Google.



Running Locally

Start the Development Server:npm run dev


Access the App:
Open http://localhost:5173 in your browser.


Test Features:
Sign up/login with email or Google.
Create a profile with skills and availability.
View AI-matched users, chat, and earn badges.
Toggle dark mode and test accessibility.



Usage

Sign Up/Login: Use Google Sign-In or email/password to create an account.
Profile Setup: Enter your skills offered, skills wanted, location, and availability.
Find Matches: View AI-generated skill exchange matches on the dashboard.
Connect & Chat: Use real-time chat to coordinate with matches.
Earn Badges: Complete exchanges to earn gamified badges and view community activity.
Schedule Sessions: Mock Google Calendar and Zoom integrations for planning (extendable with real APIs).

Deployment

Push to GitHub:git add .
git commit -m "Deploy ConnectSphere"
git push origin main


Deploy to Vercel:
Sign up at https://vercel.com/.
Import your GitHub repository and deploy.
Update Supabase and Google Cloud redirect URIs with the Vercel URL (e.g., https://connectsphere.vercel.app/auth/v1/callback).


Verify:
Test the deployed app at the Vercel URL.



Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a feature branch (git checkout -b feature/YourFeature).
Commit changes (git commit -m "Add YourFeature").
Push to the branch (git push origin feature/YourFeature).
Open a Pull Request.

Please ensure code follows the project’s style (ESLint, Prettier) and includes tests if applicable.

ConnectSphere | Built with ❤️ for community learning

