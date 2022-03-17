import React, { useContext, useState } from 'react'
import { createContext } from 'react';
const useAuth = ()=> {

}
const RoiContext = createContext();


const RoiProvider = (props) => {
    const [balance , setBalance] = useState(10);
    const [timeFrame , setTimeFrame] = useState(1);
    const [tier , setTier] = useState(1);

    
    const value =  {balance , setBalance , timeFrame , setTimeFrame , tier, setTier}
  return (
    <RoiContext.Provider value={value}>{props.children}</RoiContext.Provider>
  )
}

export {
    RoiProvider,
    RoiContext,
}