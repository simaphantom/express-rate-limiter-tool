const express = require('express');
const rateLimit = require('./rateLimitMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Apply the rate limiter middleware to all requests
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 100 // limit each IP to 100 requests per windowMs
}));

// Example route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
