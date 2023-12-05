import { Link } from "react-router-dom"
import "./projetos.scss"
import { BotaoSecundario } from "../Botao/BotaoPrimario"
import AdviceImg from "../../assets/img/advice1.jpg"
import CalcImg from "../../assets/img/calculadora.png"
import FantastikaImg from "../../assets/img/fantastika.png"
import InvernoImg from "../../assets/img/inverno.png"
import PeaceImg from "../../assets/img/peacewalker.png"
export default function Projetos() {
    return (
        <>
            <main className="MainProjetos">
                <h1>Projetos</h1>
                <section className="ProjectsContainer">
                    <div className="ConteudoProjetosContainer">
                        <h2>Calculadora React</h2>
                        <img src={CalcImg} alt="calculadora" />
                        <p>Esse é mais um desafio proposto no curso de formação Front END da escola Vai na Web. Nele trabalhamos componentização, styled components, useState e outros conceitos abordados durante o curso.</p>
                        <div className="ConntainerBotao">
                            <Link to={link.calculadoraDeploy} target="_blank" >
                                <BotaoSecundario texto="Deploy" />
                            </Link>
                            <Link to={link.calculadoraCode} target="_blank">
                                <BotaoSecundario texto="Código" />
                            </Link>
                        </div>
                    </div>
                    <div className="ConteudoProjetosContainer">
                        <h2>Fantastika</h2>
                        <img src={FantastikaImg} alt="fantastika" />
                        <p>Esse é o desafio final do módulo 1 proposto no curso de formação Front END da escola Vai na Web. Nele trabalhamos CSS Flexbox entre outras disciplinas passadas durante o curso.</p>
                        <div className="ConntainerBotao">
                            <Link to={link.fantastikaDeploy} target="_blank" >
                            <BotaoSecundario texto="Deploy" />
                            </Link>
                            <Link to={link.fantastikaCode} target="_blank">
                                <BotaoSecundario texto="Código" />
                                </Link>
                                </div>
                    </div>
                    <div className="ConteudoProjetosContainer">
                        <h2>Peace Walker Landing Page</h2>
                        <img src={PeaceImg} alt="Peace Walker" />
                        <p>Essa é uma landing page sobre o jogo Metal Gear Solid: Peace Walker baseada em um projeto do Dev em dobro. Nele trabalhamos conceitos como construção de layouts, design responsivo e CSS Flexbox.</p>
                        < div className="ConntainerBotao"><Link to={link.peaceDeploy} target="_blank" >
                            <BotaoSecundario texto="Deploy" /></Link>
                            <Link to={link.peaceCode} target="_blank">
                                <BotaoSecundario texto="Código" /></Link></div>
                    </div>
                    <div className="ConteudoProjetosContainer">
                        <h2>Landing Page Inverno</h2>
                        <img src={InvernoImg} alt="Inverno" />
                        <p>Esse é o terceiro desafio proposto no curso de formação Front END da escola Vai na Web. Nele trabalhamos CSS Flexbox entre outras disciplinas passadas durante o curso.</p>
                        <div className="ConntainerBotao">
                            <Link to={link.invernoDeploy} target="_blank" >
                                <BotaoSecundario texto="Deploy" /></Link>
                            <Link to={link.invernoCode} target="_blank">
                                <BotaoSecundario texto="Código" /></Link></div>
                    </div>
                    <div className="ConteudoProjetosContainer">
                        <h2>Gerador de Conselhos(Advice Generator)</h2>
                        <img src={AdviceImg} alt="projeto2" />
                        <p>Desafio proposto pelo site front end mentor. nele, trabalhamos com requisições de API.
                        </p>
                        <div className="ConntainerBotao">
                            <Link to={link.adviceDeploy} target="_blank" >
                                <BotaoSecundario texto="Deploy" />
                            </Link>
                            <Link to={link.adviceCode} target="_blank">
                                <BotaoSecundario texto="Código" />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
const link = {
    fantastikaCode: 'https://github.com/doougg26/Fantastika',
    fantastikaDeploy: 'https://doougg26.github.io/Fantastika/',
    calculadoraCode: 'https://github.com/doougg26/calculadora',
    calculadoraDeploy: 'https://calculadora-doougg26.vercel.app/',
    adviceCode: 'https://github.com/doougg26/advice-generator-app-main',
    adviceDeploy: 'https://doougg26.github.io/advice-generator-app-main/',
    peaceCode: 'https://github.com/doougg26/peace-walker',
    peaceDeploy: 'https://doougg26.github.io/peace-walker/',
    invernoCode: 'https://github.com/doougg26/Desafio03-Inverno-VNW',
    invernoDeploy: 'https://doougg26.github.io/Desafio03-Inverno-VNW/'

};