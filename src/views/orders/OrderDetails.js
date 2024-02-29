// OrderDetails.js
import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import {
  CContainer,
  CRow,
  CCol,
  CButton,
} from '@coreui/react';
import { useReactToPrint } from 'react-to-print';

const OrderDetails = () => {
  const { id } = useParams();
  const componentRef = useRef();

  // Fetch order details using the order ID (id)
  // Placeholder: Replace this with actual data fetching logic
  const orderDetails = {
    orderId: id,
    itemName: 'Sample Item',
    itemValue: '$50.00',
    customerDetails: { name: 'John Doe', address: '123 Main St, City' },
    shipmentDetails: { /* ... */ },
    paymentDetails: { /* ... */ },
    refundDetails: { /* ... */ },
    // Add more details as needed
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <CContainer>
      <CRow>
        <CCol>
          <h2>Order Details - {orderDetails.orderId}</h2>
          <p>Item Name: {orderDetails.itemName}</p>
          <p>Item Value: {orderDetails.itemValue}</p>
          <p>Customer Details: {orderDetails.customerDetails.name}, {orderDetails.customerDetails.address}</p>
          {/* Display other details */}
          <CButton color="primary" onClick={handlePrint} className="mt-3">
            Download as PDF
          </CButton>
        </CCol>
      </CRow>
      {/* Add a reference to the component for printing */}
      <div style={{ display: 'none' }}>
        <div ref={componentRef}>
          {/* Content to be printed */}
          <h2>Order Details - {orderDetails.orderId}</h2>
          <p>Item Name: {orderDetails.itemName}</p>
          <p>Item Value: {orderDetails.itemValue}</p>
          <p>Customer Details: {orderDetails.customerDetails.name}, {orderDetails.customerDetails.address}</p>
          {/* Display other details */}
        </div>
      </div>
    </CContainer>
  );
};

export default OrderDetails;
