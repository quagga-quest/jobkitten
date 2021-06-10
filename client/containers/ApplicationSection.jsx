import React from 'react';
import ApplicationBox from '../components/ApplicationBox.jsx'

const ApplicationSection = (props) => {

    const listOfApplications = [];
    const copy = [...props.list];
    copy.forEach(el => {
        listOfApplications.push( < ApplicationBox 
                      jobId = {`${el.job_id}`}
                      jobTitle = {`${el.job_title}`}
                      company = {`${el.company}`}
                      jobPosting = {`${el.job_posting}`}
                      status = {`${el.status}`} 
                      action = {props.action}
                      list={props.list} 
                      setActiveAppBox={props.setActiveAppBox}/>)
    })

    return (
        <div>
            { listOfApplications }
        </div>
    )
}

export default ApplicationSection;