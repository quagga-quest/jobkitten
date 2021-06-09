import React from 'react';
import kiwi from '../assets/images';
import apple from '../assets/images';
import lemon from '../assets/images';
import ninjaKitty from '../assets/images';
import ninjaKittyCaption from '../assets/images';



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

      fetch('http://localhost:3333/jobs/add', {
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
        <img src={kiwi.module.cut} />
        {/* <img src={apple.module.happy} />
        <img src={lemon.module.love} />
        <img src={ninjaKitty.module.hello} />
        <img src={ninjaKittyCaption.module.hello} /> */}

    </form>
    )
}

export default NewApplication;