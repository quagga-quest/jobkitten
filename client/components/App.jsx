import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Completed from '../containers/Completed.jsx';
import Dashboard from '../containers/Dashboard.jsx';
import NewApplication from './NewApplication.jsx';
import ApplicationDetails from '../containers/ApplicationDetails.jsx';
import InterviewDetails from '../containers/InterviewDetails.jsx';
import AchievementsContainer from '../containers/AchievementsContainer.jsx';
import Login from './Login.jsx';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [activeAppBox, setActiveAppBox] = useState();
    const [userId, setUserId] = useState(1);

        return(
          isLoggedIn === true ?
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
                          <Link to='/add'> New application</Link>
                      </li>
                      <li>
                          <Link to='/achievements'> View achievements</Link>
                      </li>
                    </ul>
                  </nav>

                  <Switch>
                    <Route path='/dashboard'>
                      <Dashboard 
                        userId={userId}
                        activeAppBox={activeAppBox} setActiveAppBox={setActiveAppBox}
                        />
                    </Route>
                    <Redirect from="/" exact to="/dashboard" />
                    <Route path='/completed'>
                      <Completed 
                        userId={userId}
                        activeAppBox={activeAppBox} setActiveAppBox={setActiveAppBox}
                        />
                    </Route>
                    <Route path='/add'>
                      <NewApplication 
                      userId={userId}
                      />
                    </Route>
                    <Route path='/appdetails/:job_id'>
                      {/* will need to pass jobID + status as a prop to this */}
                      <ApplicationDetails userId={userId} activeAppBox={activeAppBox} />
                    </Route>
                    <Route path='/intdetails/:job_id'>
                      {/* will need to pass jobID + status as a prop to this */}
                      <InterviewDetails userId={userId} activeAppBox={activeAppBox} />
                    </Route>
                    <Route path='/achievements/'>
                      <AchievementsContainer />
                    </Route>
                  </Switch>
                </BrowserRouter>
            </div> : <div> <Login setIsLoggedIn={setIsLoggedIn}/> </div> 
        )
}

export default App;