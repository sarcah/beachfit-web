import React, { useState, useEffect } from 'react'
import "./blogList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from "../../api/auth.js";

export default function BlogList({notification}) {
	const [data, setData] = useState([]);

	const handleDelete = (id) => {
		setData(data.filter(item => item.id !== id))
		axios.delete(`${API_URL}/blogs/1/posts/${id}`)
			.then(response => {
				if (response.status >= 200 && response.status <= 300) notification("Blog post deleted successfully.", "success");
				else Promise.reject();
			})
			.catch(() => { notification('There was an error in deleting the blog post.', 'error') });
	}

	useEffect(() => {
		axios.get(`${API_URL}/blogs/1/posts`)
			.then(response => {
				setData(response.data)
				console.log(response.data)
			})
			.catch(() => { notification('There was an error in getting blog post data.', 'error') })
	}, []);

	const columns = [
		{
			field: 'title', headerName: 'Title', width: 180, renderCell: (params) => {
				return (
					<div className="userListUser">
						<img src={params.row.image_url} alt="" className="userListImg" />
						{params.row.title}
					</div>
				)
			}
		},
		{ field: 'body', headerName: 'Body', width: 360 },
		{
			field: "action",
			headerName: "Action",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={"/admin/blogs/1/posts/" + params.row.id}>
							<button className="userListEdit">Edit</button>
						</Link>
						<DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
					</>
				)
			}
		}
	];


	return (
		<div className="userList">
			<h1 className="block text-2xl ml-0 mr-0 font-bold mb-6"> Blogs Page</h1>
			<Link to="/admin/blogs/1/posts/new"><button className="bg-red-500 mb-8 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Create</button></Link>
			{
				(data.length > 0) ?
					<DataGrid rows={data} disableSelectionOnClick autoHeight columns={columns} pageSize={10} checkboxSelection /> : <div>Loading &hellip;</div>
			}
		</div>
	)
}
