import React, { useState } from "react";
import Switch from "react-input-switch";
const Apy = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="apy-div">
      <h1>Enable Accelerated APY</h1>
      <div>
        <Switch
          styles={{
            track: {
              backgroundColor: "#fed700",
            },
            trackChecked: {
              backgroundColor: "#fed700",
            },
          }}
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  );
};

export default Apy;
