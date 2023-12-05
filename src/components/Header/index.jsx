import "./header.scss"
import Home from "../Home"
import Sobre from "../Sobre"
import Projetos from "../Projetos"
import { useState } from "react"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export default function Header() {
    const [menu, setMenu] = useState()
    return (
        <header>

            <BrowserRouter>

                <nav className="HeaderNavbar" >
                    <button className="Menu"
                        onClick={() => setMenu(menu === "☰" ? "X" : "☰")} >
                        {menu}
                    </button>

                    {menu === "X" ?
                        <ul className="MenuList">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li><Link to="/sobre">Sobre</Link></li>
                            <li><Link to="/projetos">Projetos</Link></li>
                        </ul> : null
                    }
<h3> {'<D/>'} </h3>
                    <ul className="DefaultList">
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