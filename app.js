require('dotenv').config();
const express= require('express');
const cookieParser=require('cookie-parser');
const homeRouter=require('./routes/home');
const dobRouter=require('./routes/dob');
const {restrictToLoggedInUserOnly, checkAuth}=require('./middlewares/auth');
const{mongoConnect}=require('./connection');
/* database connection */
mongoConnect(process.env.MONGO_URL);

const app=express();
const PORT= process.env.PORT || 9000;
app.set('view engine','ejs');
app.use(express.urlencoded({extented:false}));
app.use(express.static('./static/'));
app.use(cookieParser());


app.use('/',checkAuth,homeRouter);
app.use('/dob',restrictToLoggedInUserOnly,dobRouter);

app.listen(PORT,()=>{
    console.log("app is listening to port 9000...");
})