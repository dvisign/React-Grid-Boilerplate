import { useState, useCallback } from 'react';

const useInput = (initVal = null) => {
  const [value, setValue] = useState(initVal);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler, setValue];
}


export { useInput };