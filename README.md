# Metis

This project is an AI-powered chat application that utilizes advanced language models and Redis for efficient data storage and retrieval.

## Features

- Upstash RAG Chat integration for context-aware responses
- Streaming chat responses using Meta's Llama 3 8B Instruct model
- Redis integration for data persistence
- Session management with unique identifiers
- Tailwind CSS for responsive and customizable styling
- Next.js framework for server-side rendering and API routes

## Key Components

### RAG Chat

The core of the application is built around the RAG (Retrieval-Augmented Generation) Chat system. It uses the `@upstash/rag-chat` package to interact with the Meta Llama 3 8B Instruct model, providing intelligent and context-aware responses.

### Redis Integration

The project leverages Redis for fast and efficient data storage. The Redis client is initialized using environment variables for seamless configuration across different environments.

### Middleware

A custom middleware function is implemented to manage user sessions. It automatically assigns a unique `sessionId` to each user, stored as a cookie.

### API Routes

The `/api/chat-stream` route handles POST requests for chat interactions. It processes incoming messages, interacts with the RAG Chat system, and returns streaming responses for a smooth user experience.

### Styling

The project uses Tailwind CSS for styling, with a custom configuration that includes:
- Dark mode support
- Custom color schemes
- Responsive container sizes
- Extended theme with custom animations and keyframes

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Set up your environment variables for Redis and the AI model
4. Run the development server with `npm run dev`

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- Redis (via Upstash)
- Meta Llama 3 8B Instruct model

This project demonstrates the integration of cutting-edge AI technology with modern web development practices to create a powerful and responsive chat application.
