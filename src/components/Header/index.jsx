import "./header.scss"
import Home from "../Home"
import Sobre from "../Sobre"
import Projetos from "../Projetos"
import Contatos from "../Contato"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <BrowserRouter>
                <nav className="HeaderNavbar" >
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/projetos">Projetos</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/projetos" element={<Projetos />} />
                    <Route path="/contato" element={<Contatos />} />
                </Routes>
            </BrowserRouter>
        </header>

    )
}