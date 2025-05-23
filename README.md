# Server

This is a TypeScript-based Express server that provides API endpoints for managing orders and items.

## Tech Stack

- Node.js
- TypeScript
- Express.js
- Zod (for schema validation)
- UUID (for generating unique identifiers)
- CORS enabled

## Project Structure

```
src/
├── controllers/    # Request handlers
├── routes/        # API route definitions
├── models/        # Data models
├── utils/         # Utility functions
├── mock.ts        # Mock data
└── index.ts       # Server entry point
```

## Getting Started

### Prerequisites

- Node.js
- pnpm (recommended) or npm

### Installation

1. Install dependencies:

```bash
pnpm install
```

### Development

Run the development server with hot reload:

```bash
pnpm dev
```

### Building

Build the TypeScript code:

```bash
pnpm build
```

### Production

Start the production server:

```bash
pnpm start
```

## API Endpoints

The server runs on port 5137 and provides the following API routes:

- `/api/orders` - Order management endpoints
- `/api/items` - Item management endpoints

## Scripts

- `dev`: Run development server with hot reload
- `build`: Build TypeScript code
- `start`: Run production server
- `watch`: Watch for TypeScript changes
