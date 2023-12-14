import { Link } from "react-router-dom"
import "./sobre.scss"
import HtmlIcon from "../../assets/img/html.png"
import CssIcon from "../../assets/img/css.png"
import JsIcon from "../../assets/img/js.png"
import ReactIcon from "../../assets/img/react.png"
import SassIcon from "../../assets/img/sass.png"
import GithubIcon from "../../assets/img/git.png"
import MyPhoto from "../../assets/img/eu.jpg"
import { BotaoHome } from "../Botao/BotaoPrimario"
export default function Sobre() {

    return (<>
        <main className="MainSobre">
            <section className="SobreContainer"
            ><h1>Sobre Mim</h1>
            <img src={MyPhoto} alt="eu" />
                <p>Olá! Sou Douglas, um desenvolvedor front-end especializado em React, HTML, CSS e JavaScript.  Sou Formado Técnico em informática e graduando em Análise de sistemas e desenvolvimento. Tenho uma sólida experiência em atendimento ao público, aliado de um bom relacionamento interpessoal, adaptabilidade e criatividade. Tenho uma paixão por criar interfaces de usuário interativas e responsivas que proporcionam uma experiência incrível aos usuários. Com minha experiência e conhecimento em desenvolvimento web, estou sempre em busca das melhores práticas de design e desenvolvimento para entrega.</p>
                <Link to="/files/Currículo Douglas Corrêa Rodrigues (1).PDF" target="_blank" download>
                    <BotaoHome texto="Baixar Currículo"/></Link>
                    
                    </section>
            <section className="StackContainer">
                <h2>Competências</h2>
                <div className="Stack">
                    <img src={HtmlIcon} alt="html" />
                    <img src={CssIcon} alt="css" />
                    <img src={JsIcon} alt="js" />
                    <img src={ReactIcon} alt="react" />
                    <img src={SassIcon} alt="sass" />
                    <img src={GithubIcon} alt="git/github" />
                </div>
            </section>
        </main>
    </>)
}