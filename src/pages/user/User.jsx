import React from 'react';
import "./user.css";
import { CalendarToday, PermIdentity, PhoneAndroid, MailOutlined, LocationSearching, Publish } from "@material-ui/icons";
import { Link } from 'react-router-dom';

export default function User() {
	return (
		<div className="user">
			<div className="userTitleContainer">
				<h1 className="userTitle">Edit User</h1>
				<Link to="/admin/users/new">
					<button className="userAddButton">Create</button>
				</Link>
			</div>
			<div className="userContainer">
				<div className="userShow">
					<div className="userShowTop">
						<img src="https://picsum.photos/200/300" alt="" className="userShowImg" />
						<div className="userShowTopTitle">
							<span className="userShowUsername">
								Anna Becker
							</span>
							<span className="userShowUserTitle">Software Engineer</span>
						</div>
					</div>
					<div className="userShowBottom">

					<span className="userShowTitle">Account Details</span>

					<div className="userShowInfo">
						<PermIdentity className="userShowIcon" />
						<span className="userShowInfoTitle">annabeck99</span>
					</div>

					<div className="userShowInfo">
						<CalendarToday className="userShowIcon" />
						<span className="userShowInfoTitle">10/12/1999</span>
					</div>

					<span className="userShowTitle">Contact Details</span>

					<div className="userShowInfo">
						<PhoneAndroid className="userShowIcon" />
						<span className="userShowInfoTitle">+61 123 456 789</span>
					</div>

					<div className="userShowInfo">
						<MailOutlined className="userShowIcon" />
						<span className="userShowInfoTitle">annabeck99@example.com</span>
					</div>

					<div className="userShowInfo">
						<LocationSearching className="userShowIcon" />
						<span className="userShowInfoTitle">Sydney, Australia</span>
					</div>

					</div>
				</div>


				<div className="userUpdate">
					<span className="userUpdateTitle">Edit</span>
					<form action="" className="userUpdateForm">
						<div className="userUpdateLeft">
							<div className="userUpdateItem">
								<label htmlFor="userUpdateInput">Username</label>
								<input type="text" placeholder="annabeck99" className="userUpdateInput" id="userUpdateInput" />
							</div>

							<div className="userUpdateItem">
								<label htmlFor="userUpdateInputUsername">Full Name</label>
								<input type="text" placeholder="Anna Becker" className="userUpdateInput" id="userUpdateInputUsername" />
							</div>

							<div className="userUpdateItem">
								<label htmlFor="userUpdateInputEmail">E-mail</label>
								<input type="text" placeholder="annabeck99@example.com" className="userUpdateInput" id="userUpdateInputEmail" />
							</div>

							<div className="userUpdateItem">
								<label htmlFor="userUpdatePhone">Phone</label>
								<input type="text" placeholder="+61 123 456 789" className="userUpdateInput" id="userUpdateItemPhone" />
							</div>

							<div className="userUpdateItem">
								<label htmlFor="userUpdateInputAddress">Address</label>
								<input type="text" placeholder="annabeck99" className="userUpdateInput" id="userUpdateInputAddress" />
							</div>
						</div>

						<div className="userUpdateRight">
							<div className="userUpdateUpload">
								<img className="userUpdateImage" src="https://picsum.photos/200/300" alt="" />
								<label htmlFor="file"><Publish className="userUpdateIcon" /></label>
								<input type="file" id="file" style={{display:"none"}} className="" />
							</div>
							<button className="userUpdateButton">Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
