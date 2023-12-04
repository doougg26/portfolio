import { Link } from "react-router-dom"
import "./home.scss"
import githubImg from "../../assets/img/github_5968896.png"
import linkedinImg from "../../assets/img/linked-logo_4902396.png"
import mailImg from "../../assets/img/mail_6769426 (3).png"
import codeImg from "../../assets/img/eu2.png"
import { BotaoHome } from "../Botao/BotaoPrimario"
export default function Home(){
    return(
        <main className="MainHome">
        <section className="ContainerConteudo">
        <div className="TextContainer">
            <span>Olá,</span>
            <h1>Eu sou o Douglas</h1>
            <span>Dev Front-end</span> 
            <Link to="/sobre"><BotaoHome texto="Saiba Mais"/></Link>
        </div> 
            
        <nav className="SocialMediaNav">
            <figure>
                <a href="https://github.com/doougg26"><img src={githubImg} alt="GitHub" />
                <figcaption>Github</figcaption></a>
            </figure>

            <figure>
                <a href="https://linkedin.com/in/dcorrea566/"><img src={linkedinImg} alt="LinkedIn" />
                <figcaption>LinkedIn</figcaption></a>
            </figure>
            <figure>
                <a href="mailto:dcorrea566@gmail.com"><img src={mailImg} alt="Email" />
                <figcaption>Email</figcaption></a>
            </figure>
        </nav>
        </section>

     
        
        <figure><img className="Illustration" src={codeImg} alt="ilustração" /></figure>
        </main>
    )
}