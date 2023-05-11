import React from "react";

const TableRow = (props) => {

  const darkRow = {
    backgroundColor: "#2e3241",
    color: "white",
    border: "0",
    boxShadow: "none",
  };
  const lightRow = {
    color: "#0c0f48",
  }
  return (
    <tr style={props.themeDark ? darkRow : lightRow}>
      <td>
        <h4>{props.index}</h4>
      </td>
      <td>
        <h4>{props.name.toUpperCase()}</h4>
      </td>
      <td>
        <h4>
          {props.last.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
            minimumFractionDigits: 0,
          })}
        </h4>
      </td>
      <td>
        <h4>
          {props.sell.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
            minimumFractionDigits: 0,
          })}{" "}
          /{" "}
          {props.buy.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
            minimumFractionDigits: 0,
          })}
        </h4>
      </td>
      <td>
        <h4>{props.volume}</h4>
      </td>
      <td>
        <h4>{props.base_unit.toUpperCase()}</h4>
      </td>
    </tr>
  );
};

export default TableRow;
