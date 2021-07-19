import React, { useState } from 'react';
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { signOut } from '../../api/auth';
import Notification from '../notifications/Notification';

export default function Topbar() {

	const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' });
	const [signedOut, setSignedOut] = useState(false);

	const handleLogout = () => {
		if(signOut()) {
			setNotify({
				isOpen: true,
				message: 'Signed out successfully.',
				type: 'success'
			});

			// A short setTimeout was purposefully added in order to let the Notification pop up to let the user know that logout succeeded
			setTimeout(() => { setSignedOut(true) }, 1000);
		}
	}

	// This code below was added instead of a <Redirect> because the page needed to be refreshed when user logs out in order to display the home screen
	if (signedOut) window.location.href = "/";
	

	return (
		<div className="topbar">
			<Notification notify={notify} setNotify={setNotify} />
			<div className="topBarWrapper">
				<img src="https://picsum.photos/200/300" alt="" className="topAvatar" />
				<div className="topBarLeft">
					<span className="logo">Admin Page</span>
				</div>

				<div className="topBarRight">
					<div className="topbarIconContainer">
						<NotificationsNone />
						<span className="topIconBadge">2</span>
					</div>

					<div className="topbarIconContainer">
						<Language />
						<span className="topIconBadge">2</span>
					</div>

					<div className="topbarIconContainer">
						<Settings />
						<span className="topIconBadge">2</span>
					</div>

					<Button onClick={handleLogout} variant="contained" color="primary">
						Logout
					</Button>


				</div>

			</div>
		</div>
	)
}
