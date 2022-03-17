import { useState, useContext } from "react";
import { RoiContext } from "../Provider/RoiProvider";
const TakeInput = () => {
  const { balance } = useContext(RoiContext);
  const [money, setMoney] = useState(0);
  return (
    <div className="take-input">
      <p>
        
        <span className="cake">USD</span> <span className="usd">CAKE</span>
      </p>
      <input
        className="money-input"
        type="number"
        placeholder="Enter Amount"
        value={money}
        onChange={(e) => setMoney(e.target.value)}
      />
      <div className="btn-group">
        <button className={`usebalance-btn ${money == balance ? `btn` :''}`} onClick={() => setMoney(balance)}>
          <span>USE BALANCE</span>
        </button>
        <button className={`btn-1000 ${money == 1000 ? `btn` :''}`} onClick={() => setMoney(1000)
          }>
          <span>$1000</span>
        </button>
        <button className={`btn-1000 ${money == 100 ? `btn` :''}`} onClick={() => setMoney(100)
          
        }>
          <span>$100</span>
        </button>
      </div>
    </div>
  );
};

export default TakeInput;
