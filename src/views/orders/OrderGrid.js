import React, { useState } from "react";
import PropTypes from "prop-types";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-material.css";
import "ag-grid-community/styles/ag-theme-quartz.css"; // Import Material theme

import { useNavigate } from "react-router-dom";
const OrderGrid = ({ statusFilter }) => {
  const [rowData, setRowData] = useState([
    {
      orderId: 1,
      date: "2022-03-01",
      customerName: "John Doe",
      itemsCount: 3,
      paymentMode: "Credit Card",
      status: "Pending",
    },
    {
      orderId: 2,
      date: "2022-03-02",
      customerName: "Jane Smith",
      itemsCount: 2,
      paymentMode: "PayPal",
      status: "Shipped",
    },
    {
      orderId: 3,
      date: "2022-13-02",
      customerName: "Jane Yadav",
      itemsCount: 7,
      paymentMode: "PayPal",
      status: "Accepted",
    },
    {
      orderId: 4,
      date: "2023-13-12",
      customerName: "John Rao",
      itemsCount: 4,
      paymentMode: "PayPal",
      status: "Delivered",
    },
  ]);
  const navigate = useNavigate();
  const onRowClicked = (event) => {
    // Redirect to order details page when a row is clicked
    const orderId = event.data.orderId;
    navigate(`/orders/details/${orderId}`);
  };
  const columnDefs = [
    { headerName: "Order ID", field: "orderId", sortable: true, filter: true },
    { headerName: "Date", field: "date", sortable: true, filter: true },
    {
      headerName: "Customer Name",
      field: "customerName",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Items Count",
      field: "itemsCount",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Payment Mode",
      field: "paymentMode",
      sortable: true,
      filter: true,
    },
    { headerName: "Status", field: "status", sortable: true, filter: true },
  ];

  // Apply the filter based on the status
  const filteredData = statusFilter
    ? rowData.filter((order) => order.status === statusFilter)
    : rowData;

  return (
    <div className="ag-theme-material" style={{ height: 400, width: "100%" }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={filteredData}
        onRowClicked={onRowClicked}
      />
    </div>
  );
};

OrderGrid.propTypes = {
  statusFilter: PropTypes.string,
};

export default OrderGrid;
