import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';

function Login() {
	return (
		<div className='login'>
			<div className='login__container'>
				<img
					src='https://www.logo.wine/a/logo/Slack_Technologies/Slack_Technologies-Mark-Black-Logo.wine.svg'
					alt=''
				/>
				<h1>Sign into Rabisu Design's Slack Clone</h1>
				<p>rabisudesign.slack.com</p>
				<Button>Sign In with Google</Button>
			</div>
		</div>
	);
}

export default Login;
