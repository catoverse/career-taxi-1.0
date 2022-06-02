import React from "react";
import Header from "../../components/commons/header.js";
import Footer from "../../components/commons/footer.js";
import { useRouter } from "next/router";
import { route } from "next/dist/server/router";

const AssessmentResult = () => {
  const router = useRouter();
  const [answers, setAnswers] = React.useState([]);
  React.useEffect(() => {
    if (router.isReady) setAnswers(router.query.answers);
  }, [router.isReady]);
  // console.log('query',router.query.answers)
  let numbers = answers?.map((n) => {
    return parseInt(n, 10);
  });
  // console.log('number',typeof(numbers));
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  // console.log(sum);
  let percentage = ((sum / 120) * 100).toFixed(2);
  return (
    <>
      <Header />
      <div className="mt-20 mb-40 flex place-content-center">
        <div className="">
          <p className="text-headThree font-extrabold leading-8">
            Your Intrinsic Motivation Score:{" "}
            <span className="text-orange">{percentage}%</span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AssessmentResult;
