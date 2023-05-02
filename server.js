const express = require('express');
const path = require('path');
const sequelize = require('./config/connections');
const routes = require('./Develop/routes');
const helpers = require('./utils/helpers.js');


//sets up express app
const app = express();
const PORT = process.env.PORT || 3001; //what port do I use and how do I know to use it? 

app.use(express.static(path.join(__dirname, 'public'))); //do I need the index.html here? 
//sets up the routes


//starts the server to begin listening
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log('server is listening on: http://localhost:3001');
    });

});

