const DoctorModel= require("../models/doctorModel");
const PateintModel= require("../models/patientModel");

const doctorRegistration=async(req, res)=>{
    const {name, city, mobile,speciality,email, password} = req.body; 
    try {
        const Doctor = await DoctorModel.create({
            name:name,
            city:city,
            mobile:mobile,
            specailization:speciality,
            email:email,
            password:password 
        })

        res.status(201).send({msg:"Doctor Succesfully Registered!"});
    } catch (error) {
           res.status(400).send({msg:"Data base not Work"})
    }

}


const doctorHomeDisplay=async( req, res) =>{
    try {
         const Doctor= await DoctorModel.find();
         res.status(200).send(Doctor);
    } catch (error) {
        console.log(error);
    }
}

const doctorLogin =async(req, res)=>{
   const { email, password} = req.body;
   
   try {
    const Doctor = await DoctorModel.findOne({email:email});
    if (!Doctor)
    {
      res.status(400).send({msg:"Invalid Email!"})
    }

    if (Doctor.password!=password)
    {
        res.status(400).send({msg:"Invalid Credentials!"});
    }

    res.status(200).send(Doctor);

   } catch (error) {
      console.log(error);
   }
}

const doctorSearch=async(req, res)=>{
  const { name, speciality}=req.body;
   
  const Doctor = await DoctorModel.find({$or:[{"name":name}, {"specailization":speciality}]})
  console.log(Doctor);
  res.status(200).send(Doctor);
}

const patientlist=async(req, res)=>{
    const {docid} = req.query;
    const Pateint = await  PateintModel.find({doctorId:docid})
     res.status(200).send(Pateint);
}



module.exports ={
    doctorRegistration,
    doctorHomeDisplay,
    doctorLogin,
    doctorSearch,
    patientlist
}