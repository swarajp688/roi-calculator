import { RoiContext } from "../Provider/RoiProvider";
import { useContext } from "react";
const Tier = () => {
  const { tier, setTier } = useContext(RoiContext);
  const handleClick = (e) => {
    setTier(e.target.value);
  };
  return (
    <div className="timeframe-tier">
      <h5>Select Tier</h5>
      <div>
      <button
        className={`btn-yellow ${tier == 1 ? "btn-color" : ""} `}
        value={1}
        onClick={handleClick}
      >
        
        Tier 1
      </button>
      <button
        className={`btn-yellow ${tier == 2 ? "btn-color" : ""} `}
        value={2}
        onClick={handleClick}
      >
        Tier 2
      </button>
      <button
        className={`btn-yellow ${tier == 3 ? "btn-color" : ""}`}
        value={3}
        onClick={handleClick}
      >
        Tier 3
      </button>
      <button
        className={`btn-yellow ${tier == 4 ? "btn-color" : ""}`}
        value={4}
        onClick={handleClick}
      >
        Tier 4
      </button>
      <button
        className={`btn-yellow ${tier == 5 ? "btn-color" : ""}`}
        value={5}
        onClick={handleClick}
      >
        Tier 5
      </button>
      </div>
    </div>
  );
};

export default Tier;
