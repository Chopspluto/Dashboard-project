const express = require('express');
const cors = require('cors')
const app = express();

const PORT = 5000;

//middleware


app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) })