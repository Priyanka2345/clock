// import { clear } from '@testing-library/user-event/dist/clear';
// import { useState, useEffect } from 'react';
// function Clock(){
//   const [date, setDate] = useState(new Date());
//   function refreshClock(){
//     setDate(new Date());
//   }
//   useEffect(()=>{
//     const timerId = setInterval(refreshClock, 1000);
//     return function cleanup(){
//       clearInterval(timerId);
//     };
//   },[]);
//   return (
//     <span>
//       {date.toLocaleTimeString()}
//     </span>
//   );
// }
// export default Clock
import Digit from './Digit';
import padLeft from '../utils/padLeft';
import useTime from '../hooks/useTime';

function Clock(){
  const time = useTime()
  return (
    <>
      <Digit value={padLeft(time.getSeconds()) }/>
    </>
  );
}
export default Clock




