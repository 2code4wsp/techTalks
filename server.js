const express = require('express');
const path = require('path');

//sets up express app
const add = express();
const PORT = process.env.PORT || 3000; //what port do I use and how do I know to use it? 

app.use(express.static(path.join(__dirname, 'public', 'index.html'))); //do I need the index.html here? 
//sets up the routes
app.use(require('./controllers/routes')); //need to finish this!

//starts the server to begin listening
app.listen(PORT, () => {
    console.log('server is listening on: http://localhost:' + PORT);
})