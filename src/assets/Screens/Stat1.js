import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from "react-router-dom";
import Target411 from "../components/Target41/Target411";
import Target412 from "../components/Target41/Target412";
import Target413 from "../components/Target41/Target413";
import Target414 from "../components/Target41/Target414";
import Target415 from "../components/Target41/Target415";
import Target416 from "../components/Target41/Target416";
import Target417 from "../components/Target41/Target417";


export class Stat1 extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <h1 className="text-center"> Education primaire et secondaire</h1>
                    <p>D'ici à 2030, veiller à ce que toutes les filles et tous les garçons achèvent un enseignement primaire et secondaire gratuit, équitable et de qualité menant à des résultats d'apprentissage pertinents et efficaces</p>
                <hr/>
                    <div className="text-justify">
                        <li><Link to={"/target411"}>Évaluations internationales de l'apprentissage à grande échelle des enfants et des jeunes</Link></li>
                        <li><Link to="/target412">Administration d'une évaluation des apprentissages représentative au niveau national</Link></li>
                        <li><Link to="/target413">Taux brut d'admission à la dernière année de l'enseignement primaire et du premier cycle du secondaire</Link></li>
                        <li><Link to="/target414">Taux d'achèvement (primaire, secondaire inférieur, secondaire supérieur)</Link></li>
                        <li><Link to="/target415">Taux de non-scolarisation (primaire, secondaire inférieur, secondaire supérieur)</Link></li>
                        <li><Link to="/target416">Pourcentage d'enfants ayant dépassé l'âge de la classe (primaire, premier cycle du secondaire)</Link></li>
                        <li><Link to="/target417">Nombre d'années d'enseignement primaire et secondaire (a) gratuit et (b) obligatoire garanti dans les cadres juridiques</Link></li>

                    </div>

                    <div className="mt-3">
                        <Route exact path="/target411" component={Target411}/>
                        <Route exact path="/target412" component={Target412}/>
                        <Route exact path="/target413" component={Target413}/>
                        <Route exact path="/target414" component={Target414}/>
                        <Route exact path="/target415" component={Target415}/>
                        <Route exact path="/target416" component={Target416}/>
                        <Route exact path="/target417" component={Target417}/>
                    </div>

                </div>

            </BrowserRouter>
        )
    }
}

export default Stat1
