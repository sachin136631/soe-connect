import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from 'mongodb';

const app=express();
app.use(cors());
app.use(express.json());
dotenv.config();

const MONGODB_URI=process.env.MONGODB_URI;
const port=process.env.PORT || 5000;
let db;

MongoClient.connect(MONGODB_URI)
    .then((client)=>{
        console.log("connected to mongo db atlas");
        db=client.db();
    })
    .catch((err)=>console.error("error connecting to mongo db",err));


app.post("/signup/recruiter",async(req,res)=>{
    try{
    const{name,organizationName,designation,officialMailId,password}=req.body;
    const recruiterCollection=db.collection("recruiters");
    const result1=await recruiterCollection.insertOne({
        name,organizationName,designation,officialMailId,password,
    });
    res.status(201).json({message:"Recruiter account created successfully",data:result1});
}catch(error){
    console.log("the error in inserting recruiter value is ",error);
}
});

app.post("/signup/student",async(req,res)=>{
    try{
        const{name,branch,email,year,skill,password}=req.body;
        const studentCollection=db.collection("student");
        const result2=await studentCollection.insertOne({
            name,branch,email,year,skill,password,
        });
        res.status(201).json({message:"student account created successfully",data:result2});
    }catch(error){
        console.log("***",error,"***");
    }
});

app.post("/recruiter/posted",async(req,res)=>{
    try{
        const {jobTitle,jobType,duration,unit,branch,link}=req.body;
        const jobCollection=db.collection("job");
        const result3=await jobCollection.insertOne({
          jobTitle,jobType,duration,unit,branch,link,
        });
        res.status(201).json({message:"job posted successfully",data:result3})
    }catch(error){
        console.log("****",error,"****");
    }
});
    
app.get('/',(req,res)=>{
    res.send("hello from hello");
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});