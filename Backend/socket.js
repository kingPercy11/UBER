const socketIo = require('socket.io');
const userModel = require('./models/user.model');
const driverModel = require('./models/driver.model');

let io;

function initializeSocket(server) {
    io = socketIo(server, {
        cors: {
            origin: '*',
            methods: [ 'GET', 'POST' ]
        }
    });

    io.on('connection', (socket) => {
        console.log(`Client connected: ${socket.id}`);


        socket.on('join', async (data) => {
            const { userId, userType } = data;
            console.log('User joined:', userId, userType);
            if (userType === 'user') {
                await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
            } else if (userType === 'driver') {
                await driverModel.findByIdAndUpdate(userId, { socketId: socket.id });
            }
        });


        socket.on('update-location-driver', async (data) => {
            const { userId, location } = data;

            if (!location || !location.lat || !location.lng) { // Changed 'ltd' to 'lat'
                return socket.emit('error', { message: 'Invalid location data' });
            }

            await driverModel.findByIdAndUpdate(userId, {
                location: {
                    lat: location.lat, // Changed 'ltd' to 'lat'
                    lng: location.lng
                }
            });
        });

        socket.on('disconnect', () => {
            console.log(`Client disconnected: ${socket.id}`);
        });
    });
}

const sendMessageToSocketId = (socketId, messageObject) => {

console.log(messageObject);

    if (io) {
        io.to(socketId).emit(messageObject.event, messageObject.data);
    } else {
        console.log('Socket.io not initialized.');
    }
}

module.exports = { initializeSocket, sendMessageToSocketId };