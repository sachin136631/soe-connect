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
let jobCollection;

MongoClient.connect(MONGODB_URI)
    .then((client)=>{
        console.log("connected to mongo db atlas");
        db=client.db();
        jobCollection = db.collection("job");
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
        
        app.post("/recruiter/posted", async (req, res) => {
            try {
                const { jobTitle, jobType, duration, unit, branch, link } = req.body;
                const result3 = await jobCollection.insertOne({
                    jobTitle, jobType, duration, unit, branch, link,
                });
                res.status(201).json({ message: "Job posted successfully", data: result3 });
            } catch (error) {
                console.log("****", error, "****");
                res.status(500).json({ error: "Internal Server Error" });
            }
        });
        
        app.get('/display', async (req, res) => {
            try {
                const result3 = await jobCollection.find().toArray(); 
                res.status(200).json(result3);
            } catch (error) {
                console.log("The error is", error);
                res.status(500).json({ error: "Internal Server Error" });
            }
        });

        app.post('/login/student',async(req,res)=>{
            try{
                const {email,password}=req.body;
                const studentCollection=db.collection("student");
                const user = await studentCollection.findOne({email:email});

                if(!user){
                    return res.status(400).json({message:"invalid email"});
                }
                if(password !== user.password){
                    return res.status(400).json({ message: "Invalid email or password" });
                }
                res.status(201).json({ message: "Login successful", user });
            } catch(error){
                console.log(error);
            }
        });

        app.post('/login/recruiter',async(req,res)=>{
            try{
                const {officialMailId,password}=req.body;
                const studentCollection=db.collection("recruiters");
                const user = await studentCollection.findOne({officialMailId});

                if(!user){
                    return res.status(400).json({message:"invalid email"});
                }
                if(password !== user.password){
                    return res.status(400).json({ message: "Invalid email or password" });
                }
                res.status(201).json({ message: "Login successful", user });
            } catch(error){
                console.log(error);
            }
        });
        
        app.get('/',(req,res)=>{
            res.send("hello from hello");
        })
        
        app.listen(port,()=>{
            console.log(`server running on port ${port}`);
        });
    })
    .catch((err)=>console.error("error connecting to mongo db",err));


