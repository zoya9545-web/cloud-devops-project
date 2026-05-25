const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Cloud DevOps Project Running Successfully 🚀</h1>');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
