import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from './StateProvider';
import { Tooltip, IconButton } from '@material-ui/core';

function Header() {
	const [{ user }] = useStateValue();

	return (
		<div className='header'>
			<div className='header__left'>
				<Tooltip title='Log Out'>
					<Avatar
						className='header__avatar'
						alt={user?.displayName}
						src={user?.photoURL}
					/>
				</Tooltip>
				<AccessTimeIcon />
			</div>
			<div className='header__search'>
				<SearchIcon />
				<input placeholder='Search Slack-er Clone' />
			</div>
			<div className='header__right'>
				<HelpOutlineIcon />
			</div>
		</div>
	);
}

export default Header;
