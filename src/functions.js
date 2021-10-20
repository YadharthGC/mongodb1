import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

function Functions() {
  return (
    <div classNme="container-fluid">
      <buttton type="button" class="btn btn-primary">
        <Link to="/" style={{ color: "white" }}>
          All
        </Link>
      </buttton>

      <buttton type="button" class="btn btn-primary">
        <Link to="/pricea" style={{ color: "white" }}>
          400&#60;Price&#60;800
        </Link>
      </buttton>

      <buttton type="button" class="btn btn-primary">
        <Link to="/priceb" style={{ color: "white" }}>
          400&#62;Price&#60;600
        </Link>
      </buttton>

      <buttton type="button" class="btn btn-primary">
        <Link to="/five" style={{ color: "white" }}>
          Price&#62;500{" "}
        </Link>
      </buttton>

      <buttton type="button" class="btn btn-primary">
        <Link to="/nm" style={{ color: "white" }}>
          Name ,Material
        </Link>
      </buttton>

      <buttton type="button" class="btn btn-primary">
        <Link to="/ten" style={{ color: "white" }}>
          ID:10
        </Link>
      </buttton>
      <buttton type="button" class="btn btn-primary">
        <Link to="/soft" style={{ color: "white" }}>
          Soft
        </Link>
      </buttton>

      <buttton type="button" class="btn btn-primary">
        <Link to="/ind" style={{ color: "white" }}>
          Indigo 492
        </Link>
      </buttton>

      <buttton type="button" class="btn btn-primary">
        <Link to="/delete" style={{ color: "white" }}>
          Delete
        </Link>
      </buttton>
    </div>
  );
}

export default Functions;
