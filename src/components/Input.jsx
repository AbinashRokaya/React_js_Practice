import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { type = "text", ...props },
  ref,
) {
  const id = useId();
  return <input type={type} ref={ref} id={id} />;
});
export default Input;
