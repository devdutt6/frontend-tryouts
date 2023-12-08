import { DevTool } from "@hookform/devtools";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const CreateJobForm = () => {
  const { register, handleSubmit, control, formState } = useForm({
    defaultValues: {
      isCommitmentRequired: "false",
      paymentType: "MONTHLY",
    },
  });
  const { errors } = formState;
  const [showMinCommitModel, setShowMinCommitModel] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };
  // minimumExperience, jobTitle, jobDescrpition, isCommitmentRequired, minimumJobCommitment, paymentType, salary

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* minimumExperience */}
        <label htmlFor="minimumExperience">Minimum Experience:</label>
        <input
          type="number"
          id="minimumExperience"
          {...register("minimumExperience", {
            required: "minimumExperience should be specified",
            validate: {
              isNumber: (fieldValue) => {
                return (
                  !isNaN(fieldValue) ||
                  "MinimumExperience must be a valid number"
                );
              },
            },
          })}
        />
        <p className="text-red-800">{errors.minimumExperience?.message}</p>

        {/* jobTitle */}
        <label htmlFor="jobTitle">Job Title:</label>
        <input
          type="text"
          id="jobTitle"
          {...register("jobTitle", {
            required: "jobTitle is required field",
          })}
        />
        <p className="text-red-800">{errors.jobTitle?.message}</p>

        {/* jobDescrpition */}
        <label htmlFor="jobDescrpition">Job Description:</label>
        <input
          type="text"
          id="jobDescrpition"
          {...register("jobDescrpition", {
            required: "jobDescrpition is required field",
          })}
        />
        <p className="text-red-800">{errors.jobDescrpition?.message}</p>

        {/* isCommitmentRequired */}
        <label htmlFor="isCommitmentRequired">Is Commitment Required:</label>
        <select
          id="isCommitmentRequired"
          {...register("isCommitmentRequired", {
            required: "isCommitmentRequired is required field",
            onChange: (fieldValue) => {
              if (
                fieldValue.target.options[fieldValue.target.selectedIndex]
                  .value === "true"
              ) {
                setShowMinCommitModel(true);
              } else {
                setShowMinCommitModel(false);
              }
            },
          })}
        >
          <option value="false">no</option>
          <option value="true">yes</option>
        </select>
        <p className="text-red-800">{errors.isCommitmentRequired?.message}</p>

        {/* minimumJobCommitment */}
        {showMinCommitModel ? (
          <>
            <label htmlFor="minimumJobCommitment">
              Minimum Job Commitment:
            </label>
            <input
              type="text"
              id="minimumJobCommitment"
              {...register("minimumJobCommitment", {
                validate: {
                  isNumber: (fieldValue) => {
                    return (
                      !isNaN(fieldValue) ||
                      "Minimum Job Commitment must be a valid number"
                    );
                  },
                },
              })}
            />
            <p className="text-red-800">
              {errors.minimumJobCommitment?.message}
            </p>
          </>
        ) : (
          <></>
        )}

        {/* paymentType */}
        <label htmlFor="paymentType">Payment Type:</label>
        <select
          id="paymentType"
          {...register("paymentType", {
            required: "paymentType is required field",
          })}
        >
          <option value="HOURLY">Hourly</option>
          <option value="MONTHLY">Monthly</option>
        </select>
        <p className="text-red-800">{errors.paymentType?.message}</p>

        {/* salary */}
        <label htmlFor="salary">Salary:</label>
        <input
          type="text"
          id="salary"
          {...register("salary", {
            required: "salary is required field",
            validate: {
              isNumber: (fieldValue) => {
                return !isNaN(fieldValue) || "Salary must be a valid number";
              },
            },
          })}
        />
        <p className="text-red-800">{errors.salary?.message}</p>

        <button className="submit" value="submit">
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
