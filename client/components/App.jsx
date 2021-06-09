import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Completed from '../containers/Completed.jsx';
import Dashboard from '../containers/Dashboard.jsx';
import NewApplication from './NewApplication.jsx';
import ApplicationDetails from '../containers/ApplicationDetails.jsx'

const App = () => {
    
    const [interested, setInterested] = useState([{job_id: 1, job_title: 'frontend', company: 'apple', job_posting: '', status: 'interested'}]);
    const [inProgress, setInProgress] = useState([{job_id: 3, job_title: 'frontend', company: 'spotify', job_posting: '', status: 'inProgress'}]);
    const [completed, setCompleted] = useState([{job_id: 2, job_title: 'backend', company: 'microsoft', job_posting: '', status: 'interview'}]);
    const [interview, setInterview] = useState([{job_id: 2, job_title: 'backend', company: 'microsoft', job_posting: '', status: 'interview'}]);
    const [hired, setHired] = useState([]);
    const [rejected, setRejected] = useState([{job_id: 1, job_title: 'frontend', company: 'apple', job_posting: '', status: 'interested'}]);


  //on the load, fetch all applications and sort them to corresponding state properties
//   useEffect(() => {
    // fetch('http://localhost:3000/jobs')
    //   .then(response => response.json())
    //   .then(data => {
    //     //[{job_id: , job_title: , company: , job_posting: , status: }, {}]
    //     data.forEach(el => {
    //       switch (el.status) {
    //         case 'interested':
    //           setInterested(...interested, el);
    //         case 'inProgress':
    //           setInProgress(...inProgress, el);
    //         case 'completed':
    //           setCompleted(...completed, el);
    //         case 'interview':
    //           setInterview(...interview, el);
    //         case 'rejected':
    //           setRejected(...rejected, el);
    //         case 'hired':
    //           setHired(...hired, el);
    //       }
    //     })
    //   })
//   }, []);
//pass down arrays of interested, inProgress, interview to dashboard
//pass down completed, rejected to completed
        return(
            <div>
                <BrowserRouter>
                  <nav className="react-router-nav">
                    <ul>
                      <li>
                        <Link to='/dashboard'> Applications in progress</Link>
                      </li>
                      <li>
                        <Link to='/completed'> Completed applications</Link>
                      </li>
                      <li>
                          <Link to='add'> Add new application</Link>
                      </li>
                      <li>
                          <Link to='/appdetails'> View app details</Link>
                      </li>
                    </ul>
                  </nav>

                  <Switch>
                    <Route path='/dashboard'>
                      <Dashboard 
                        interested={interested} setInterested={setInterested}
                        inProgress={inProgress} setInProgress={setInProgress}
                        interview={interview} setInterview={setInterview}
                        />
                    </Route>
                    <Route path='/completed'>
                      <Completed 
                        completed={completed} setCompleted={setCompleted}
                        rejected={rejected} setRejected={setRejected}
                        />
                    </Route>
                    <Route path='/add'>
                      <NewApplication interested={interested} setInterested={setInterested}/>
                    </Route>
                    <Route path='/appdetails'>
                      {/* will need to pass jobID + status as a prop to this */}
                      <ApplicationDetails />
                    </Route>
                  </Switch>
                </BrowserRouter>
            </div>
        )
}

export default App;