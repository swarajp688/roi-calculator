import React from "react";

const HiddenDetails = () => {
  return (
    <div>
      <div className="hidden-heading">
        <p className="apy">APY</p>
        <p className="percentage">63.34%</p>
      </div>
      <div className="hidden-list">
        <ul>
          <li>Calculated based on current rates</li>
          <li>
            All fugures are estimates provided for your convenience only, and by
            no means represent guaranted returns.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HiddenDetails;
