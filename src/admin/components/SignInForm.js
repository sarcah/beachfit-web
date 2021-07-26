import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography } from '@material-ui/core';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from '@material-ui/core';


  
  const useStyles = makeStyles((theme) => ({
	root: {
	  height: '100vh',
	},
	image: {
	  backgroundImage: 'url(https://source.unsplash.com/random)',
	  backgroundRepeat: 'no-repeat',
	  backgroundColor:
		theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
	  backgroundSize: 'cover',
	  backgroundPosition: 'center',
	},
	paper: {
	  margin: theme.spacing(8, 4),
	  display: 'flex',
	  flexDirection: 'column',
	  alignItems: 'center',
	},
	avatar: {
	  margin: theme.spacing(1),
	  backgroundColor: theme.palette.secondary.main,
	},
	form: {
	  width: '100%', // Fix IE 11 issue.
	  marginTop: theme.spacing(1),
	},
	submit: {
	  margin: theme.spacing(3, 0, 2),
	},
  }));
  
function SignInForm({ onSignIn }) {
	
	const classes = useStyles();

	function handleSubmit(event) {
		event.preventDefault();
		const form = event.target;
		const elements = form.elements;
		const { value: email } = elements.email;
		const { value: password } = elements.password;
		onSignIn({email, password})
	}

	const responseInstagram = (access_token) => {
		
	}
  
	return (
	  <Grid container component="main" className={classes.root}>
		<CssBaseline />
		<Grid item xs={false} sm={4} md={7} className={classes.image} />
		<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
		  <div className={classes.paper}>
			<Avatar className={classes.avatar}>
			  <LockOutlinedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
			  Sign in
			</Typography>
			<form className={classes.form} noValidate onSubmit={handleSubmit}>
			  <TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				id="email"
				label="Email Address"
				name="email"
				autoComplete="email"
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
				autoComplete="current-password"
			  />
			  <FormControlLabel
				control={<Checkbox value="remember" color="primary" />}
				label="Remember me"
			  />
			  <Button
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
				className={classes.submit}
			  >
				Sign In
			  </Button>
			 
			  <Box mt={5}>
			  </Box>
			</form>
		  </div>
		</Grid>
	  </Grid>
	);
}

export default SignInForm