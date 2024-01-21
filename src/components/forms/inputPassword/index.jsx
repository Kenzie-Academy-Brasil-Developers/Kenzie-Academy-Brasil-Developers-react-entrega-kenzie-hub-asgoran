import { forwardRef, useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

export const InputPassword = forwardRef(({ label, error, ...rest }, ref) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div>
      <label>{label}</label>
      <div className="input__password">
        <input type={isHidden ? "text" : "password"} ref={ref} {...rest} />
        <button type="button" className="pwdEye" onClick={() => setIsHidden(!isHidden)}>
          {isHidden ? <FaRegEye /> : <FaRegEyeSlash />}
        </button>
      </div>
      {error ? <p>{error.message}</p> : null}
    </div>
  );
});