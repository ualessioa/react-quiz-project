import { useCallback, useEffect, useState } from "react"

import QUESTIONS from "../questions.js"

import Question from "./Question.jsx";
import Summary from "./Summary.jsx";
Question

export default function Quiz(){

    const [answerSelected, setAnswerSelected] = useState([]);

    const activeQuestionIndex = answerSelected.length ;
    
    const isQuizOver = activeQuestionIndex === QUESTIONS.length

    useEffect(()=>{
    }, [activeQuestionIndex])



    const handleSelectAnswer = useCallback((selected) =>{
        setAnswerSelected((prevValue) => {
            
            return [
                ...prevValue,
                selected
            ]
        })
    
    }, [])

    const handleSkipAnswer = useCallback(() => {
        handleSelectAnswer(null)
    } ,[handleSelectAnswer])


    if (isQuizOver) {
        return(
            <Summary userAnswers={answerSelected} />
        )
    } else {
   
        return(
        <div className="" id="quiz">
            <Question key={activeQuestionIndex}  index={activeQuestionIndex}  onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}
            />
        </div>
       
    )
    }

    
}