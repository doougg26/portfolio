import "./home.scss"
import githubImg from "../../assets/img/github_5968896.png"
import linkedinImg from "../../assets/img/linked-logo_4902396.png"
import mailImg from "../../assets/img/mail_6769426 (3).png"
import codeImg from "../../assets/img/pngwing.com (1).png"
import Botao from "../Botao"
export default function Home(){
    return(
        <main>
        <section className="ContainerConteudo">
        <div className="TextContainer">
            <span>Olá,</span>
            <h1>Eu sou o Douglas</h1>
            <span>Dev Front-end</span> 
            <Botao texto="Saiba Mais"/>
        </div> 
            
        <nav className="SocialMediaNav">
            <figure>
                <a href=""><img src={githubImg} alt="GitHub" />
                <figcaption>Github</figcaption></a>
            </figure>

            <figure>
                <a href=""><img src={linkedinImg} alt="LinkedIn" />
                <figcaption>LinkedIn</figcaption></a>
            </figure>
            <figure>
                <a href=""><img src={mailImg} alt="Email" />
                <figcaption>Email</figcaption></a>
            </figure>
        </nav>
        </section>

     
        
        <figure><img className="Illustration" src={codeImg} alt="ilustração" /></figure>
        </main>
    )
}