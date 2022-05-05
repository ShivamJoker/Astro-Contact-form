import React, { useEffect, useRef } from "react";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { FormInput } from "../types/form";

const Form = () => {
  const { register, handleSubmit } = useForm<FormInput>();

  const onSubmit = handleSubmit((data) => console.log(data));

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    formRef.current.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }, [formRef]);

  return (
    <form
      ref={formRef}
      onSubmitCapture={(e) => console.log(e)}
      // onSubmit={(e) => {
      //   alert("fuck you");
      //   console.log("called");
      //   e.preventDefault();
      //   // onSubmit(e);
      // }}
    >
      <button type="button" onClick={() => console.log("im flattered")}>
        click me
      </button>
      <Input
        label="Name"
        {...register("name", {
          required: { value: true, message: "Name is required" },
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters",
          },
        })}
      />
      <Input
        label="Email"
        type="email"
        {...register("email", {
          required: { value: true, message: "Email is required" },
          pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
        })}
      />

      <input type="submit" value="submit" />
    </form>
  );
};

export default Form;
