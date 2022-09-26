const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

const PORT = 5000;

//middleware
app.use(express.json()) // req.body to access data from client side
app.use(cors());

// ROUTES
app.use("/auth", require("./routes/jwtAuthRoutes"));

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) })