import React, { useState } from 'react';
import "./productList.css";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from "../../dummyData";
import { Link } from 'react-router-dom';

export default function ProductList() {

	const [data, setData] = useState(productRows);

	const handleDelete = (id) => {
		setData(data.filter(item => item.id !== id)) //Change this to a fetch later
	}

	const columns = [
		{ field: 'id', headerName: 'ID', width: 70 },
		{ field: 'product', headerName: 'Product', width: 280, renderCell: (params) => {
			return (
				<div className="productListItem">
					<img src={params.row.img} alt="" className="productListImg" />
					{params.row.name}
				</div>
			)
		} },
		{ field: 'stock', headerName: 'Stock', width: 200 },
		{
		  field: 'status',
		  headerName: 'Status',
		  width: 120,
		},
		{
		  field: 'price',
		  headerName: 'Price',
		  width: 200
		},
		{
			field: "action",
			headerName: "Action",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={"/admin/products/" + params.row.id}>
							<button className="productListEdit">Edit</button>
						</Link>
						<DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)} />
					</>
				)
			}
		}
	  ];

	return (
		<div className="productList">
			<DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
		</div>
	)
}
