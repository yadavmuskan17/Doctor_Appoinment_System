const express= require("express");
const app=express();
const cors= require("cors");
const bodyParser = require('body-parser');
const mongoose= require("mongoose");
const doctorRoute= require("./routes/doctorRoute");
const patientRoute= require("./routes/patientRoute");
require("dotenv").config();




// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("DB connected!!!");
})


 app.use(cors());
app.use("/doctor", doctorRoute);
app.use("/patient", patientRoute);





const Port=process.env.PORT || 8000;
app.listen(Port, ()=>{
    console.log(`server run on  port ${Port}`);
})