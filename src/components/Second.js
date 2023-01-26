import Digit from './Digit';
import padLeft from '../utils/padLeft';
import useSeconds from '../hooks/useSeconds';

function Second(){
  const getSeconds = useSeconds()
  return (
    <>
      <Digit value={padLeft(getSeconds()) }/>
    </>
  );
}
export default Second
