import React from 'react';

const Login = (props) => {

    function handleLogin(e){
        e.preventDefault(); 
        props.setIsLoggedIn(true)
    }

    return (
    <div id ='login'>
        <button id='button-login' onClick={(e) => {handleLogin(e)}}>Sign in</button>
    </div>
    )
}

export default Login;