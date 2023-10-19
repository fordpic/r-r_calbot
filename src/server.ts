const express = require('express');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
const axios = require('axios');

// Main server setup + middleware

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.listen(PORT, () => {
	console.log(`We live on port ${PORT}`);
});

module.exports = app;
