import React from 'react';
import ApplicationSection from './ApplicationSection.jsx';
import ApplicationBox from '../components/ApplicationBox.jsx';


const Dashboard = (props) => {
    return (
        <div id='dashboard'>
            <div className='application-section' id='dashboard-section-three'>
              <h5>Interview stage</h5>
              <ApplicationSection id={1} list={props.interview} action={props.setInterview} />
            </div>
            <div className='application-section' id='dashboard-section-two'>
              <h5>Applications in progress</h5>
              <ApplicationSection id={2} list={props.inProgress} action={props.setInProgress}/>
            </div>
            <div className='application-section' id='dashboard-section-one'>
              <h5>Jobs I'm interested in</h5>
              <ApplicationSection id={3} list={props.interested} action={props.setInterested}/>
            </div>
        </div>
    )
}

export default Dashboard;