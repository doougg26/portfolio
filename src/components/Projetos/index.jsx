import { Link } from "react-router-dom"
import "./projetos.scss"
import {  BotaoSecundario } from "../Botao/BotaoPrimario"
import AdviceImg from "../../assets/img/advice1.jpg"
import CalcImg from "../../assets/img/calculadora.png"
import FantastikaImg from "../../assets/img/fantastika.png"
import InvernoImg from "../../assets/img/inverno.png"
import PeaceImg from "../../assets/img/peacewalker.png"
export default function Projetos(){
    return(
        <><main className="MainProjetos">
            <h1>Projetos</h1>
            <section className="ProjectsContainer">
                <div className="ConteudoProjetosContainer">
                    <h2>Calculadora React</h2>
                    <img src={CalcImg} alt="calculadora" />
                    <p>Esse é mais um desafio proposto no curso de formação Front END da escola Vai na Web. Nele trabalhamos componentização, styled components, useState e outros conceitos abordados durante o curso.</p>
                    <div className="ConntainerBotao"><Link to={link.calculadoraDeploy} target="_blank" >
                    <BotaoSecundario texto="Deploy"/></Link>
                    <Link to={link.calculadoraCode}>
                    <BotaoSecundario texto="Código"/></Link></div>
                </div>{/* 
                <div className="ConteudoProjetosContainer">
                    <h2>projeto2</h2>
                    <img src={AdviceImg} alt="projeto2" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae vitae nesciunt! Praesentium modi molestias pariatur eum corporis quasi, possimus ipsa vero magni repellat necessitatibus qui doloremque veritatis quam error!
                    Quia sequi repellendus assumenda voluptatum facere sunt, voluptas placeat saepe, quidem amet aut omnis culpa. Ipsa voluptatem, ipsum necessitatibus architecto nihil, nisi explicabo pariatur tenetur, odio expedita distinctio nulla ipsam.</p>
                    <div className="ConntainerBotao">
                    <Botao texto="Projeto Online"/>
                    <Botao texto="Código"/></div>
                </div>
                <div className="ConteudoProjetosContainer">
                    <h2>fantastika</h2>
                    <img src={FantastikaImg}alt="fantastika" />
                    <p>Esse é o desafio final do módulo 1 proposto no curso de formação Front END da escola Vai na Web. Nele trabalhamos CSS Flexbox entre outras disciplinas passadas durante o curso.</p>
                    <div className="ConntainerBotao">
                    <Botao texto="Projeto Online"/>
                    <Botao texto="Código"/></div>
                </div>
                <div className="ConteudoProjetosContainer">
                    <h2>Peace Walker Landing Page</h2>
                    <img src={PeaceImg} alt="Peace Walker" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae vitae nesciunt! Praesentium modi molestias pariatur eum corporis quasi, possimus ipsa vero magni repellat necessitatibus qui doloremque veritatis quam error!
                    Quia sequi repellendus assumenda voluptatum facere sunt, voluptas placeat saepe, quidem amet aut omnis culpa. Ipsa voluptatem, ipsum necessitatibus architecto nihil, nisi explicabo pariatur tenetur, odio expedita distinctio nulla ipsam.</p>
                    <div className="ConntainerBotao">
                    <Botao texto="Projeto Online"/>
                    <Botao texto="Código"/></div>
                </div>
                <div className="ConteudoProjetosContainer">
                    <h2>Landing Page Inverno</h2>
                    <img src={InvernoImg} alt="Inverno" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae vitae nesciunt! Praesentium modi molestias pariatur eum corporis quasi, possimus ipsa vero magni repellat necessitatibus qui doloremque veritatis quam error!
                    Quia sequi repellendus assumenda voluptatum facere sunt, voluptas placeat saepe, quidem amet aut omnis culpa. Ipsa voluptatem, ipsum necessitatibus architecto nihil, nisi explicabo pariatur tenetur, odio expedita distinctio nulla ipsam.</p>
                    <div className="ConntainerBotao">
                    <Botao texto="Projeto Online"/>
                    <Botao texto="Código"/></div>
                </div> */}

            </section>
        </main></>
    )
}
const link = {
fantastikaCode:'https://github.com/doougg26/Fantastika',
fantastikaDeploy:'https://doougg26.github.io/Fantastika/',
calculadoraCode:'https://github.com/doougg26/calculadora',
calculadoraDeploy:'https://calculadora-doougg26.vercel.app/'
  };