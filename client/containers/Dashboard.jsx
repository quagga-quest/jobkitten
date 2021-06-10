// import React from 'react';
import ApplicationSection from './ApplicationSection.jsx';
import ApplicationBox from '../components/ApplicationBox.jsx';
import React, { useState, useEffect } from 'react';



const Dashboard = (props) => {

  const [interested, setInterested] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [interview, setInterview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3333/jobs/${props.userId}`, {
      mode: 'cors',
    }) 
      .then(response => response.json())
      .then(data => {
        console.log(data)
        data.forEach(el => {
          if(el.status === 'interested') {
            setInterested(interested => [...interested, el])
          }
          else if(el.status === 'inProgress') {
            setInProgress(inProgress => [...inProgress, el])
          }
          else if(el.status === 'interview') {
            setInterview(interview => [...interview, el])
          }
        })
      })
      .catch((e) => console.error(e))
  }, []);

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