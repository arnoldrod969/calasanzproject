import React from 'react'
import {BrowserRouter, Route, Link} from "react-router-dom";


function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/"><img src='/img/logo1.png' alt="logo"/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar navbar-dark bg-dark" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="navbar-item active">
                                <Link className="nav-link" to="/"> Accueil </Link>
                            </li>
                            {/*<li className="navbar-item">*/}
                            {/*    <Link className="nav-link" to={'/work/'}> Notre travail</Link>*/}
                            {/*</li>*/}
                            <li className="navbar-item">
                                <Link className="nav-link" to={'/bibliotheque/'}>Bibliothèque</Link>
                            </li>
                            <li className="nav-item submenu dropdown">
									<Link href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Module Statistiques</Link>
									<ul class="dropdown-menu bg-dark">
										<li className="nav-item"><Link className="nav-link" to={'/target_4.1/'}>Target 4.1</Link></li>
										<li className="nav-item"><Link class="nav-link" to={"/target_4.2"}>Target 4.2</Link></li>
									</ul>
								</li>
                            <li className="navbar-item">
                                <Link className="nav-link" to="/news">Actualités</Link>
                            </li>
                            <li className="navbar-item">
                                <Link className="nav-link" to={'/about/'}>A propos</Link>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Header

