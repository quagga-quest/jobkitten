import React from 'react';
import { Redirect, Link, Route } from 'react-router-dom';
import { useState } from 'react';


const Login = (props) => {

    // function handleLogin(e){
    //     e.preventDefault(); 
    //     props.setIsLoggedIn(true)
    // }

    //onClick={(e) => {handleLogin(e)}}


    const [redirect, setRedirect] = useState(false);
    if (redirect === false) {
        console.log('in the redirect')
    return (
    <div id ='login'>
        <a href='/auth/google'>Sign in with Google </a>
    </div>
    )
    setRedirect(true);
} else if (redirect === true) {
    return <Redirect to='/'/>;
}
}

export default Login;