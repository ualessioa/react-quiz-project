import LogoImg from "../assets/quiz-logo.png"

export default function Header(){
    return (
        <header>
            <img src={LogoImg} alt="Logo" />
            <h1>ReactQuiz</h1>
        </header>
    )
}