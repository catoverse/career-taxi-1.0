import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useFormik } from "formik";

import GirlSitting from "/public/images/assessment/girl-sitting.png";
import ArrowRight from "/public/images/assessment/arrow-right-yellow.svg";

const AssessmentCareerForm = ({ onSubmit }) => {
  const router = useRouter();
  const validate = (values) => {
    const errors = {};
    if (!values.career) {
      errors.career = "Required*";
    } else if (values.career.length > 30) {
      errors.career = "Must be 30 characters or less";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      career: "",
    },
    validate,
    onSubmit: (values) => {
      router.push("/assessment/assessment-question");
      onSubmit(values.career);
    },
  });

  return (
    <div className="my-20 px-5 2xl:px-44">
      <div className="relative mx-auto flex h-[800px] flex-col overflow-hidden rounded-xl bg-yellow bg-gradient-to-r from-yellow to-orange py-6 px-5 drop-shadow-[0_0_25px_rgba(255,192,51,0.75)] lg:h-full lg:py-10 lg:px-8 xl:container 2xl:container 3xl:max-w-screen-2xl">
        <div>
          <p className="mb-3 w-64 text-headThree font-bold leading-tight lg:mb-2 lg:w-full lg:text-headTwo">
            Intrinsic Motivation Test
          </p>
          <p className="mb-6 text-headFour font-normal leading-tight lg:font-semibold">
            Get a passion score for any career option
          </p>
          <div className="mb-6 text-bodyOne font-normal leading-snug">
            <p className="mb-1">Note:</p>
            <ul className="pl-5">
              <li className="list-disc">
                Be honest. The test is a tool to help you discover the truth.
              </li>
              <li className="list-disc">
                Don’t overthink, choose the answer that first comes to your
                mind.
              </li>
              <li className="list-disc">
                The test results are suggestive and not 100% accurate.
              </li>
            </ul>
          </div>
          <form
            className="flex flex-col items-start lg:flex-row"
            onSubmit={formik.handleSubmit}
          >
            <div className="w-full max-w-md lg:max-w-sm">
              <input
                id="career"
                type="text"
                placeholder="Enter your career choice"
                {...formik.getFieldProps("career")}
                className="text-sm w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-black"
              />
              {formik.errors.career && formik.touched.career ? (
                <div className="mt-1">{formik.errors.career}</div>
              ) : null}
            </div>
            <button
              type="submit"
              className="my-4 flex items-center rounded-lg bg-black px-4 py-2 text-bodyTwo font-medium text-yellow lg:my-0 lg:ml-4"
            >
              <p className="mr-1">Begin the test </p>
              <Image
                width={20}
                height={20}
                src={ArrowRight}
                alt="arrow right"
              />
            </button>
          </form>
        </div>
        <div className="absolute -bottom-16 left-20 w-full max-w-xl rotate-6 sm:left-28 lg:left-[65%] lg:-bottom-20 lg:w-[450px]">
          <Image src={GirlSitting} alt="girl sitting" />
        </div>
      </div>
    </div>
  );
};

export default AssessmentCareerForm;
