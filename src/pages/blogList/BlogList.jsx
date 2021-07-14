import React, { useState, useEffect } from 'react'
import "./blogList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function BlogList() {

	const API_URL = process.env.REACT_APP_API_URL;
	const [data, setData] = useState([]);

	const handleDelete = (id) => {
		// setData(data.filter(item => item.id !== id))
		axios.delete(`${API_URL}/blogs/1/posts/${id}`)
			.then(response => {
				console.log(response.data);
			})
	}

	useEffect(() => {
		axios.get(`${API_URL}/blogs/1/posts`)
			.then(response => {
				setData(response.data)
			})
	}, []);

	const columns = [
		{ field: 'id', headerName: 'ID', width: 70 },
		{
			field: 'title', headerName: 'Title', width: 180, renderCell: (params) => {
				return (
					<div className="userListUser">
						<img src={params.row.avatar} alt="" className="userListImg" />
						{params.row.title}
					</div>
				)
			}
		},
		{ field: 'body', headerName: 'Body', width: 180 },
		{
			field: 'status',
			headerName: 'Status',
			width: 120,
		},
		{
			field: 'transaction',
			headerName: 'Transaction Volume',
			description: 'This column has a value getter and is not sortable.',
			sortable: false,
			width: 200
		},
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
			{
				(data.length > 0) ?
					<DataGrid rows={data} disableSelectionOnClick autoHeight columns={columns} pageSize={10} checkboxSelection /> : <div>Loading &hellip;</div>
			}
		</div>
	)
}
