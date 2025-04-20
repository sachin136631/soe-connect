import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const port = process.env.PORT || 5000;

let db;
let jobCollection;

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
    },
});

MongoClient.connect(MONGODB_URI)
    .then((client) => {
        console.log("Connected to MongoDB Atlas");
        db = client.db();
        jobCollection = db.collection("job");

        app.post("/signup/recruiter", async (req, res) => {
            try {
                const { name, organizationName, designation, officialMailId, password } = req.body;
                const recruiterCollection = db.collection("recruiters");
                const result1 = await recruiterCollection.insertOne({
                    name, organizationName, designation, officialMailId, password,
                });
                res.status(201).json({ message: "Recruiter account created successfully", data: result1 });
            } catch (error) {
                console.log("Error inserting recruiter:", error);
            }
        });

        app.post("/signup/student", async (req, res) => {
            try {
                const { name, branch, email, year, skill, password } = req.body;
                const studentCollection = db.collection("student");
                const result2 = await studentCollection.insertOne({
                    name, branch, email, year, skill, password,
                });
                res.status(201).json({ message: "Student account created successfully", data: result2 });
            } catch (error) {
                console.log("Error inserting student:", error);
            }
        });

        app.post("/recruiter/posted", async (req, res) => {
            try {
                const { jobTitle, jobType, duration, unit, branches, link } = req.body;

                // 1. Save job in database
                const result3 = await jobCollection.insertOne({
                    jobTitle,
                    jobType,
                    duration,
                    unit,
                    branches,
                    link,
                });

                
                const studentCollection = db.collection("student");
                const students = await studentCollection.find().toArray();

                
                for (const student of students) {
                    const mailOptions = {
                        from: process.env.EMAIL_USER,
                        to: student.email,
                        subject: `New Job Opportunity: ${jobTitle}`,
                        text: `Hello ${student.name},

                    A new job has been posted!

                    Job Title: ${jobTitle}
                    Type: ${jobType}
                    Duration: ${duration} ${unit}
                    Eligible Branches: ${branches.join(", ")}
                    Apply Here: ${link}

                    Best of luck!
                    – Job Portal System`,
                    };

                    await transporter.sendMail(mailOptions);
                }

                res.status(201).json({ message: "Job posted and students notified", data: result3 });
            } catch (error) {
                console.log("Error posting job and sending emails:", error);
                res.status(500).json({ error: "Internal Server Error" });
            }
        });

        app.get("/display", async (req, res) => {
            try {
                const result3 = await jobCollection.find().toArray();
                res.status(200).json(result3);
            } catch (error) {
                console.log("Error fetching jobs:", error);
                res.status(500).json({ error: "Internal Server Error" });
            }
        });

        app.post("/login/student", async (req, res) => {
            try {
                const { email, password } = req.body;
                const studentCollection = db.collection("student");
                const user = await studentCollection.findOne({ email });

                if (!user) {
                    return res.status(400).json({ message: "Invalid email" });
                }
                if (password !== user.password) {
                    return res.status(400).json({ message: "Invalid password" });
                }

                res.status(201).json({ message: "Login successful", user });
            } catch (error) {
                console.log("Student login error:", error);
            }
        });

        app.post("/login/recruiter", async (req, res) => {
            try {
                const { officialMailId, password } = req.body;
                const recruiterCollection = db.collection("recruiters");
                const user = await recruiterCollection.findOne({ officialMailId });

                if (!user) {
                    return res.status(400).json({ message: "Invalid email" });
                }
                if (password !== user.password) {
                    return res.status(400).json({ message: "Invalid password" });
                }

                res.status(201).json({ message: "Login successful", user });
            } catch (error) {
                console.log("Recruiter login error:", error);
            }
        });

        app.get("/", (req, res) => {
            res.send("Hello from the job portal backend!");
        });

        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch((err) => console.error("Error connecting to MongoDB:", err));
