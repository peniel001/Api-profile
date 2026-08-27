
 # SWWE Backend Project 1 — Dynamic Profile API

A simple Node.js backend (no frameworks) that returns your profile info, a live timestamp, and a random cat fact.

## Features

- `GET /me` — returns user info, current UTC timestamp, and a random fact from the Cat Facts API
- Graceful fallback if the Cat Facts API is unavailable
- Built with plain Node.js `http` module (no Express)

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher (uses built-in `fetch`)
- npm (comes with Node.js)

## Setup & Installation

1. Clone the repository:
```bash
   git clone <your-repo-url>
   cd <your-repo-folder>
```

2. Install dependencies:
```bash
   npm install
```

## Running the Project Locally

1. Start the server:
```bash
   npm run start
``
2. You should see:

3. Open Thunder Client (or Postman) in VS Code.
4. Create a new **GET** request to:
 
 5. Send the request. You should get a JSON response like:
```json
   {
     "status": "success",
     "user": {
       "email": "your.email@example.com",
       "name": "Your Full Name",
       "stack": "Node.js"
     },
     "timestamp": "2026-08-27T18:08:00.000Z",
     
   }
```

## Dependencies

- `nodemon` (dev dependency, auto-restarts server on file changes)
- No external HTTP frameworks (uses Node's built-in `http` module)
- No API key required for the Cat Facts API

## Environment Variables


| `PORT`   | Port the server listens on | `3000` |

## API Documentation

### `GET /me`

Returns a success response with profile info, current timestamp, and a cat fact.

**Response — 200 OK**
```json
{
  "status": "success",
  "user": {
    "email": "string",
    "name": "string",
    "stack": "string"
  },
  "timestamp": "ISO 8601 string",
  
