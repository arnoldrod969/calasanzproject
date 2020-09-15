import React, {Component} from 'react';
import {BrowserRouter, Route, Link, NavLink} from "react-router-dom";
import Bibliotheque from "../Screens/Bibliotheque";
import Search from "../../Search";
import imagelaw from '../imagelaw.jpg'

class Jumbotron extends Component {
    render() {
        const styles = {
            background : `url(${imagelaw}) no-repeat fixed bottom`,
            backgroundSize : 'cover',
            position : `relative`,
            height : '250px'
        }
        return (
            <BrowserRouter>
             <div style={styles} className="jumbotron mb-0">
                <h1 className="text-dark font-weight-bold container">Bienvenue sur la bibliotheque de notre observatoire</h1>
            </div>
                <div className="bg-light">
                    <header className="navbar navbar-expand-lg navbar-light bg-light container">
                        <ul className="navbar-nav justify-content-around">
                            <b><NavLink to="/bibliotheque">
                                Textes de loi
                            </NavLink></b>
                            &nbsp; &nbsp; &nbsp;
                            <b><NavLink to="/bibliotheque/advanced">Recherche avançée</NavLink></b>
                        </ul>
                    </header>
                </div>
            <div className="container"><div >
                    <Route exact path="/bibliotheque" component={Bibliotheque}/>
                    <Route exact path="/bibliotheque/advanced" component={Search}/>
                </div>
            </div>
            </BrowserRouter>
        );
    }
}

export default Jumbotron;