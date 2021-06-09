import React from 'react';
// import { ProgressPlugin } from 'webpack';
import ApplicationBox from '../components/ApplicationBox.jsx'

const ApplicationSection = () => {
    //expect array of objects with properties id, name, company, status + link ??
    /*
    const arrayOfAppBoxes = [];
    const copy = [...this.props.applications];
    copy.forEach(el => {
        arrayOfAppBoxes.push(<ApplicationBox 
                              id = {el.id}
                              name = {el.name}
                              company = {el.comapny}
                              status = {el.status} />)
    })
    */
    /*
    in props: array of objects with the same status (interested -> [{job_id, job_title, company, job_posting, status}])
      make an empty array
      make a copy of array in props
      iterate through the copy pushing Application boxes in it:

      copy.forEach(el => {
          empty.push( <ApplicationBox 
                        jobId = {`${el.job_id}`}
                        jobTitle = {`${el.job_title}`}
                        company = {`${el.company}`}
                        jobPosting = {`${el.job_posting}`}
                        status = {`${status}`} />)
      })
    
    */

    const listOfApplications = [];
    const copy = [...props.list];
    copy.forEach(el => {
        listOfApplications.push( <ApplicationBox 
                      jobId = {`${el.job_id}`}
                      jobTitle = {`${el.job_title}`}
                      company = {`${el.company}`}
                      jobPosting = {`${el.job_posting}`}
                      status = {`${status}`} />)
    })

    return (
        <div>
            { listOfApplications }
        </div>
    )
}

export default ApplicationSection;