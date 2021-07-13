import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from "@material-ui/icons"

export default function Topbar() {
	return (
		<div className="topbar">
			<div className="topBarWrapper">
				
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

					<img src="https://picsum.photos/200/300" alt="" className="topAvatar" />
				</div>

			</div>
		</div>
	)
}
