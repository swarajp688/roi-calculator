import { RoiContext } from '../Provider/RoiProvider'
import { useContext } from 'react'
const TimeFrame = () => {
    const {timeFrame , setTimeFrame} = useContext(RoiContext);
    
    const handleClick = (e)=> {
        setTimeFrame(e.target.value);
    }
    
    
  return (
    <div className="timeframe">
        <h2>TimeFrame</h2>
        <div>
        <button className={`btn-yellow ${timeFrame == 1 ? 'btn-color' : ''}`} value={1} onClick={handleClick}>1 Day</button>
        <button className={`btn-yellow ${timeFrame == 7 ? 'btn-color' : ''}`} value={7} onClick={handleClick}>7 Day</button>
        <button className={`btn-yellow ${timeFrame == 30 ? 'btn-color' : ''}`} value={30} onClick={handleClick}>30 Day</button>
        <button className={`btn-yellow ${timeFrame == 365 ? 'btn-color' : ''}`} value={365} onClick={handleClick}>1 Year</button>
        <button className={`btn-yellow ${timeFrame == 1825 ? 'btn-color' : ''}`} value={1825} onClick={handleClick}>5 Year</button>
        </div>
    </div>
  )
}

export default TimeFrame