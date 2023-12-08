import React from "react";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

export const LoginForm = () => {
  const { register, control, formState, handleSubmit } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: "Email is a missing" })}
        />
        <p className="text-red-800">{errors.email?.message}</p>

        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          {...register("password", { required: "Password is a missing" })}
        />
        <p className="text-red-800">{errors.password?.message}</p>

        <button className="submit" value="submit">
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
