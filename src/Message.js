import { DialogContent } from '@material-ui/core';
import { Message } from '@material-ui/icons';
import React from 'react';
import './Message.css';

function Messages({ message, timestamp, user, userImage }) {
	return (
		<div className='message'>
			<img src={userImage} alt='' />
			<div className='message__info'>
				<h4>{user} timestamp...</h4>
				<p>{message}</p>
			</div>
		</div>
	);
}

export default Messages;
