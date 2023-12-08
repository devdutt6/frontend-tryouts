import { DevTool } from "@hookform/devtools";
import React from "react";
import { useForm } from "react-hook-form";

export const RegisterForm = () => {
  const { register, control, formState, handleSubmit } = useForm({
    // defaultValues: async () => {
    //   // api call
    // }
  });
  const { errors } = formState;
  // const { name, ref, onChange, onBlur } = register('email')
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
          {...register("email", { required: "Email is required field" })}
        />
        <p className="text-red-800">{errors.email?.message}</p>
        {/* <input type='email' id='email' name={name} ref={ref} onChange={onChange} onBlur={onBlur} /> */}

        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          {...register("password", {
            required: "Password is required field",
            minLength: {
              value: 6,
              message: "passowrd should atleast be of length 6",
            },
          })}
        />
        <p className="text-red-800">{errors.password?.message}</p>

        <label htmlFor="fullname">Full Name:</label>
        <input
          type="text"
          id="fullname"
          {...register("fullname", {
            required: "specify your name",
            minLength: 4,
          })}
        />
        <p className="text-red-800">{errors.fullname?.message}</p>

        <label htmlFor="userType">user type:</label>
        <select
          id="userType"
          {...register("userType", { required: "select the user type" })}
        >
          <option value="EMPLOYER">Employer</option>
          <option value="EMPLOYEE">Employee</option>
        </select>
        <p className="text-red-800">{errors.userType?.message}</p>

        <button className="submit" type="submit" value="submit">
          submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
