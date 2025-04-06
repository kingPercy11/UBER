const express = require('express');
const router = express.Router();
const { body, query } = require('express-validator');
const rideController = require('../controllers/ride.controller');
const authMiddleware = require('../middlewares/auth.middleware');


router.post('/create',
    authMiddleware.authUser,
    body('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
    body('vehicleType').isString().isIn([ 'auto', 'car', 'moto' ]).withMessage('Invalid vehicle type'),
    rideController.createRide
)

router.get('/get-fare',
    authMiddleware.authUser,
    query('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
    query('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
    rideController.getFare
)

// console.log("hi4");
router.post('/confirm',
    authMiddleware.authDriver,
    body('rideId').isMongoId().withMessage('Invalid ride ID'),
    // body('otp').isString().isLength({ min: 6, max:6 }).withMessage('Invalid OTP'),
    rideController.confirmRide
)
// console.log("hi3") 

router.get('/start-ride',
    authMiddleware.authDriver,
    query('rideId').isMongoId().withMessage('Invalid ride id'),
    query('otp').isString().isLength({ min: 6, max: 6 }).withMessage('Invalid OTP'),
    rideController.startRide
)

router.post('/end-ride',
    authMiddleware.authDriver,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    rideController.endRide
)



module.exports = router;