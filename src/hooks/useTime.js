
import { useState, useEffect } from "react";

/**
 * Hook to return the current time 
 * @returns Date
 */
export default function useTime() {
  const [time, setDate] = useState(new Date());
  function refreshClock(){
    setDate(new Date());
  }
  useEffect(()=>{
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup(){
      clearInterval(timerId);
    };
  },[]);

  return time
}