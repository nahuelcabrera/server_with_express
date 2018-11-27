const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes/index');

//settings

//seteo el puerto por defecto o el que yo quiera
app.set('port', process.env.PORT || 3000);
//seteo la ruta de las vistas concatenando a través de join() con __dirname
app.set('views', path.join(__dirname, 'views'));
//motor de template
app.set('view engine', 'pug');

//middlewares

app.use((req, res, next) => {

    console.log(`${req.url}-${req.method}`);
    next();

});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


//routes

app.use(router);

//static files

app.use(express.static(path.join(__dirname, 'public')));

//start server

app.listen(app.get('port'), () => {

    console.log('Server is running on port ' + app.get('port'));

});