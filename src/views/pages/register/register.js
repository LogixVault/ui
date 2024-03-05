import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilUser, cibEthereum } from "@coreui/icons";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
//   const [statement, setStatement] = useState("");
//   const [nonce, setNonce] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  let statement="";
  let nonce="";

  async function handleEtheClick() {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      const authResponse = await fetch(
        "http://192.168.193.195:5000/auth/register/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            eth_address: account,
          }),
        }
      );
      const statementData = await authResponse.json();
      console.log(statementData);

    //   setStatement(statementData.statement);
    //   setNonce(statementData.nonce);
      statement=statementData.statement;
      nonce=statementData.nonce;
      console.log(statement);
      console.log(nonce);

      // Send login information to the server
      const response = await fetch(
        "http://192.168.193.195:5000/auth/prepare_message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            domain: window.location.host,
            uri: window.location.origin,
            eth_address: account,
            statement: statement,
            nonce: nonce,
          }),
        }
      );
      const responsedata = await response.json();
      setMessage(responsedata.message);

      const signature = await window.ethereum.request({
        method: "personal_sign",
        params: [message, account],
      });
      const statementReponse = await fetch(
        "http://192.168.193.195:5000/auth/register/verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            eth_address: account,
            message: message,
            signature: signature,
          }),
        }
      );
      if (statementReponse.ok) {
        localStorage.setItem("siwe", message);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error(error);
    }
  }
  const isError = error;
  if (isError) {
    navigate("/login");
  }
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-body-secondary">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Username"
                      autoComplete="username"
                      onChange={handleUsernameChange}
                    />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success" onClick={handleEtheClick}>
                      <CIcon icon={cibEthereum} /> {"   "}
                      Register with Ethereum
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        {isError ? (
          <div>Registration Unsuccessful</div>
        ) : (
          <div>Registration Success</div>
        )}
      </CContainer>
    </div>
  );
};

export default Register;
