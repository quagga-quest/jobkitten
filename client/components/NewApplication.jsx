import React from "react";
import {Button, TextField} from '@material-ui/core';



const NewApplication = (props) => {
  function submitNewApp(e) {
    e.preventDefault();
    const title = document.getElementById("input-title").value;
    const company = document.getElementById("input-company").value;
    const link = document.getElementById("input-link").value;
    const body = {
      job_title: title,
      company: company,
      job_posting: link,
      status: "interested",
    };

    fetch(`http://localhost:3333/jobs/add/${props.userId}`, {
      method: "POST",
      mode: "no-cors",
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({body}),
    })
    //   .then(() => {
    //     props.setInterested(...props.interested, body);
    //   })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((e) => console.error(e));
  }
  return (
    <div id='form-wrap'>
      <form
        id="new-application"
        action="#"
        onSubmit={(e) => {
          submitNewApp(e);
        }}
      >
        <label htmlFor="input-title">Job title: </label>
        <TextField type="text" className = "input" id="input-title" variant="outlined"></TextField>
        <label htmlFor="input-company">Company: </label>
        <TextField type="text" className = "input" id="input-company" variant="outlined" ></TextField>
        <label htmlFor="input-link">Link to the job posting: </label>
        <TextField type="text" className = "input" id="input-link" variant="outlined"></TextField>
        <Button type="submit" id = 'button-submit' variant="contained" color="primary">Submit</Button>
      </form>
    </div>
  );
};

export default NewApplication;
