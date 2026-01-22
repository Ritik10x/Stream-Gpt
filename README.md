Live - https://stream-gpt-ai.netlify.app/


AI-Powered Movie Recommendation Platform

Stream-GPT-AI is a Netflix-inspired movie recommendation web application that leverages Artificial Intelligence to deliver intelligent movie suggestions based on natural language input. The application integrates Gemini AI for recommendation generation and the TMDB API for real-time movie data, providing users with an engaging and scalable movie discovery experience.

🚀 Features

🤖 AI-Powered Movie Recommendations using Gemini AI

🔍 Natural Language Search for discovering movies

🎥 Real-Time Movie Data (posters, ratings, metadata) via TMDB API

🎨 Netflix-Inspired Responsive UI

🧠 Global State Management with Redux Toolkit

🔐 User Authentication (Sign-In & Logout)

⚡ Optimized API Calls using Redux caching & memoization

🌍 Production Deployment on Netlify with environment variables


🚀 Scalability, Performance & Multilanguage Optimization (Stream-GPT-AI)

⚡ Optimized application performance by minimizing unnecessary API calls using Redux state management and in-memory caching

🧠 Stored API responses from TMDB and Gemini AI centrally in the Redux store for efficient reuse

🔍 Implemented conditional data fetching to check existing Redux state before triggering new API requests

🔁 Reused cached data to avoid redundant network calls during:

🔄 Page navigation

♻️ Component re-renders

↔️ Back-and-forth user interactions

🌍 Implemented multilanguage support using global state to dynamically switch application language without page reloads

🚫 Prevented API overuse, ensuring unlimited user navigation without breaking or overloading external services

🚀 Improved scalability, reduced latency, and enhanced user experience for high-traffic usage

🔧 Techniques Used

🧰 Redux Toolkit for centralized state management

🧠 In-memory caching via global Redux state

🎯 Conditional and optimized data fetching logic

🚫 Avoidance of unnecessary re-fetching

🌐 Multilanguage implementation using global state configuration

🛠 Tech Stack

Frontend

⚛️ React (Vite)

🟨 JavaScript

🧰 Redux Toolkit

🎨 CSS / Tailwind CSS

🚀 Netlify (Deployment)

Backend

🟢 Node.js

🚂 Express.js

🍃 MongoDB (Hosted)

🔐 bcrypt (Password Hashing)

☁️ Render (Backend Deployment)

APIs & Services

🤖 Gemini AI

🎬 TMDB REST API

