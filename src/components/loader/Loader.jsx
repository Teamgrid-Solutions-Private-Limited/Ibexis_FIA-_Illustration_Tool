import React from "react";
import { Spinner } from "react-bootstrap";
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <Spinner
        animation="border"
        className="spinner-border"
        style={{ width: '50px', height: '50px', borderWidth: '5px' }}
      />
    </div>
  );
};

export default Loader;
