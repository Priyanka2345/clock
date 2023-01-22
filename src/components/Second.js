import Digit from './Digit';
import padLeft from '../utils/padLeft';
import useTime from '../hooks/useTime';

function Second(){
  const time = useTime()
  return (
    <>
      <Digit value={padLeft(time.getSeconds()) }/>
    </>
  );
}
export default Second