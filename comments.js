// Create web server
// 1. Load the express module
// 2. Create an express application
// 3. Create a route for comments
// 4. Start the server
const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.send('This is the comments page');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
