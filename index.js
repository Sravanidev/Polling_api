const express=require('express')
const bodyParser=require('body-parser')
const app=express();
const Port=8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({extended:true}))
const db = require('./config/mongoose');
// const homeController = require('./controllers/home_controller');

// Define route for home page
// app.get('/', homeController.index);

// Routes
app.use('/',require('./routes'));
   
app.listen(Port,function(err){
    if(err){
        console.log(err);
    }
    console.log("server is runing ...",Port);
})