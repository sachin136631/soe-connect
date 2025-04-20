import React, { useState } from 'react';
import './postpageR.css';
import axios from 'axios';

const Postpage = () => {
  const [activeJobType, setActiveJobType] = useState(null);
  const [activeDurationType, setActiveDurationType] = useState(null);
  const [unit, setUnit] = useState('weeks');
  const [duration, setDuration] = useState(null);
  const [moreInfo, setMoreInfo] = useState({
    jobTitle: '',
    branches: [],
    link: '',
  });

  const handleSliderChange = (e) => {
    setDuration(e.target.value);
  };

  const handlepost = (e) => {
    const { id, value } = e.target;
    setMoreInfo({
      ...moreInfo,
      [id]: value,
    });
  };

  const handleBranchChange = (e) => {
    const { value, checked } = e.target;
    setMoreInfo((prev) => ({
      ...prev,
      branches: checked
        ? [...prev.branches, value]
        : prev.branches.filter((branch) => branch !== value),
    }));
  };

  const submitter = async (e) => {
    try {
      console.log("*********submitting job*******");
      const response = await axios.post('http://localhost:5000/recruiter/posted', {
        jobTitle: moreInfo.jobTitle,
        jobType: activeJobType,
        duration: duration,
        unit: unit,
        branches: moreInfo.branches,
        link: moreInfo.link,
      });
      if (response.status === 201) {
        alert("Job posted successfully");
        e.preventDefault();
      }
    } catch (error) {
      console.log("The error is ", error);
    }
  };

  return (

    <div className='big-background gradient-background'>
      <div className="container bg1 shadow-lg">
        <div className="row">
          <div className="col-12">
            <div className="mb-5">
              <h1 className="heading-1">Job Role:</h1>
              <input type="text" className="job-role" id="jobTitle" value={moreInfo.jobTitle} onChange={handlepost} />
            </div>
          </div>
          <div className="col-12 mb-5 d-flex flex-row justify-content-start">
            <div className="internship-box">
              <button
                className={`Intern1 m-2 ${activeJobType === 'Internship' ? 'active' : ''}`}
                onClick={() => {
                  if (activeJobType === 'Internship') {
                    setActiveJobType(null);
                  } else {
                    setActiveJobType('Internship');
                  }
                }}
                
              >
                INTERNSHIP
              </button>

            </div>
            <div className="internship-box">
              <button
                className={`Intern1 m-2 ${activeJobType === 'Placement' ? 'active' : ''}`}
                onClick={() => {
                  if (activeJobType === 'Placement') {
                    setActiveJobType(null);
                  } else {
                    setActiveJobType('Placement');
                  }
                }}               
              >
                PLACEMENT
              </button>

            </div>
          </div>

          {/* ✅ New Section for Duration Slider */}
          <div className="col-12 mb-5 duration-box">
            <h1 className="heading-1">Duration:</h1>
            <div className="d-flex flex-row gap-3 justify-content-between">
              <button
                className={`Intern2 ${activeDurationType === 'Weeks' ? 'active' : ''}`}
                onClick={() => {
                  if (activeDurationType === 'Weeks') {
                    setActiveDurationType(null);
                    setUnit('');
                  } else {
                    setActiveDurationType('Weeks');
                    setUnit('weeks');
                  }
                }}                
              >
                Weeks
              </button>
              <button
                className={`Intern2 ${activeDurationType === 'Months' ? 'active' : ''}`}
                onClick={() => {
                  if (activeDurationType === 'Months') {
                    setActiveDurationType(null);
                    setUnit('');
                  } else {
                    setActiveDurationType('Months');
                    setUnit('months');
                  }
                }}                                
              >
                Months
              </button>
              <button
                className={`Intern2 ${activeDurationType === 'Years' ? 'active' : ''}`}
                onClick={() => {
                  if (activeDurationType === 'Years') {
                    setActiveDurationType(null);
                    setUnit('');
                  } else {
                    setActiveDurationType('Years');
                    setUnit('years');
                  }
                }}                
              >
                Years
              </button>
            </div>
            <input
              type="range"
              min={unit === 'weeks' ? 1 : unit === 'months' ? 1 : 1}
              max={unit === 'weeks' ? 52 : unit === 'months' ? 24 : 10}
              value={duration}
              step="1"
              className="slider"
              onChange={handleSliderChange}
            />
            <p className="duration-output">
              {duration} {unit}
            </p>
          </div>
          <div className="fileupload col-12 mb-5">
            <div>
              <h1 className="heading-1">Upload JD:</h1>
              <input type="file" id="file" accept=".jpg, .png, .pdf" />
            </div>
          </div>
          <div className="col-12 branch mb-5">
            <h1 className="heading-1">Branch:</h1>
              {[
                "Computer Science",
                "Information Technology",
                "Electronics and Communication",
                "Electrical and Electronics",
                "Fire and Safety",
                "Mechanical Engineering",
                "Civil Engineering",
              ].map((branch) => (
                <div key={branch} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={branch}
                    value={branch}
                    checked={moreInfo.branches.includes(branch)}
                    onChange={handleBranchChange}
                    className="w-5 h-5 text-green-500 accent-green-500 cursor-pointer custom-checkbox"
                  />
                  <label htmlFor={branch} className="text-lg custom-texts">{branch}</label>
                </div>
              ))}
          </div>

          {/* ✅ Registration Link */}
          <div className="col-12 registration-link mb-5">
            <div>
              <h1 className="heading-1">Registration Link</h1>
              <input type="text" className="job-role" id="link" value={moreInfo.link} onChange={handlepost}/>
            </div>
          </div>
          <div className="col-12">
            <div className="post-button">
              <button className="post" type="submit" onClick={submitter}>POST</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Postpage;
