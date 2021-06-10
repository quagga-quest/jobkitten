// import React from 'react';
// import ApplicationSection from './ApplicationSection.jsx';
import React, { useState, useEffect } from 'react';
import ApplicationSection from './ApplicationSection.jsx';

const Completed = (props) => {
  const [completed, setCompleted] = useState([{job_id: 2, job_title: 'backend', company: 'microsoft', job_posting: '', status: 'completed'}]);
  const [rejected, setRejected] = useState([{job_id: 1, job_title: 'frontend', company: 'apple', job_posting: '', status: 'rejected'}]);
    return (
        <div id='completed'>
            <div className='application-section' id='completed-section-one'>
              <h4>Completed applications</h4>
              <ApplicationSection 
              id={1} 
              list={completed}
              action={setCompleted}
              activeAppBox={props.activeAppBox} 
              setActiveAppBox={props.setActiveAppBox}/>
            </div>
            <div className='application-section' id='completed-section-two'>
              <h4>Rejected</h4>
              <ApplicationSection 
              id={2} 
              list={rejected}
              action={setRejected}
              activeAppBox={props.activeAppBox} 
              setActiveAppBox={props.setActiveAppBox}/>
            </div>
        </div>
    )
}

export default Completed;