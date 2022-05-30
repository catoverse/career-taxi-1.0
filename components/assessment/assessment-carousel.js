import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { Formik, Field, FieldArray, Form } from "formik";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import AssessmentRadio from "./assessment-radio.js";
import getTestData from "../../queries/get-test-data";
import Router from 'next/router'



import Arrow from "/public/images/test/arrow-left.svg";

const AssessmentCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [questionData, setQuestionData] = useState([]);
  const [answers, setAnswers] = useState([]);

  const data = async () => {
    setIsLoading(true);
    const questions = await getTestData();
    setQuestionData(questions);
    setIsLoading(false);
    console.log(questions);
  };

  useEffect(() => {
    data();
  }, []);

  const handleSubmit = (values) => {
    setAnswers(values);
    console.log(values,answers);
    const omitIdx = values.answers.findIndex((v) => v === "0");
    if (omitIdx >= 0) {
      setCurrentSlide(omitIdx);
    }
    Router.push({
    pathname: '/assessment/assessment-result',
    query: { answers: values.answers },
})
  };
  
  const validate = (field,value,shouldValidate) =>{
                  console.log('field',field)
    // questionData.map((question)=>{
    //           if(question?.Reverse ==="Yes"){
    //     if(value == 5){
    //       value=1;
    //     }
    //   }
    // })
    // console.log('field',field)
  }

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === questionData.length - 1;

  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  // const handleChangeSlide = (i) => {
  //   console.log(i);
  //   if (currentSlide !== i) {
  //     setCurrentSlide(i);
  //   }
  // };

  if (isLoading) {
    return (
      <div className="mt-24 mb-44 flex items-center justify-center">
        <svg
          className="animate-spin"
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M70.3125 37.5C72.9013 37.5 75.0302 39.6068 74.7074 42.1755C73.922 48.4259 71.5705 54.4048 67.8381 59.5419C63.1833 65.9487 56.6198 70.7174 49.0881 73.1646C41.5565 75.6118 33.4435 75.6118 25.9119 73.1646C18.3802 70.7174 11.8167 65.9487 7.16186 59.5419C2.50706 53.1352 -6.9232e-07 45.4192 0 37.5C6.92321e-07 29.5808 2.50706 21.8648 7.16187 15.458C11.8167 9.05126 18.3802 4.28255 25.9119 1.83538C31.951 -0.126843 38.3639 -0.515692 44.5511 0.668833C47.0938 1.15561 48.4396 3.83133 47.6396 6.29346V6.29346C46.8396 8.75559 44.1938 10.0607 41.6331 9.68032C37.3538 9.04458 32.9634 9.40165 28.8089 10.7515C23.1602 12.5869 18.2375 16.1634 14.7464 20.9685C11.2553 25.7736 9.375 31.5606 9.375 37.5C9.375 43.4394 11.2553 49.2264 14.7464 54.0315C18.2375 58.8365 23.1602 62.4131 28.8089 64.2485C34.4576 66.0838 40.5424 66.0838 46.1911 64.2485C51.8398 62.4131 56.7625 58.8365 60.2536 54.0315C62.8212 50.4974 64.5175 46.4323 65.2353 42.166C65.6648 39.613 67.7237 37.5 70.3125 37.5V37.5Z"
            fill="url(#paint0_linear_2520_1075)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2520_1075"
              x1="0"
              y1="37.5"
              x2="75"
              y2="37.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFC033" />
              <stop offset="1" stopColor="#FF9900" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  return (
    <div className="my-28 mx-auto px-5 xl:container 2xl:container 3xl:max-w-screen-2xl">
      <div className="flex items-center justify-between">
        <button
          className={
            "mb-6 flex items-center " +
            (!isFirstSlide ? "display" : "invisible")
          }
          onClick={prevSlide}
        >
          <Image src={Arrow} alt="arrow" />
          <span className="ml-1 opacity-50">Back</span>
        </button>
        {!isLastSlide && (
          <button className="mb-6 flex items-center" onClick={nextSlide}>
            <span className="mr-1 mb-1 opacity-50">Next</span>
            <div className="rotate-180 -scale-y-100">
              <Image src={Arrow} alt="arrow" />
            </div>
          </button>
        )}
      </div>
      {/* set the initial value for all the answers to 0 then on submitting check if
      any element still have 0 as the answer then scroll to that element to
      select the answer */}
      <Formik
        initialValues={{
          answers: [
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
            "0",
          ],
        }}
        onSubmit={(values) => handleSubmit(values)} >
          {({ errors, values, touched, setValues }) => (
          <Form>
            <FieldArray name="answers">
              <Carousel
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                selectedItem={currentSlide}
              >
                {questionData.map((question, index) => {
                  return (
                    <Field
                      question={question}
                      currentSlide={currentSlide}
                      setCurrentSlide={setCurrentSlide}
                      isLastSlide={isLastSlide}
                      key={index}
                      label={question.Question}
                      name={`answers.${index}`}
                      component={AssessmentRadio}
                    />
                  );
                })}
              </Carousel>
            </FieldArray>
            <button
              type="submit"
              disabled={!isLastSlide}
              className={
                "mt-10 mr-4 rounded-xl bg-yellow bg-gradient-to-r from-yellow to-orange px-6 py-3 text-bodyTwo font-medium text-black duration-300 hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(255,192,51,0.5)] " +
                (isLastSlide
                  ? "cursor-pointer hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(255,192,51,0.5)]"
                  : "cursor-not-allowed opacity-50 hover:-translate-y-0 hover:shadow-none")
              }
            >
              Submit
            </button>
          </Form>
          )}
      </Formik>
    </div>
  );
};

export default AssessmentCarousel;
