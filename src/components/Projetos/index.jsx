import "./projetos.scss"
import Botao from "../Botao"
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae vitae nesciunt! Praesentium modi molestias pariatur eum corporis quasi, possimus ipsa vero magni repellat necessitatibus qui doloremque veritatis quam error!
                    Quia sequi repellendus assumenda voluptatum facere sunt, voluptas placeat saepe, quidem amet aut omnis culpa. Ipsa voluptatem, ipsum necessitatibus architecto nihil, nisi explicabo pariatur tenetur, odio expedita distinctio nulla ipsam.</p>
                    <div className="ConntainerBotao">
                    <Botao texto="Projeto Online"/>
                    <Botao texto="Código"/></div>
                </div>
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae vitae nesciunt! Praesentium modi molestias pariatur eum corporis quasi, possimus ipsa vero magni repellat necessitatibus qui doloremque veritatis quam error!
                    Quia sequi repellendus assumenda voluptatum facere sunt, voluptas placeat saepe, quidem amet aut omnis culpa. Ipsa voluptatem, ipsum necessitatibus architecto nihil, nisi explicabo pariatur tenetur, odio expedita distinctio nulla ipsam.</p>
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
                </div>

            </section>
        </main></>
    )
}