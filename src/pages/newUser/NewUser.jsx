import React from 'react';
import "./newUser.css";

export default function NewUser() {
	return (
		<div className="newUser">
			<h1 className="block text-4xl ml-0 mr-0 font-bold">New User</h1>
			
			<form action="" className="newUserForm">
				
				<div className="newUserItem">
					<label htmlFor="username">Username</label>
					<input type="text" id="username" placeholder="John" />
				</div>

				<div className="newUserItem">
					<label htmlFor="fullname">Full Name</label>
					<input type="text" id="fullname" placeholder="John Doe" />
				</div>

				<div className="newUserItem">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" placeholder="john@example.com" />
				</div>

				<div className="newUserItem">
					<label htmlFor="password">Email</label>
					<input type="password" id="password" placeholder="" />
				</div>

				<div className="newUserItem">
					<label htmlFor="phone">Phone</label>
					<input type="text" id="phone" placeholder="+61 123 456 789" />
				</div>

				<div className="newUserItem">
					<label htmlFor="address">Address</label>
					<input type="text" id="address" placeholder="Sydney, Australia" />
				</div>

				<div className="newUserItem">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" placeholder="" />
				</div>

				<button className="newUserButton">Create</button>
			</form>
		</div>
	)
}
