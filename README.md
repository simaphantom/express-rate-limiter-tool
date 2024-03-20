# express-rate-limiter-tool

A simple rate limiting middleware for Express applications to control request traffic and prevent abuse.

## Setup

1. Ensure you have Node.js and npm installed.
2. Create your Express app if you haven't already.
3. Copy `rateLimitMiddleware.js` into your project directory.

## Usage

Import the middleware and use it in your Express app to limit requests:

```javascript
const express = require('express');
const rateLimit = require('./rateLimitMiddleware');

const app = express();

// Apply rate limiting middleware
app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 100 // limit each IP to 100 requests per windowMs
}));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
```
