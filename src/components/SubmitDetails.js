import { RoiContext } from "../Provider/RoiProvider";
import { useContext } from "react";
const SubmitDetails = () => {
  const {setIsClicked,isClicked}= useContext(RoiContext)
    const handleClick = ()=>{
      setIsClicked(!isClicked);
    }
  return (
    <div className="submit-details">
        <button className='apply-btn' onClick={handleClick}>Apply</button>
        <button className='cancel-btn' onClick={handleClick}>Cancel</button>
    </div>
  )
}

export default SubmitDetails