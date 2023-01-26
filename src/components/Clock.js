import Digit from './Digit';
import Delimiter from './Delimiter';
import padLeft from '../utils/padleft';
import useTime from '../hooks/useTime';

function Clock(){
  const time = useTime()
  return (
    <>
      <Digit value={padLeft(time.getHours())}/>
      <Delimiter value=":"/>
      <Digit value={padLeft(time.getMinutes())}/>
      <Delimiter value=":"/>
      <Digit value={padLeft(time.getSeconds()) }/>
    </>
  );
}
export default Clock



