import React, { useState } from 'react';
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { signOut } from '../../../api/auth';


export default function Topbar({notification}) {

	const handleLogout = () => {
		if(signOut()) { 
			notification('Signed out successfully.', 'success');
			window.location.href = "/";
		};
	}


	return (
		<div className="topbar">

			<div className="topBarWrapper">
				<img src="https://picsum.photos/200/300" alt="" className="topAvatar" />
				<div className="topBarLeft">
					<span className="logo">Admin Page</span>
				</div>

				<div className="topBarRight">
					

					<Button onClick={handleLogout} variant="contained" color="primary">
						Logout
					</Button>
				</div>
			</div>
		</div>
	)
}
