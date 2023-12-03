import { useState } from "react";

const useToggle = (defaultValue = false) => {
  const [value, setValue] = useState(defaultValue);
  const toggle = () => setValue((v) => !v);
  const close = () => setValue(false);

  return { value, setValue, toggle, close };
};

export default useToggle;
