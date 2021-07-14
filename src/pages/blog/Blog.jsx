import React, { useState, useEffect } from 'react';
import "./blog.css";
import { CalendarToday, PermIdentity, PhoneAndroid, MailOutlined, LocationSearching, Publish } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Blog({id}) {
	// console.log(id);
	const API_URL = process.env.REACT_APP_API_URL;
	const [data, setData] = useState([]);

	useEffect(() => {
		axios.get(`${API_URL}/blogs/1/posts/${id}`)
			.then(response => {
				setData(response.data)
			})
	}, []);

	const handleUpdate = (event) => {
		event.preventDefault();
		let formdata = {
			title: document.querySelector("#blogUpdateInput").value,
			body: document.querySelector("#blogUpdateInputblogname").value
		}
		axios.patch(`${API_URL}/blogs/1/posts/${id}`, formdata)
			.then()
			.catch()
	}

	return (
		<div className="blog">
			<div className="blogTitleContainer">
				<h1 className="blogTitle">Edit blog</h1>
				<Link to="/admin/blogs/1/posts/new">
					<button className="blogAddButton">Create</button>
				</Link>
			</div>
			<div className="blogContainer">
				<div className="blogShow">
					<div className="blogShowTop">
						<img src="https://picsum.photos/200/300" alt="" className="blogShowImg" />
						<div className="blogShowTopTitle">
							<span className="blogShowblogname">
								Anna Becker
							</span>
							<span className="blogShowblogTitle">Software Engineer</span>
						</div>
					</div>
					<div className="blogShowBottom">

					<span className="blogShowTitle">Account Details</span>

					<div className="blogShowInfo">
						<PermIdentity className="blogShowIcon" />
						<span className="blogShowInfoTitle">annabeck99</span>
					</div>

					<div className="blogShowInfo">
						<CalendarToday className="blogShowIcon" />
						<span className="blogShowInfoTitle">10/12/1999</span>
					</div>

					<span className="blogShowTitle">Contact Details</span>

					<div className="blogShowInfo">
						<PhoneAndroid className="blogShowIcon" />
						<span className="blogShowInfoTitle">+61 123 456 789</span>
					</div>

					<div className="blogShowInfo">
						<MailOutlined className="blogShowIcon" />
						<span className="blogShowInfoTitle">annabeck99@example.com</span>
					</div>

					<div className="blogShowInfo">
						<LocationSearching className="blogShowIcon" />
						<span className="blogShowInfoTitle">Sydney, Australia</span>
					</div>

					</div>
				</div>


				<div className="blogUpdate">
					<span className="blogUpdateTitle">Edit</span>
					<form action="" className="blogUpdateForm">
						<div className="blogUpdateLeft">
							<div className="blogUpdateItem">
								<label htmlFor="blogUpdateInput">Blog Post Title</label>
								<input type="text" placeholder={data.title} className="blogUpdateInput" id="blogUpdateInput" />
							</div>

							<div className="blogUpdateItem">
								<label htmlFor="blogUpdateInputblogname">Body</label>
								<textarea placeholder={data.body} className="blogUpdateInput" id="blogUpdateInputblogname" />
							</div>

							<div className="blogUpdateItem">
								<label htmlFor="blogUpdateInputEmail">E-mail</label>
								<input type="text" placeholder="annabeck99@example.com" className="blogUpdateInput" id="blogUpdateInputEmail" />
							</div>

							<div className="blogUpdateItem">
								<label htmlFor="blogUpdatePhone">Phone</label>
								<input type="text" placeholder="+61 123 456 789" className="blogUpdateInput" id="blogUpdateItemPhone" />
							</div>

							<div className="blogUpdateItem">
								<label htmlFor="blogUpdateInputAddress">Address</label>
								<input type="text" placeholder="annabeck99" className="blogUpdateInput" id="blogUpdateInputAddress" />
							</div>
						</div>

						<div className="blogUpdateRight">
							<div className="blogUpdateUpload">
								<img className="blogUpdateImage" src="https://picsum.photos/200/300" alt="" />
								<label htmlFor="file"><Publish className="blogUpdateIcon" /></label>
								<input type="file" id="file" style={{display:"none"}} className="" />
							</div>
							<button className="blogUpdateButton" onClick={handleUpdate}>Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
