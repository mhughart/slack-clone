import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
	const [state, dispatch] = useStateValue();

	const signIn = () => {
		auth.signInWithPopup(provider)
			.then((result) => {
				console.log(result);
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				});
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	return (
		<div className='login'>
			<div className='login__container'>
				<img
					src='https://www.logo.wine/a/logo/Slack_Technologies/Slack_Technologies-Mark-Black-Logo.wine.svg'
					alt=''
				/>
				<h1>Rabisu Design's Slack Clone</h1>
				<p>rabisudesign.slack.com</p>
				<Button onClick={signIn}>Sign In with Google</Button>
			</div>
		</div>
	);
}

export default Login;
