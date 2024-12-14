const express = require("express");

const app = express();

const PORT = process.env.PORT || 4001;

// Add your code below:
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
