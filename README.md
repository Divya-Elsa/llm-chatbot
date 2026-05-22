# LLM Chatbot

A full-stack AI chatbot application that uses Google's Gemini API to provide intelligent conversational responses.

## Overview

This project is a modern chat interface powered by large language models. It features a responsive React frontend built with Vite and a Node.js/Express backend that communicates with Google's Generative AI API.

## Tech Stack

**Frontend:**
- React 19
- Vite (build tool)
- React Markdown (for rendering formatted responses)
- ESLint (code quality)

**Backend:**
- Node.js with Express
- Google Generative AI (Gemini)
- CORS enabled
- dotenv for environment management

## Project Structure

```
llm-chatbot/
├── backend/                 # Express server
│   ├── server.js           # Main server file
│   └── package.json        # Backend dependencies
├── frontend/               # React + Vite app
│   ├── src/
│   │   ├── App.jsx        # Main app component
│   │   ├── main.jsx       # Entry point
│   │   ├── App.css        # Styles
│   │   └── index.css      # Global styles
│   ├── public/            # Static assets
│   ├── package.json       # Frontend dependencies
│   ├── vite.config.js     # Vite configuration
│   └── eslint.config.js   # ESLint rules
└── README.md              # This file
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Google Gemini API key

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd llm-chatbot
   ```

2. **Install backend dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**
   ```bash
   cd ../frontend
   npm install
   ```

### Environment Variables

Create a `.env` file in the `backend/` directory:

```
GEMINI_API_KEY=your_google_gemini_api_key_here
```

Get your Gemini API key from [Google AI Studio](https://aistudio.google.com/).

## Running the Application

### Start the Backend Server

From the `backend/` directory:
```bash
npm start
```

The backend will run on `http://localhost:5000`

### Start the Frontend Development Server

From the `frontend/` directory:
```bash
npm run dev
```

The frontend will typically run on `http://localhost:5173`

## API Endpoints

### POST /chat
Send a message and receive an AI-generated response.

**Request:**
```json
{
  "message": "Your question or prompt here"
}
```

**Response:**
```json
{
  "reply": "AI-generated response"
}
```

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Backend
- `npm start` - Start the Express server

## Features

- Real-time chat interface
- AI-powered responses using Google Gemini
- Markdown support for formatted responses
- CORS-enabled for cross-origin requests
- Environment-based configuration

## License

ISC
