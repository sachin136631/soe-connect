import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './homestyleR.css';

const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  
  const [jobsss,setjob]=useState([]);
  const fetchjob=async()=>{
    try{
      const response=await axios.get('http://localhost:5000/display');
      setjob(response.data);
    }catch(error){
      console.log("the error is ",error);
    }
  }
useEffect(()=>{
  fetchjob();
  const interval=setInterval(fetchjob,2000);
  return()=>clearInterval(interval);
},[]);

  const handleFilterClick = (filterType) => {
    setActiveFilter(activeFilter === filterType ? null : filterType);
  };

  const filteredJobs = jobsss.filter(job =>
    job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (!activeFilter || job.jobType === activeFilter)
  );

  return (
    <div className='back'>
      <div className="navbar">
        <img src="K-removebg-preview.png" alt="Logo" className="size pt-5 m-auto" />
        <Link to="/User" className="dp" href="#">
          <img src="user.png" alt="User" className='size2' />
        </Link>
      </div>

      <div className="background-gradien">
        <div className="to-align">
          <div className="search-container">
            <input 
              type="text" 
              className="search-bar" 
              placeholder="Search by job title..." 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="width1 mb-5 d-flex flex-md-row flex-column justify-content-center">
          <div className="internship-box">
            <button 
              className={`Intern m-2 ${activeFilter === 'Internship' ? 'active' : ''}`} 
              onClick={() => handleFilterClick('Internship')}
            >
              INTERNSHIP
            </button>
          </div>
          <div className="internship-box">
            <button 
              className={`Intern m-2 ${activeFilter === 'Placement' ? 'active' : ''}`} 
              onClick={() => handleFilterClick('Placement')}
            >
              PLACEMENT
            </button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="background">
          <div className="container-fluid">
            <div className="row">
              {filteredJobs.length > 0 ? (
                filteredJobs.map(job => (
                  <div key={job.id} className="col-12 col-md-6 col-lg-4">
                    <div className="job-post mt-4">
                      <h1 className='head'>Job Title: <br /> {job.jobTitle}</h1>
                      <p className="para">Type: {job.jobType}</p>
                      <p className='para'>Duration: {job.duration} {job.unit}</p>
                      <button 
                        className='view-more' 
                        onClick={() => setSelectedJob(job)}
                      >
                        VIEW MORE
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-results">No jobs found.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Popup for View More */}
      {selectedJob && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>{selectedJob.jobTitle}</h2>
            <p>Type: {selectedJob.jobType}</p>
            <p>Duration: {selectedJob.duration} {selectedJob.unit}</p>

            {/* Buttons to Open PDF or Registration Link */}
            {selectedJob.pdf && (
              <a href={selectedJob.pdf} target="_blank" rel="noopener noreferrer" className="modal-button">
                View PDF
              </a>
            )}
            <a href={selectedJob.link} target="_blank" rel="noopener noreferrer" className="modal-button">
              Go to Registration
            </a>

            <button className="modal-close" onClick={() => setSelectedJob(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
