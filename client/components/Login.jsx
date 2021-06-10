import React from "react";
import { Redirect, Link, Route } from "react-router-dom";
import { useState } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import images from '../assets/images';

const Login = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    img: {
        // marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxHeight: "220px", 
        maxWidth: "200px"
    },
    div: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

    }
  }));

 
  function handleLogin(e) {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    e.preventDefault();
    // fetch("http://localhost:3333/auth/login/", {
    //     method: 'POST',
    //     body: {
    //         email: email,
    //         password: password
    //     }
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("this is the login fetch request response", data);
    //   })
    //   .catch((err) => console.log(err));
    updateRedirect();
  }

  function updateRedirect() {
    props.setIsLoggedIn(true);
  }

  const classes = useStyles();

  return (
    <div id="login" className={classes.div}>
        <div className={classes.div}>
        <Typography variant="h1" component="h2" color="primary">
            JobKitten
        </Typography>            
        <img src={images.welcome[0]} className={classes.img}/>
            {/* <h2> {images.welcome[1]}</h2> */}
        </div>
      <form noValidate autoComplete="off">
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={(e) => {
            handleLogin(e);
          }}
        >
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default Login;
