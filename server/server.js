const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./DataBase/index');
const route = require('./Routes/routes');




const PORT = process.env.PORT || 4000;
const app = express();




//STATIC FOLDER
app.use(express.static(path.join(__dirname,'../client/build')));


//SETTING HEADER FOR ACCESS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, CREATE, DELETE, DESTROY');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(route);


db.sync()
.then(() => {
    console.log('successful connection to database established');
})
.catch(err => console.log(err));

app.listen(PORT, () => {
console.log(`Server started on port ${PORT}`);
});