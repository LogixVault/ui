import React, { useState } from "react";
import {
  CButton,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CFormTextarea,
} from "@coreui/react";
import PhotoUploader from "src/components/PhotoUploader";

const AddNewOrder = () => {
  const [formData, setFormData] = useState({
    ProductName: "",
    ProductCategory: "",
    Price: "",
    discountedPrice: "",
    description: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      const imagesArray = Array.from(files);
      setFormData((prevData) => ({ ...prevData, [name]: imagesArray }));
    } else {
      // If it's a regular input, update the state
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };
  const handleImageSelect = (imageData) => {
    // Update the formData with the selected image data
    setFormData((prevData) => ({ ...prevData, images: [imageData] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(formData);
  return (
    <CContainer>
      <h3>Add New Product</h3>
      <CForm onSubmit={handleSubmit}>
        <CRow>
          <CCol md="6">
            <CFormLabel htmlFor="itemName" className="mt-4">
              Product name
            </CFormLabel>
            <CFormInput
              type="text"
              id="ProductName"
              name="ProductName"
              value={formData.itemName}
              onChange={handleChange}
              required
            />
          </CCol>
          <CCol md="6">
            <CFormLabel htmlFor="ProductCategory" className="mt-4">
              Product Category
            </CFormLabel>
            <CFormInput
              type="text"
              id="ProductCategory"
              name="ProductCategory"
              value={formData.itemCount}
              onChange={handleChange}
              required
            />
          </CCol>
          <CCol md="6">
            <CFormLabel htmlFor="Price" className="mt-4">
              Price
            </CFormLabel>
            <CFormInput
              type="number"
              id="Price"
              name="Price"
              value={formData.Price}
              onChange={handleChange}
              required
            />
          </CCol>

          <CCol md="6">
            <CFormLabel htmlFor="discountedPrice" className="mt-4">
              Discounted Price
            </CFormLabel>
            <CFormInput
              type="text"
              id="discountedPrice"
              name="discountedPrice"
              value={formData.discountedPrice}
              onChange={handleChange}
              required
            />
          </CCol>

          <CCol md="12">
            <CFormLabel htmlFor="description" className="mt-4">
              Product Description
            </CFormLabel>
            <CFormTextarea
              id="description"
              rows={7}
              name="description"
              text="Must be 8-20 words long."
              onChange={handleChange}
            />
          </CCol>
          {/* Add other form fields similarly */}
        </CRow>
        {/* <CRow> */}
          {/* <div className="mb-3">
            <CFormLabel htmlFor="formFileMultiple">Product Images</CFormLabel>
            {/* Integrate the PhotoUploader component */}
            {/* <PhotoUploader onImageSelect={handleImageSelect} /> */}
          {/* </div> */} 
        {/* </CRow> */}

        <CButton color="primary" type="submit" className="mt-4 mb-4">
          Add Product
        </CButton>
      </CForm>
    </CContainer>
  );
};

export default AddNewOrder;
