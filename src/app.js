const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

var whitelist = ['https://localhost:3000', 'https://www.kti.cloud']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionSuccessStatus: 200
}

//var corsOptions = {
//    origin: 'https://kti.cloud',
//    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//}
//app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(require('./routes/clientsRoutes'));
app.use(require('./routes/currentRoutes'));
app.use(require('./routes/deviceRoutes'));
app.use(require('./routes/deviceTypeRoutes'));
app.use(require('./routes/sectorRoutes'));
app.use(require('./routes/sensorRoutes'));
app.use(require('./routes/storeRoutes'));
/*app.use(require('./routes/sensorDeviceRoutes')); */
app.use(require('./routes/userRoutes'));

module.exports = app;
