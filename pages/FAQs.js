"use client"
import React, { useState } from "react";

const FAQs = () => {
    const [active, setActive] = useState(null)


  const data = [{
      question: "What is this about?",
      answer: "This is an AI model",
    }, {
        question: "What is this about?",
        answer: "This is an AI model",
      },{
        question: "What is this about?",
        answer: "This is an AI model",
      },{
        question: "What is this about?",
        answer: "This is an AI model",
      },{
        question: "What is this about?",
        answer: "This is an AI model",
      },{
        question: "What is this about?",
        answer: "This is an AI model",
      },];

  const handleCollapse = (index) => {
    if(active === index){
        setActive(null)
    }else{
        setActive(index)
    }
  }

  return (
    <div className="faqs_page">
      <h2>FAQs About this AI model</h2>
      <div className="faqs_section">
        {data.map((ele, i) => {
          return <div className="faqs_item" key={i}>
            <span onClick={()=>handleCollapse(i)} >
            <p className="question">{ele.question}</p>
            <svg className={active === i ?"rotate_180": ""} xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 10 6" fill="none">
                <path d="M1 1.16667L4.66667 4.83333L8.33333 1.16667" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </span>
            {active === i && <p className="answer">{ele.answer}</p>}
          </div>;
        })}
      </div>
    </div>
  );
};

export default FAQs;
