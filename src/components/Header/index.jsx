import "./header.scss"
import Home from "../Home"
import Sobre from "../Sobre"
import Projetos from "../Projetos"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export default function Header() {
    return (
        <header>
            
            <BrowserRouter>
           
                <nav className="HeaderNavbar" >
               <figure>
                <img src="" alt="eu" />
            </figure>  
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/projetos">Projetos</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/projetos" element={<Projetos />} />
   
                </Routes>
            </BrowserRouter>
        </header>

    )
}