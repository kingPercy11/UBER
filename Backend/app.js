const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const driverRoutes = require('./routes/driver.routes');
const mapsRoutes = require('./routes/maps.routes');
dotenv.config();
const app = express();

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// Test Route
app.get('/', (req, res) => {
    res.send("Hello P");
});


app.use('/users', userRoutes);
app.use('/drivers', driverRoutes);
app.use('/maps', mapsRoutes);


module.exports = app;