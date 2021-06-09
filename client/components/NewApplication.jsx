import React from 'react';

const NewApplication = (props) => {
    function submitNewApp (e) {
      e.preventDefault();
      const title = document.getElementById('input-title').value;
      const company = document.getElementById('input-company').value;
      const link = document.getElementById('input-link').value;
      const body = {
          job_title: title,
          company: company,
          job_posting: link,
          status: 'interested'
        }

      fetch(`http://localhost:3333/jobs/add/${props.user_id}`, {
          method: 'POST',
          mode: 'cors',
          body: body
      })
        .then(() => {
            props.setInterested(...props.interested, body)
        })
        .catch((e) => console.log(e))
    }
    return(
    <form id='new-application' action='' onSubmit={(e) => {submitNewApp(e)}} >
        <label htmlFor='input-title'>Job title: </label>
        <input type='text' id='input-title'></input>
        <label htmlFor='input-company'>Company: </label>
        <input type='text' id='input-company'></input>
        <label htmlFor='input-link'>Link to the job posting: </label>
        <input type='text' id='input-link'></input>
        <button type='submit'>Submit</button>
    </form>
    )
}

export default NewApplication;