import React from "react";
import Header from "../../components/commons/header.js";
import Footer from "../../components/commons/footer.js";
import { useRouter } from 'next/router'
import { route } from "next/dist/server/router";


const AssessmentResult = () => {

    const router = useRouter()
    const [answers,setAnswers] = React.useState([]);
    React.useEffect(()=>{
       if (router.isReady) 
       setAnswers(router.query.answers)
    },[router.isReady])
    // console.log('query',router.query.answers)
    let numbers = answers?.map((n) => {
      return parseInt(n, 10);
    });
    console.log('number',typeof(numbers));
    let sum =0;
    for(let num of numbers){
      sum+=num;
    }
    console.log(sum);
   let percentage =((sum/120)*100).toFixed(2); 
//    let average = (sum/24).toFixed(2);
  return(
  <>
    <Header />
    <div className="flex place-content-center">
    <div className="m-2 px-40 py-20 flex-col border-4 border-black border-solid rounded">
      <p className="text-8xl font-extrabold leading-8 border-b border-black border-solid">Result Card</p>
      <p className="text-8xl font-extrabold leading-8">Percentage scored</p>
      <div className="text-2xl font-extrabold leading-7">{percentage}%</div>
//       <p className="text-8xl font-extrabold leading-8">Average Score</p>
//       <div className="text-2xl font-extrabold leading-7">{average}</div>
    </div>
    </div>
    <Footer />
  </>
  );
}

export default AssessmentResult;
