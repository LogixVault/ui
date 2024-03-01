import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-material.css";
import "ag-grid-community/styles/ag-theme-quartz.css"; // Import Material theme
import { rowDataAtom } from "src/Context";

import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { CButton } from "@coreui/react";
const OrderGrid = ({ statusFilter }) => {
  const [rowData, setRowData] = useAtom(rowDataAtom);

  useEffect(() => {
    const storedData = localStorage.getItem("rowData");
    if (storedData) {
      setRowData(JSON.parse(storedData));
    }
  }, [setRowData]);
  const navigate = useNavigate();
  const onRowClicked = (event) => {
    const orderId = event.data.orderId;
    navigate(`/orders/details/${orderId}`);
  };

  const renderStatusDropdown = (params) => (
    <div>
      <select
        value={params.data.status}
        onChange={(e) =>
          handleStatusChange(params.data.orderId, e.target.value)
        }
      >
        {["Pending", "Accepted", "Shipped", "Delivered","Rejected"].map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
      <CButton
        onClick={(e) => {
          e.stopPropagation(); // Prevent the click event from propagating to the row
          // Handle the status change here
          handleStatusChange(params.data.orderId);
        }}
      />
     
    </div>
  );
 
  const handleStatusChange = (orderId, newStatus) => {
    // Update the status locally
    const updatedData = rowData.map((order) =>
      order.orderId === orderId ? { ...order, status: newStatus } : order
    );

    // Update the rowDataAtom
    setRowData(updatedData);

    // Save to local storage
    localStorage.setItem("rowData", JSON.stringify(updatedData));
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
    {
      headerName: "Action",
      field: "action",
      cellRenderer: renderStatusDropdown,
    },
  ];

  // Apply the filter based on the status
  const filteredData = statusFilter
    ? rowData.filter((order) => order.status === statusFilter)
    : rowData;

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
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
