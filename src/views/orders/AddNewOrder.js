import React, { useState } from "react";
import {
  CButton,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CRow,
} from "@coreui/react";

const AddNewOrder = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    itemCount: "",
    customerName: "",
    customerAddress: "",
    date: "",
    paymentMode: "",
    status: "",
  });

  const [modal, setModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    orderId: "",
    orderValue: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate order creation logic (fake API call)
    setTimeout(() => {
      // Simulate order creation success
      const orderId = "12345"; // Replace with the actual order ID
      const orderValue = "$100.00"; // Replace with the actual order value
      setOrderDetails({ orderId, orderValue });
      setModal(true);
    }, 1000); // Simulating a delay of 1 second for the API call
  };

  const closeModal = () => {
    setModal(false);
  };

  console.log(orderDetails);
  return (
    <CContainer>
    <h3>Create New Order</h3>
      <CForm onSubmit={handleSubmit}>
        <CRow>
          <CCol md="6" >
            <CFormLabel htmlFor="itemName" className="mt-4">Item Name</CFormLabel>
            <CFormInput
              type="text"
              id="itemName"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              required
            />
          </CCol>
          <CCol md="6">
 
    <CFormLabel htmlFor="itemQuantity" className="mt-4">
      Item Quantity
    </CFormLabel>
    <CFormInput
      type="text"
      id="itemQuantity"
      name="itemCount"  // <-- Corrected the name to match the handleChange function
      value={formData.itemCount}
      onChange={handleChange}
      required
    />
  
</CCol>
          <CCol md="6">
            <CFormLabel htmlFor="date" className="mt-4">Date</CFormLabel>
            <CFormInput
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </CCol>

          <CCol md="6">
            <CFormLabel htmlFor="paymentMode" className="mt-4">Payment Mode</CFormLabel>
            <CFormInput
              type="text"
              id="paymentMode"
              name="paymentMode"
              value={formData.paymentMode}
              onChange={handleChange}
              required
            />
          </CCol>

          <CCol md="6">
            <CFormLabel htmlFor="status" className="mt-4">Status</CFormLabel>
            <CFormInput
              type="text"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            />
          </CCol>
          {/* Add other form fields similarly */}
        </CRow>
        <CRow>
          <CCol md="6">
            <CFormLabel htmlFor="CustomerName" className="mt-4">Customer Name</CFormLabel>
            <CFormInput
              type="text"
              id="CustomerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              required
            />
          </CCol>
          <CCol md="6">
            <CFormLabel htmlFor="CustomerAddress" className="mt-4">CustomerAddress</CFormLabel>
            <CFormInput
              type="text"
              id="CustomerAddress"
              name="customerAddress"
              value={formData.customerAddress}
              onChange={handleChange}
              required
            />
          </CCol>
          {/* Add other form fields similarly */}
        </CRow>
        <CButton color="primary" type="submit" className="mt-4 mb-4">
          Create Order
        </CButton>
      </CForm>

      {/* Order Creation Status Modal */}
      <CModal show={modal} onClose={closeModal}>
        <CModalHeader closeButton>
          <CModalTitle>Order Creation Status</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p>Order ID: {orderDetails.orderId}</p>
          <p>Order Value: {orderDetails.orderValue}</p>
          {/* Add other order details here */}
        </CModalBody>
      </CModal>
    </CContainer>
  );
};

export default AddNewOrder;
