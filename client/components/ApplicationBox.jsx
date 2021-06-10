import React from 'react';
import { useHistory } from "react-router-dom";
import {Button, TextField} from '@material-ui/core';


const ApplicationBox = (props) => {
    const history = useHistory();

    function clickBox(e){
        e.preventDefault;
        props.setActiveAppBox(props.jobId)
        props.status === 'interview' ? history.push(`intdetails/${props.jobId}`) : history.push(`appdetails/${props.jobId}`)
     
    }
  
    function deleteBox(e){
        e.preventDefault();
        e.stopPropagation();
        const list = [...props.list];

        fetch(`http://localhost:3333/jobs/remove/${props.jobId}`, {
            method: 'DELETE',
            mode: 'cors'
        })
          .then(() => {
            list.forEach((el, index) => {
                if(el.job_id == props.jobId) {
                    list.splice(index, 1)
                }
            })
            props.action([...list]);
          })
          .catch((e) => console.log(e))
    }

    return (
    <a href = '#' id='redirect' onClick={(e) => clickBox(e)}>
        <div className = "app-box">
            <Button type="button" id="button-delete" onClick={(e) => deleteBox(e)}>X</Button>
            <ul>
                <li>Job title: {props.jobTitle}</li>
                <li>Company: {props.company}</li>
                <li>Posting: <a href={`${props.jobPosting}`}>click</a></li>
            </ul>
        </div>
    </a>
    )
}

export default ApplicationBox;