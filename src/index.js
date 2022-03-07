const express = require("express");
const { database } = require("pg/lib/defaults");
const db = require("./database/models/index");
// const models = require("../models");
// User = models.User;
const dotenv = require ("dotenv");
const cookieParser = require ("cookie-parser");
const loginRoute = require ("./routes/LoginRoute");
const profileRoute = require ("./routes/ProfileRoute");

dotenv.config();
const PORT = process.env.PORT || 5000
db.sequelize.authenticate()
 .then(()=>{
     console.log('database connected......')
 })

 const app = express()
 
 app.use(express.json());
//  app.use(bodyParser.json())

app.use(express.json());
 app.set('view engine','ejs')
app.use(cookieParser());

app.use("/api", loginRoute);
app.use("/api", profileRoute);



 



app.listen(PORT, () => console.log(`Server running on port ${PORT}`))