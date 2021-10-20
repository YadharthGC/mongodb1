import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

function Five() {
  const [five, setfive] = useState([]);
  useEffect(async () => {
    fetch();
  }, []);

  let fetch = async () => {
    try {
      let getpriceb = await axios.get("http://localhost:3001/five");
      setfive([...getpriceb.data]);
    } catch (error) {}
  };
  return (
    <div>
      <div className="container-fluid">
        <div>Price Greater than 500</div>
        <table className="table">
          <thead id="th">
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Price</td>
              <td>Material</td>
              <td>Color</td>
            </tr>
          </thead>

          <tbody>
            {five.map((user) => {
              return (
                <tr>
                  <td>
                    <span className="unumber">{user.id}</span>
                  </td>
                  <td>
                    <span className="udetails">{user.product_name}</span>
                  </td>
                  <td>
                    <span className="udetails">{user.product_price}</span>
                  </td>
                  <td>
                    <span className="udetails">{user.product_material}</span>
                  </td>
                  <td>
                    <span className="udetails">{user.product_color}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Five;
