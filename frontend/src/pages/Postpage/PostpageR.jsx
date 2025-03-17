import React, { useState } from 'react';
import './postpageR.css';

const Postpage = () => {
  const [activeJobType, setActiveJobType] = useState(null);
  const [activeDurationType, setActiveDurationType] = useState(null);
  const [unit, setUnit] = useState('weeks');
  const [duration, setDuration] = useState(1);


  const handleSliderChange = (e) => {
    setDuration(e.target.value);
  };

  return (
    <div>
      <div className="container bg1">
        <div className="row">
          <div className="col-12">
            <div className="mb-5">
              <h1 className="heading-1">Job Role:</h1>
              <input type="text" className="job-role" />
            </div>
          </div>

          <div className="col-12 mb-5 d-flex flex-row justify-content-start">
            <div className="internship-box">
              <button
                className={`Intern m-2 ${activeJobType === 'Internship' ? 'active' : ''}`}
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
                className={`Intern m-2 ${activeJobType === 'Placement' ? 'active' : ''}`}
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
            <div>
              <h1 className="heading-1">Branch:</h1>
              <input type="text" className="job-role" list="branch-list" />
              <datalist id="branch-list">
                <option value="Computer Science" />
                <option value="Information Technology" />
                <option value="Electronics and Communication" />
                <option value="Electrical and Electronics" />
                <option value="Fire and Safety" />
                <option value="Mechanical Engineering" />
                <option value="Civil Engineering" />
              </datalist>
            </div>
          </div>

          {/* ✅ Registration Link */}
          <div className="col-12 registration-link mb-5">
            <div>
              <h1 className="heading-1">Registration Link</h1>
              <input type="text" className="job-role" />
            </div>
          </div>

          <div className="col-12">
            <div className="post-button">
              <button className="post">POST</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Postpage;
