import { useEffect, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

export const useHidePass = (url) => {
  const [hidePass, sethidePass] = useState(true);
  const [hideComp, sethideComp] = useState(true);

  useEffect(() => {
    if (hidePass) {
      sethideComp(
        <FaRegEyeSlash
          className="icon-input"
          onClick={() => sethidePass(!hidePass)}
        />
      );
    } else {
      sethideComp(
        <FaRegEye
          className="icon-input"
          onClick={() => sethidePass(!hidePass)}
        />
      );
    }
  }, [hidePass]);

  return [hidePass, hideComp];
};
