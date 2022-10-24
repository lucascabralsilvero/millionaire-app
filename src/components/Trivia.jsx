import React, { useEffect, useState } from 'react'

const Trivia = ({data, setTimeOut, questionNumber, setQuestionNumber }) => {

    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer")
    
    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    }, [data, questionNumber]);

    const handleClick = (ans) => {
            setSelectedAnswer(ans); 
            setClassName("answer active")
    }

  return (
    <div className='trivia'>
        <div className='question'>{question?.question}</div>
        <div className='answers'>
            {question?.answers.map((ans, idx) =>(
                <div key={idx} className={selectedAnswer === ans ? className : "answer" } onClick={ () => handleClick(ans)}>
                    {ans.text}
                </div>
            ) )}
        </div>
    </div>
  )
}

export default Trivia