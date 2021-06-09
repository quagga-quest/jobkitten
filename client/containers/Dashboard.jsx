import React from 'react';
import ApplicationSection from './ApplicationSection.jsx';
import ApplicationBox from '../components/ApplicationBox.jsx';


const Dashboard = (props) => {
    return (
        <div id='dashboard'>
            {/* <h4>this is dashboard</h4>
            <ApplicationBox />
            <ApplicationSection /> */}
            <div className='application-sections' id='dashboard-section-one'>
              <ApplicationSection id={1} list={props.interested}/>
            </div>
            <div className='application-sections' id='dashboard-section-two'>
              <ApplicationSection id={2} list={props.inProgress}/>
            </div>
            <div className='application-sections' id='dashboard-section-three'>
              <ApplicationSection id={3} list={props.interview}/>
            </div>
        </div>
    )
}

export default Dashboard;