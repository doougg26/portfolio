import Botao from "../Botao"
import "./sobre.scss"
import HtmlIcon from "../../assets/img/html.png"
import CssIcon from "../../assets/img/css.png"
import JsIcon from "../../assets/img/js.png"
import ReactIcon from "../../assets/img/react.png"
import SassIcon from "../../assets/img/sass.png"
import GithubIcon from "../../assets/img/git.png"
import MyPhoto from "../../assets/img/eu.png"
export default function Sobre() {
    return (<>
        <main className="MainSobre">
            <section className="SobreContainer"
            ><h1>Sobre Mim</h1>
            <img src={MyPhoto} alt="eu" />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore assumenda, enim hic incidunt magni ab quisquam eos sed totam? Fugit minus officiis praesentium dolores ab voluptatem ipsam aut adipisci cupiditate?
                    Accusantium autem animi vero dolores quas fugit error iure assumenda quia rem id, et sapiente, neque at ipsa sint maiores ab. Repellat expedita maxime ipsam natus aliquam. In, maiores mollitia.
                    Ex id quo, voluptas enim laborum earum officia eveniet maiores eos repudiandae omnis quam reprehenderit fugiat ea rerum voluptates culpa debitis nemo laudantium assumenda! Exercitationem adipisci ad odio vitae vel!</p>
                    <Botao texto="Baixar Currículo"/>
                    </section>
            <section className="StackContainer">
                <h2>Tecnnologias</h2>
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