import quizCompletedImg from "../assets/quiz-complete.png"
import QUESTIONS from "../questions.js"

export default function Summary({userAnswers}){

    const skipped = userAnswers.filter(answer => answer === null)
    const correct = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0])
    const wrong = userAnswers.filter((answer, index) => !!answer && answer !== QUESTIONS[index].answers[0])

    const skippedShare = Math.round((skipped.length / userAnswers.length) *100 )
    const correctShare = Math.round((correct.length / userAnswers.length )* 100)
    const wrongShare = Math.round((wrong.length / userAnswers.length) *100 )

    return (
        <div className="" id="summary">
            <img src={quizCompletedImg} alt="Trophy Icon" />
            <h2>Quiz Completed!</h2>
            <div className="" id="summary-stats">
                <p>
                    <span className="number">{skippedShare}%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{correctShare}%</span>
                    <span className="text">correct</span>
                </p>
                <p>
                    <span className="number">{wrongShare}%</span>
                    <span className="text">wrong</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) =>{
                    let cssClass = 'user-answer'

                    if (answer === null) {
                        cssClass += ' skipped'
                    } else if (answer === QUESTIONS[index].answers[0]){
                        cssClass += ' correct'
                    } else {
                        cssClass += ' wrong'
                    }
                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{QUESTIONS[index].text}</p>
                            <p className={cssClass}>{ answer ?? 'skipped'}</p>
                        </li>
                    )
                })}
                
            </ol>
        </div>
    )
}