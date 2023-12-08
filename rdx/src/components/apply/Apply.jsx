import React, { useState } from "react";
import { DevTool } from "@hookform/devtools";
import { useForm, useFieldArray } from "react-hook-form";

export const ApplyForm = () => {
  const { register, control, formState, handleSubmit } = useForm({
    pastExperiences: [{ role: "", duration: "", description: "" }],
  });
  const { errors } = formState;
  // const [count, setCount] = useState(1);

  const { fields, append, remove } = useFieldArray({
    name: "pastExperiences",
    control: control,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const createCompo = (index) => {
    return (
      <>
        {/* role */}
        <label htmlFor="role">Role:</label>
        <input
          type="text"
          id="role"
          {...register(`pastExperiences.${index}.role`, {
            required: "role is required field",
          })}
        />
        <p className="text-red-800">
          {errors.pastExperiences?.index?.role?.message}
        </p>
        {/* description */}
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          {...register(`pastExperiences.${index}.description`, {
            required: "description is required field",
          })}
        />
        <p className="text-red-800">
          {errors.pastExperiences?.index?.description?.message}
        </p>
        {/* duration */}
        <label htmlFor="duration">Duration:</label>
        <input
          type="number"
          id="duration"
          {...register(`pastExperiences.${index}.duration`, {
            validate: {
              isNumber: (fieldValue) => {
                return !isNaN(fieldValue) || "duration must be a valid number";
              },
            },
          })}
        />
        <p className="text-red-800">
          {errors.pastExperiences?.index?.duration?.message}
        </p>
      </>
    );
  };

  // const handleAddExperience = (count) => {
  //   let final = [];
  //   for (let i = 0; i < count; i++) {
  //     final.push(createCompo(i));
  //   }
  //   console.log(final);
  //   return final;
  // };

  // totalExperience, pastExperiences, linkToResume
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* totalExperince */}
        <label htmlFor="totalExperience">Total Experience:</label>
        <input
          type="number"
          id="totalExperience"
          {...register("totalExperience", {
            required: "Total Experience is required field",
          })}
        />
        <p className="text-red-800">{errors.totalExperience?.message}</p>

        {/* linkToResume */}
        <label htmlFor="linkToResume">Link To Your Resume:</label>
        <input type="text" id="linkToResume" {...register("linkToResume")} />
        <p className="text-red-800">{errors.linkToResume?.message}</p>

        {/* pastExperiences */}
        {/* {handleAddExperience(count)} */}
        {fields.map((field, index) => {
          return (
            <>
              {/* role */}
              <label htmlFor="role">Role:</label>
              <input
                type="text"
                id="role"
                {...register(`pastExperiences.${index}.role`, {
                  required: "role is required field",
                })}
              />
              <p className="text-red-800">
                {errors.pastExperiences?.index?.role?.message}
              </p>
              {/* description */}
              <label htmlFor="description">Description:</label>
              <input
                type="text"
                id="description"
                {...register(`pastExperiences.${index}.description`, {
                  required: "description is required field",
                })}
              />
              <p className="text-red-800">
                {errors.pastExperiences?.index?.description?.message}
              </p>
              {/* duration */}
              <label htmlFor="duration">Duration:</label>
              <input
                type="number"
                id="duration"
                {...register(`pastExperiences.${index}.duration`, {
                  validate: {
                    isNumber: (fieldValue) => {
                      return (
                        !isNaN(fieldValue) || "duration must be a valid number"
                      );
                    },
                  },
                })}
              />
              <p className="text-red-800">
                {errors.pastExperiences?.index?.duration?.message}
              </p>
              {index > 0 && (
                <button type="button" onClick={() => remove(index)}>
                  Remove
                </button>
              )}
            </>
          );
        })}

        <button className="submit" value="submit">
          Submit
        </button>
        <button
          onClick={() => append({ role: "", description: "", duration: "" })}
        >
          Add
        </button>
      </form>
      {/* <button onClick={() => setCount(count + 1)}>Inc</button> */}
      <DevTool control={control} />
    </div>
  );
};
