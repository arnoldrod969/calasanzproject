import React from 'react';
import { Link } from "react-router-dom";
import FreshNews from './FreshNews';
import Target411 from './Target41/Target411';
import Carousel from 'react-bootstrap/Carousel';
import Target412 from "./Target41/Target412";
import Target413 from "./Target41/Target413";
import Target414 from "./Target41/Target414";
import Target415 from "./Target41/Target415";

function Work() {
    return (
        <div>
            <nav aria-label="breadcrumb ">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={"/"}>Accueil</Link></li>
                    <li className="breadcrumb-item active" aria-current="page"><Link to={"/work"}>Notre travail</Link></li>
                    <li className="breadcrumb-item" ><Link to={"/about"}>A propos</Link></li>
                </ol>
            </nav>

            <div className="work-content">
                <div className="col-md-8 offset-2 ">
                    <h1 className="text-primary text-center">L'éducation transforme la vie</h1>
                    <p>L'éducation transforme les vies et elle est au cœur de la mission de l’UNESCO qui est de bâtir la paix, éradiquer la pauvreté et promouvoir le développement durable.

                    L'UNESCO considère que l'éducation est un droit humain pour tous, tout au long de la vie, et que l'accès à l’éducation va de pair avec la qualité. L'Organisation est le seul organe des Nations Unies ayant pour mission de traiter de l’éducation, sous tous ses aspects. Elle a reçu le mandat de conduire le Programme mondial Éducation 2030 par l’intermédiaire de l’Objectif de développement durable 4. La feuille de route pour y parvenir est le Cadre d’action (FFA) d’Éducation 2030.</p>

                </div>

            </div>

            <Carousel interval={null}>
                <Carousel.Item>
                    <Target411/>     
                </Carousel.Item>

                <Carousel.Item>
                    <Target412/>
                </Carousel.Item>

                <Carousel.Item>
                    <Target413/>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default Work
