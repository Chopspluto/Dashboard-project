const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

const PORT = 5000;

//middleware
app.use(express.json()) // req.body to access data from client side
app.use(cors());

// ROUTES
app.use("/auth", require("./routes/authRoutes"));

// Dashboard route
app.use("/dashboard", require('./routes/dashboardRoutes'));

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) })