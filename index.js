require('dotenv').config();
const { getAccInfo  } = require('node-binance-api-wss');

getAccInfo().then(v=>console.log(v)).catch(e => console.log(e));
