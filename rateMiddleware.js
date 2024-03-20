const rateLimit = ({ windowMs, maxRequests }) => {
  const requests = {};

  return (req, res, next) => {
    const ip = req.ip;
    const currentTime = Date.now();

    if (!requests[ip]) {
      requests[ip] = { count: 1, startTime: currentTime };
      next();
    } else {
      const timeDifference = currentTime - requests[ip].startTime;
      if (timeDifference < windowMs) {
        requests[ip].count++;
        if (requests[ip].count > maxRequests) {
          return res.status(429).json({ message: 'Rate limit exceeded. Please try again later.' });
        } else {
          next();
        }
      } else {
        // Reset count and startTime for the IP after the window has passed
        requests[ip] = { count: 1, startTime: currentTime };
        next();
      }
    }
  };
};

module.exports = rateLimit;
