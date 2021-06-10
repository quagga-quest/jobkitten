// import React from 'react';
import ApplicationSection from './ApplicationSection.jsx';
import ApplicationBox from '../components/ApplicationBox.jsx';
import React, { useState, useEffect } from 'react';



const Dashboard = (props) => {

  const [interested, setInterested] = useState([{job_id: 1, job_title: 'frontend', company: 'apple', job_posting: '', status: 'interested'}]);
  const [inProgress, setInProgress] = useState([{job_id: 3, job_title: 'frontend', company: 'spotify', job_posting: '', status: 'inProgress'}]);
  const [interview, setInterview] = useState([{job_id: 2, job_title: 'backend', company: 'microsoft', job_posting: '', status: 'interview'}]);

  // useEffect(() => {
    // fetch('http://localhost:3000/jobs')
    //   .then(response => response.json())
    //   .then(data => {
    //     //[{job_id: , job_title: , company: , job_posting: , status: }, {}]
    //     data.forEach(el => {
    //       switch (el.status) {
    //         case 'interested':
    //           setInterested([...interested, el]);
    //         case 'inProgress':
    //           setInProgress([...inProgress, el]);
    //         case 'interview':
    //           setInterview([...interview, el]);
    //       }
    //     })
    //   })
//   }, []);

    return (
        <div id='dashboard'>
            <div className='application-section' id='dashboard-section-three'>
              <h4>Interview stage</h4>
              <ApplicationSection 
              id={1} 
              list={interview} 
              action={setInterview}
              activeAppBox={props.activeAppBox} 
              setActiveAppBox={props.setActiveAppBox} />
            </div>
            <div className='application-section' id='dashboard-section-two'>
              <h4>Applications in progress</h4>
              <ApplicationSection 
              id={2} 
              list={inProgress} 
              action={setInProgress}
              activeAppBox={props.activeAppBox} 
              setActiveAppBox={props.setActiveAppBox}/>
            </div>
            <div className='application-section' id='dashboard-section-one'>
              <h4>Jobs I'm interested in</h4>
              <ApplicationSection 
              id={3} 
              list={interested} 
              action={setInterested} 
              activeAppBox={props.activeAppBox} 
              setActiveAppBox={props.setActiveAppBox}/>
            </div>
        </div>
    )
}

export default Dashboard;