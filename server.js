'use strict';

const express = require('express');

require('dotenv').config();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    var dateserver = new Date();
//    res.send('ENV_NAME : '${process.env.NODE_ENV} 'DATE TIME : '${dateserver});
    res.send(`ENV_NAME : ${process.env.NODE_ENV}, SERVER_TIME : ${dateserver.toISOString()}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
