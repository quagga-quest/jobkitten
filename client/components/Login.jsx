import React from 'react';
import {Button} from '@material-ui/core';


const Login = (props) => {

    function handleLogin(e){
        e.preventDefault(); 
        props.setIsLoggedIn(true)
    }

    return (
    <div id ='login'>
        <Button id='button-login' variant="contained" color="primary" onClick={(e) => {handleLogin(e)}}>Sign in</Button>
    </div>
    )
}

export default Login;