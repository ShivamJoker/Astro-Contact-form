import React, { forwardRef, InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { FormInput } from "../types/form";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: "email" | "text";
  label: string;
  error?: boolean;
}

const Input = forwardRef<
  HTMLInputElement,
  AuthInputProps & ReturnType<UseFormRegister<FormInput>>
>(({ name, type = "text", label, error, ...rest }, ref) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        className={error ? "input-error" : ""}
        name={name}
        {...rest}
        ref={ref}
      />
      <label>{error}</label>
    </div>
  );
});

Input.displayName = "Input";

export default Input;
