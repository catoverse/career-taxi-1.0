import React from "react";
import { Formik, Field, FieldArray, Form, useFormik } from "formik";
// put carousel inside single form component
// field array for picked value
// get all the values on last submit
// const formik = useFormik()

const AssessmentRadio = ({
  question,
  currentSlide,
  setCurrentSlide,
  isLastSlide,
  field,
}) => {
  const handleChange = (e) => {
    field.onChange(e);
    if (!isLastSlide) setCurrentSlide((currentSlide) => currentSlide + 1);
    // console.log(e.target.value);
    // console.log(question);
  };

  return (
    <div className="text-left">
      <p className="mb-4 text-headFour font-bold">{question.Question}</p>
      <div className="mb-2">
        <label className="cursor-pointer">
          <input
            type="radio"
            name={field.name}
            onChange={handleChange}
            value={question.Reverse === "Yes" ? 5 : 1}
            className="mr-3 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white transition duration-300 checked:border-[5px] checked:border-yellow"
          />
          Strongly Disagree
        </label>
      </div>
      <div className="mb-2">
        <label className="cursor-pointer">
          <input
            type="radio"
            name={field.name}
            onChange={handleChange}
            value={question.Reverse === "Yes" ? 4 : 2}
            className="mr-3 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white transition duration-300 checked:border-[5px] checked:border-yellow"
          />
          Disagree
        </label>
      </div>
      <div className="mb-2">
        <label className="cursor-pointer">
          <input
            type="radio"
            name={field.name}
            onChange={handleChange}
            value="3"
            className="mr-3 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white transition duration-300 checked:border-[5px] checked:border-yellow"
          />
          Undecided
        </label>
      </div>
      <div className="mb-2">
        <label className="cursor-pointer">
          <input
            type="radio"
            name={field.name}
            onChange={handleChange}
            value={question.Reverse === "Yes" ? 2 : 4}
            className="mr-3 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white transition duration-300 checked:border-[5px] checked:border-yellow"
          />
          Agree
        </label>
      </div>
      <div className="mb-2">
        <label className="cursor-pointer">
          <input
            type="radio"
            name={field.name}
            onChange={handleChange}
            value={question.Reverse === "Yes" ? 1 : 5}
            className="mr-3 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white transition duration-300 checked:border-[5px] checked:border-yellow"
          />
          Strongly Agree
        </label>
      </div>
    </div>
  );
};

export default AssessmentRadio;
