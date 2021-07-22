import React from 'react'
import "./widgetLg.css"
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function WidgetLg({ data, onDelete }) {
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	return (
		<div className="widgetLg">

			<table className="w-9/12 widgetLgTable">
				<tr className="widgetLgTr">
					<th className="widgetLgTh">Title</th>
					<th className="widgetLgTh">Body</th>
					<th className="widgetLgTh">Date Created</th>
					<th className="widgetLgTh">Action</th>
				</tr>
				{
					data && data.map(post => {
						const date = new Date(post.created_at);
						const month = date.getMonth();
						const year = date.getFullYear();
						const day = date.getDay();
						const hours = date.getHours();
						const minutes = date.getMinutes();

						return (
							<tr className="widgetLgTr">
								<td className="widgetLgUser">
									<span className="widgetLgName">{post.title}</span>
								</td>

								<td className="widgetLgDate">{post.body.substr(0, 200)}...</td>
								<td className="widgetLgAmount">{`${day} ${months[month]} ${year} ${hours}:${minutes}`}</td>
								<td className="widgetLgStatus">
									<Link to={"/admin/blogs/1/posts/" + post.id}>
										<button className="userListEdit">Edit</button>
									</Link>
									<DeleteOutline className="userListDelete" onClick={() => onDelete(data.id)} />
								</td>
							</tr>
						)
					})
				}
			</table>
		</div>
	)
}
