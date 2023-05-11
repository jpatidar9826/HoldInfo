import React from "react";

import "./HoldingTable.css";

import TableRow from "./TableRow";

const HoldingTable = ({items, themeDark}) => {
    
  return (
    <div className="HoldingTable-container">
      <table>
        <thead>
          <tr>
            <th>
              <h4>#</h4>
            </th>
            <th>
              <h4>Name</h4>
            </th>
            <th>
              <h4>Last Traded Price</h4>
            </th>
            <th>
              <h4>Buy / Sell Price</h4>
            </th>
            <th>
              <h4>Volume</h4>
            </th>
            <th>
              <h4>Base Unit</h4>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.holdings.map((holding, index) => {
            return (
              <TableRow
                key={holding._id}
                index={1 + index}
                name={holding.name}
                last={holding.last}
                sell={holding.sell}
                buy={holding.buy}
                volume={holding.volume}
                base_unit={holding.base_unit}
                themeDark={themeDark}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HoldingTable;
