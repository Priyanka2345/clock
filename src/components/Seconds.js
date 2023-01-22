import Digit from './Digit';
import padLeft from '../utils/padleft';
import useSeconds from '../hooks/useSecond';

function Seconds(){
  const getSeconds = useSeconds()
  return <Digit value={padLeft(getSeconds())}/>
}
export default Seconds