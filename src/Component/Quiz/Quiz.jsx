import React, { useState, useRef, useEffect } from 'react';
import './Quiz.css';
import { data } from '../../assets/data';

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const Option1 = useRef(null);
  const Option2 = useRef(null);
  const Option3 = useRef(null);
  const Option4 = useRef(null);

  const option_array = [Option1, Option2, Option3, Option4];

  useEffect(() => {
    setQuestion(data[index]);
  }, [index]);

  const check = (e, ans) => {
    if (!lock) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock) {
      if (index === data.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(prevIndex => prevIndex + 1);
      setLock(false);
      option_array.forEach(option => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  return (
    <div className='container'>
     
      {result ? (
        <>
          <h2>YOU SCORED {score} out of {data.length} </h2>
          <button onClick={reset}>Reset</button>
        </>
      ) : (
        <>
          <h2>{index + 1}. {question.question}</h2>
          <ul>
            <li ref={Option1} onClick={(e) => check(e, 1)}>{question.option1}</li>
            <li ref={Option2} onClick={(e) => check(e, 2)}>{question.option2}</li>
            <li ref={Option3} onClick={(e) => check(e, 3)}>{question.option3}</li>
            <li ref={Option4} onClick={(e) => check(e, 4)}>{question.option4}</li>
          </ul>
          <button onClick={next}>Next</button>
          <div className='index'>{index + 1} of {data.length}</div>
        </>
      )}
    </div>
  );
};

export default Quiz;
