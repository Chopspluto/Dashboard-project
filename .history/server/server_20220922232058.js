const express = require('express');
const cors = require('cors')
const app = express();

const PORT = 5000;

//middleware
app.use(express.json()) // req.body to access data from client side
app.use(cors());

// ROUTES
app.use("/auth", require("./routes/jwtAuth"));

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) })