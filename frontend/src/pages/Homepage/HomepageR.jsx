import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './homestyleR.css';

const jobs = [
  { id: 1, title: "Data Scientist", type: "Placement", duration: "12 months", pdf: "data_scientist.pdf", registration: "https://example.com/register-data-scientist" },
  { id: 2, title: "Cybersecurity Analyst", type: "Internship", duration: "6 months", pdf: "", registration: "https://example.com/register-cybersecurity" },
  { id: 3, title: "Blockchain Developer", type: "Placement", duration: "9 months", pdf: "blockchain_dev.pdf", registration: "https://example.com/register-blockchain" },
  { id: 4, title: "Mobile App Developer", type: "Internship", duration: "4 months", pdf: "", registration: "https://example.com/register-mobile-dev" },
  { id: 5, title: "AI/ML Engineer", type: "Placement", duration: "12 months", pdf: "ai_ml_engineer.pdf", registration: "https://example.com/register-ai-ml" },
  { id: 6, title: "Cloud Solutions Architect", type: "Internship", duration: "6 months", pdf: "", registration: "https://example.com/register-cloud-architect" },
  { id: 7, title: "Full Stack Developer", type: "Placement", duration: "10 months", pdf: "full_stack_dev.pdf", registration: "https://example.com/register-full-stack" },
  { id: 8, title: "UX/UI Designer", type: "Internship", duration: "5 months", pdf: "ux_ui.pdf", registration: "https://example.com/register-ux-ui" },
  { id: 9, title: "IT Support Specialist", type: "Placement", duration: "8 months", pdf: "", registration: "https://example.com/register-it-support" },
  { id: 10, title: "DevOps Engineer", type: "Internship", duration: "6 months", pdf: "devops.pdf", registration: "https://example.com/register-devops" },
  { id: 11, title: "Game Developer", type: "Internship", duration: "3 months", pdf: "", registration: "https://example.com/register-game-dev" },
  { id: 12, title: "System Administrator", type: "Placement", duration: "9 months", pdf: "sys_admin.pdf", registration: "https://example.com/register-sys-admin" },
  { id: 13, title: "Network Engineer", type: "Internship", duration: "6 months", pdf: "network_engineer.pdf", registration: "https://example.com/register-network" },
  { id: 14, title: "Product Manager", type: "Placement", duration: "12 months", pdf: "", registration: "https://example.com/register-product-manager" },
];


const Homepage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleFilterClick = (filterType) => {
    setActiveFilter(activeFilter === filterType ? null : filterType);
  };

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (!activeFilter || job.type === activeFilter)
  );

  return (
    <div className='back'>
      <Link to="/postpage">
        <img src="plus.png" alt="" className="plus" />
      </Link>

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
                      <h1 className='head'>Job Title: <br /> {job.title}</h1>
                      <p className="para">Type: {job.type}</p>
                      <p className='para'>Duration: {job.duration}</p>
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
            <h2>{selectedJob.title}</h2>
            <p>Type: {selectedJob.type}</p>
            <p>Duration: {selectedJob.duration}</p>

            {/* Buttons to Open PDF or Registration Link */}
            {selectedJob.pdf && (
              <a href={selectedJob.pdf} target="_blank" rel="noopener noreferrer" className="modal-button">
                View PDF
              </a>
            )}
            <a href={selectedJob.registration} target="_blank" rel="noopener noreferrer" className="modal-button">
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
