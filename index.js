const server = require('./server.js');


const PORT = process.env.port || 5000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
