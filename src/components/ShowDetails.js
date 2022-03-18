import { useState } from 'react'
import arrow from '../utils/coolicon.jpg'
import HiddenDetails from './HiddenDetails';
const ShowDetails = () => {
    const [showInfo,setShowInfo]=useState(false);
  return (
    <div className='show-details'>
        <h6 onClick={()=> setShowInfo(!showInfo)}>{showInfo ? 'Hide Details' : 'Show Details'} 
        <img src={arrow} alt='' />  
        </h6>
        {showInfo ? <HiddenDetails /> : <></>}
        
    </div>
  )
}

export default ShowDetails