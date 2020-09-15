import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from "react-router-dom";
import Target421 from "../components/Target42/Target421";
import Target422 from "../components/Target42/Target422";
import Target424 from "../components/Target42/Target424";
import Target425 from "../components/Target42/Target425";
import Target423 from "../components/Target42/Target423";

export class Stat2 extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className="container">
                        <h1 className="text-center"> Développement, soins et éducation préscolaire de la petite enfance de qualité</h1>
                        <p>D'ici à 2030, veiller à ce que toutes les filles et tous les garçons achèvent un enseignement primaire et secondaire gratuit, équitable et de qualité menant à des résultats d'apprentissage pertinents et efficaces</p>
                        <hr/>
                        <div className="text-justify">
                            <li><Link to={"/target421"}>Proportion d'enfants de moins de 5 ans dont le développement est en bonne voie en matière de santé, d'apprentissage et de bien-être psychosocial, par sexe</Link></li>
                            <li><Link to="/target422">
                                Taux de participation à l'apprentissage organisé (un an avant l'âge officiel d'entrée dans le primaire), par sexe</Link></li>
                            <li><Link to="/target423">
                                Pourcentage d'enfants de moins de 5 ans qui vivent des environnements d'apprentissage à domicile positifs et stimulants</Link></li>
                            <li><Link to="/target424">Taux brut de scolarisation dans l'enseignement préscolaire dans (a) l'enseignement préprimaire et (b) le développement de l'éducation de la petite enfance</Link></li>
                            <li><Link to="/target425">Nombre d'années d'enseignement préprimaire (a) gratuit et (b) obligatoire garanti dans les cadres juridiques</Link></li>

                        </div>

                        <div className="mt-3">
                            <Route exact path="/target421" component={Target421}/>
                            <Route exact path="/target422" component={Target422}/>
                            <Route exact path="/target423" component={Target423}/>
                            <Route exact path="/target424" component={Target424}/>
                            <Route exact path="/target425" component={Target425}/>

                        </div>

                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default Stat2
