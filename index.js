const server = require('./server.js');
const express = require('express');
const helmet = require('helmet');
const schemeRouter = require('./schemes/scheme-router');

// const server = express();
const PORT = process.env.PORT || 5000;

server.use(helmet());
server.use(express.json());
server.use('/schemes', schemeRouter);

server.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});
