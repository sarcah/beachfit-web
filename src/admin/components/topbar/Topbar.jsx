import React from 'react';
import "./topbar.css";
import { Button } from "@material-ui/core";
import { signOut } from '../../../api/auth';
import { Link } from 'react-router-dom';


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
					<Link to="/admin" className="logo">Admin Page</Link>
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
