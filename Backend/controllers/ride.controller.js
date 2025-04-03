const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');
const mapService = require('../services/maps.services');
const { sendMessageToSocketId } = require('../socket');
const rideModel = require('../models/ride.model');
const socket = require('../socket');



module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { userId, pickup, destination, vehicleType } = req.body;

    (async () => {
        try {
            const ride = await rideService.createRide({ user: req.user._id, pickup, destination, vehicleType });
            res.status(201).json(ride);

            const pickupCoordinates = await mapService.getAddressCoordinates(pickup);
            console.log(pickupCoordinates);

            const driversInRadius = await mapService.getDriversInRadius(pickupCoordinates.lat, pickupCoordinates.lng, 2); // Fixed property names
            console.log(driversInRadius);
            ride.otp =""
            const rideWithUser = await rideModel.findOne({ _id: ride._id }).populate('user');
            driversInRadius.map(driver => {
                sendMessageToSocketId(driver.socketId, {
                    event: 'new-ride',
                    data: rideWithUser
                })
            })

        } catch (err) {
            console.error(err);
        }
    })();
};



module.exports.getFare = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination } = req.query;

    try {
        const fare = await rideService.getFare(pickup, destination);
        return res.status(200).json(fare);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}
