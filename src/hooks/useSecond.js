import useTime from "./useTime";
/**
 * Hook to return the current times seconds
 * @returns Number
 */
export default function useSeconds() {

  const time = useTime();

  const getSeconds = () => {
    return time.getSeconds()
  }

  return getSeconds
}