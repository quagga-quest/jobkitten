// import React from 'react';
// import ApplicationSection from './ApplicationSection.jsx';
import React, { useState, useEffect } from 'react';
import ApplicationSection from './ApplicationSection.jsx';

const Completed = (props) => {
  const [completed, setCompleted] = useState([]);
  const [rejected, setRejected] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3333/jobs/${props.userId}`, {
      mode: 'cors',
    }) 
      .then(response => response.json())
      .then(data => {
        //[{job_id: , job_title: , company: , job_posting: , status: }, {}]
        data.forEach(el => {
          if(el.status === 'completed') {
            setCompleted(completed => [...completed, el])
          }
          else if(el.status === 'rejected') {
            setRejected(rejected => [...rejected, el])
          }
        })
      })
      .catch((e) => console.error(e))
  }, []);
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