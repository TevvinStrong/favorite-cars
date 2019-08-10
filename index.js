const express = require('express');

const PORT = 5000;

//const db = require();
const server = express();


server.use(express.json());


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
