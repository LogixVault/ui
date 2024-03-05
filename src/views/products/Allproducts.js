import CIcon from "@coreui/icons-react";
import { CButton } from "@coreui/react";
import React from "react";

import { cilPlus } from "@coreui/icons";
import { useNavigate } from "react-router-dom";

function Allproducts() {
  const navigate = useNavigate();
  const handleAddClick = () => {
    navigate("/products/add/new");
  };
  return (
    <div className="row">
      <div className="col-9">Products</div>
      <div className="col-3">
        <CButton color="primary" onClick={handleAddClick}>
          <CIcon icon={cilPlus} /> Add New Product
        </CButton>
      </div>
    </div>
  );
}

export default Allproducts;
