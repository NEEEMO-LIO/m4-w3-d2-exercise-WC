const express = require('express');
const helmet = require('helmet');

const app = express();

// Apply Helmet middleware
app.use(helmet());

// Basic route
app.get('/', (req, res) => {
  res.send({ res: 'Sending 200 as response' });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express app is up and running on port ${PORT}!`);
});
