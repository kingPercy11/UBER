const userModel = require('../models/user.model');
const driverModel = require('../models/driver.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require('../models/blacklistToken.model');


module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized Access' });

    }
    const isBlackListed = await userModel.findOne({token: token });
    if(isBlackListed){
        return res.status(401).json({ message: 'Unauthorized Access' });
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        req.user = user;
        return next();
    }
    catch(err){
        return res.status(401).json({ message: 'Unauthorized Access' });
    }   
}
module.exports.authDriver = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];


    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const isBlacklisted = await blackListTokenModel.findOne({ token: token });
    


    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    console.log("Received token:", token);
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const driver = await driverModel.findById(decoded._id)
        req.driver = driver;

        return next()
    } catch (err) {
        console.log(err);

        res.status(401).json({ message: 'Unauthorized' });
        console.log("Fuck U")
        console.log(err)

    }
}