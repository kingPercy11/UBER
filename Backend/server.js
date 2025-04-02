const http = require('http');
const app = require('./app');
const port  = process.env.PORT||3000;
const {initializeSocket} = require('./socket');
const server = http.createServer(app);
// server.listen(3000);\\
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
initializeSocket(server);
server.on('error', (err) => {
    console.error('Server error:', err);
    process.exit(1);
});
