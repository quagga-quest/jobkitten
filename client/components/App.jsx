import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Completed from '../containers/Completed.jsx';
import Dashboard from '../containers/Dashboard.jsx';
import NewApplication from './NewApplication.jsx';
import ApplicationDetails from '../containers/ApplicationDetails.jsx';
import InterviewDetails from '../containers/InterviewDetails.jsx';
import AchievementsContainer from '../containers/AchievementsContainer.jsx';
import Login from './Login.jsx';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
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
                          <Link to='/add'> Add new application</Link>
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
                      <ApplicationDetails />
                    </Route>
                    <Route path='/intdetails/:job_id'>
                      <InterviewDetails />
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