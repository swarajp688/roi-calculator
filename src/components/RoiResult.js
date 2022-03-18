import pencil from '../utils/Vector.jpg'
import ractangle from '../utils/Rectangle287.png'
import { RoiContext } from '../Provider/RoiProvider';
import { useContext } from 'react';
const RoiResult = () => {
const {isClicked}=useContext(RoiContext)
    
    
  return (
    <div className="roi-result ">
      <div>
        <p>ROI at current rate</p>
      </div>
      <div className={`roi-final ${isClicked ? 'border-yellow' : ''}`}>
          <input type='number'  defaultValue='100'/>
          <img alt='' src={isClicked ? pencil : ractangle} />
          <span>USD</span>

      </div>
      <div>
      <p>~3CAKE + 10DON</p>
      </div>

    </div>
  );
};

export default RoiResult;
