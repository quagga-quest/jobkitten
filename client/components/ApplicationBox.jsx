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

    function setInterview(e) {
        e.preventDefault();
        fetch(`http://localhost:3333/jobs/update/${props.jobId}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                field: 'status',
                value: 'interview'
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch((e) => console.error(e))
    }


    return (
    <a href = '#' id='redirect' onClick={(e) => clickBox(e)}>
        <div className = "app-box" >
            <Button type="button" id="button-delete" onClick={(e) => deleteBox(e)}>X</Button>
            <ul id = 'app-box-ul'>
                <li><b>Job title: </b>{props.jobTitle}</li>
                <li><b>Company: </b>{props.company}</li>
                <li><b>Posting: </b><a onClick={(e)=>{ e.stopPropagation()}} href={`${props.jobPosting}`}>click</a></li>
            </ul>
            {
                props.status === 'completed' &&
                <button type="button" id="button-interview" onClick={(e) => setInterview(e)}>Interview</button>
            }
        </div>
    </a>
    )
}

export default ApplicationBox;