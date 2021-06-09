import React from 'react';

const ApplicationBox = (props) => {

    function deleteBox(e){
        e.preventDefault();
        const list = [...props.list];

        fetch(`http://localhost:3333/jobs/remove/${props.job_id}`, {
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
    <a href = "">
        <div className = "app-box">
            <button type="button" onClick={(e) => deleteBox(e)}>X</button>
            <ul>
                <li>Job title: {props.jobTitle}</li>
                <li>Company: {props.company}</li>
            </ul>
        </div>
    </a>
    )
}

export default ApplicationBox;