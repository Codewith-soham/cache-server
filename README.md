# Cache Server

A lightweight in-memory caching API built with Node.js and Express. This project provides a simple HTTP interface for storing, retrieving, deleting, and checking the size of cached data in memory.

## Features

- In-memory key-value cache using JavaScript Map
- Store values via HTTP POST
- Retrieve values via HTTP GET
- Delete a single key or clear the entire cache
- Check current cache size
- JSON responses with clear error handling

## Tech Stack

- Node.js
- Express.js
- ES Modules

## Project Structure

```text
cache-server/
├── src/
│   ├── cache.js
│   └── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

## Run the Server

Start the server in development mode:

```bash
npm run dev
```

Or run it directly:

```bash
npm start
```

By default, the application listens on:

```text
http://localhost:3000
```

## API Endpoints

### Store a value

```http
POST /cache/:key
```

Request body:

```json
{
  "value": "some data"
}
```

Example:

```bash
curl -X POST http://localhost:3000/cache/user-1 \
  -H "Content-Type: application/json" \
  -d '{"value":{"name":"Alice","role":"admin"}}'
```

### Get a cached value

```http
GET /cache/:key
```

Example:

```bash
curl http://localhost:3000/cache/user-1
```

### Delete a specific key

```http
DELETE /cache/:key
```

Example:

```bash
curl -X DELETE http://localhost:3000/cache/user-1
```

### Clear all cache entries

```http
DELETE /cache
```

Example:

```bash
curl -X DELETE http://localhost:3000/cache
```

### Get cache size

```http
GET /cache/size
```

Example:

```bash
curl http://localhost:3000/cache/size
```

## Example Responses

### Successful set

```json
{
  "message": "Value stored",
  "key": "user-1",
  "value": {
    "name": "Alice",
    "role": "admin"
  }
}
```

### Cache hit

```json
{
  "status": "HIT",
  "key": "user-1",
  "value": {
    "name": "Alice",
    "role": "admin"
  }
}
```

### Cache miss

```json
{
  "error": "Cache miss",
  "key": "user-1"
}
```

## Notes

- This cache is stored in server memory only, so it is cleared when the server restarts.
- It is suitable for small local applications, demos, and development workflows.
- For production use, consider a persistent or distributed cache such as Redis.

## License

This project is licensed under the ISC License.
