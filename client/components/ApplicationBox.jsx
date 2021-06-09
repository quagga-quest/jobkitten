import React from 'react';

const ApplicationBox = (props) => {
    return (
    <a href = "">
        <div className = "app-box">
            <ul>
                <li>Job title: {props.jobTitle}</li>
                <li>Company: {props.company}</li>
            </ul>
        </div>
    </a>
    )
}

export default ApplicationBox;