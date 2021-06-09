import React from 'react';
// import ApplicationSection from './ApplicationSection.jsx';
import ApplicationSection from './ApplicationSection.jsx';

const Completed = (props) => {
    return (
        <div id='completed'>
            <div className='application-section' id='completed-section-one'>
              <h5>Completed applications</h5>
              <ApplicationSection id={1} list={props.completed}/>
            </div>
            <div className='application-section' id='completed-section-two'>
              <h5>Rejected</h5>
              <ApplicationSection id={2} list={props.rejected}/>
            </div>
        </div>
    )
}

export default Completed;