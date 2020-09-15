import React from 'react'
import { Link } from "react-router-dom";

function About() {
    return (
        <div>
            <nav aria-label="breadcrumb ">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={"/"}>Accueil</Link></li>
                    <li className="breadcrumb-item"><Link to={"/work"}>Notre travail</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">A propos</li>
                </ol>
            </nav>

            <div className="container">
                <div className="row">
                    <div className="col-md-8" id="text-container">
                        <div className="grid_8 mb-5">
                            <h1 className="titre">Qui sommes-nous et que faisons-nous?</h1>
                        </div>
                        <p className="text-justify">L’ADEA est avant tout un forum de dialogue sur les politiques éducatives et un véritable partenariat entre les ministres africains de l’éducation et de la formation et leurs partenaires techniques et financiers.

                        Fondée en 1988 à l’instigation de la Banque mondiale, elle a évolué pour devenir aujourd’hui une institution panafricaine basée en Afrique au sein de la Banque africaine de développement (BAD).

                        L’ADEA est aussi un réseau de décideurs, d’éducateurs et de chercheurs et, de par sa capacité à promouvoir le dialogue politique et à mutualiser les réflexions, les expériences, les enseignements tirés et les savoirs, un catalyseur pour les réformes de l’éducation. Elle est reconnue aujourd’hui comme un acteur important dans les processus de dialogue, de partage et d’apprentissage pour la transformation qualitative de l’éducation au service du développement de l’Afrique.

                            sL’un des principes qui sous-tendent la philosophie de l’ADEA est que la responsabilité du développement de l’éducation incombe aux gouvernements des pays africains. C’est pourquoi l’ADEA s’efforce d’encourager un processus qui responsabilise pleinement les ministères africains de l’éducation et familiarise les agences de développement avec le concept d’appropriation nationale. Les activités de l’ADEA permettent de renforcer le dialogue politique entre les gouvernements et les agences, entre les gouvernements, et entre les agences de développement. Elles visent également à développer les capacités institutionnelles et techniques en Afrique en établissant des réseaux d’échange d’informations et en diffusant les stratégies et les innovations réussies. Toujours dans cet esprit, l’ADEA encourage les échanges régionaux, sous-régionaux et transnationaux ainsi que les partenariats avec la société civile</p>
                    </div>


                    <div className="col-md-4">
                        <div className="row">
                            <div className="vision mb-2">
                                <aside>
                                    <h4 className="vision_title"> Notre vision</h4>
                                    <hr />
                                    La coopération politique et économique des gouvernements ne suffit pas à assurer l’adhésion durable et sincère des peuples. La paix doit être fondée sur le dialogue, la compréhension mutuelle ainsi que la solidarité intellectuelle et morale de l'humanité.

                                    Dans cet esprit, que notre equipe développe des outils éducatifs pour aider chaque individu à vivre en tant que citoyen du monde.
                                </aside>
                            </div>

                            <div className="vision mb-5">
                                <aside>
                                    <h4 className="vision_title"> Notre mission</h4>
                                    <hr />
                                    Servir d’institution panafricaine ouverte et flexible qui informe et facilite la transformation de l’éducation, en vue de faire avancer le développement accéléré et durable de l’Afrique
                            </aside>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            <div className="col-md-8 offset-2">

                <div className="col-md-12" id="text-container" ml="20%">
                    <div className="grid_8 mb-5">
                        <h1 className="text-center titre" >A propos des auteurs</h1>
                    </div>
                    <p className="text-justify">Cette plateforme a été mis sur pied par une jeune equipe dynamique et soucieux du devenir des jeunes citoyens camerounais et du monde </p>
                </div>


                <div className="row">
                            <div className="col-md-4">
                                <img className="author_img rounded-circle" src="../../img/pat.png"></img>
                                <h4 className="text-center">NGUEMETE Franck</h4>
                                <p className="text-justify">Co-fondateur de la plateforme</p>
                            </div>

                            <div className="col-md-4">
                                <img className="author_img rounded-circle" src="../../img/pat.png"></img>
                                <h4 className="text-center">PATANGA Rodrigue</h4>
                                <p className="text-justify">Co-fondateur de la plateforme</p>
                            </div>

                            <div className="col-md-4 mb-5">
                                <img className="author_img rounded-circle" src="../../img/pat.png"></img>
                                <h4 className="text-center">ISSOFA Youssouf</h4>
                                <p className="text-justify">Co-fondateur de la plateforme</p>
                            </div>
                        </div>
                    </div>

        </div>
    )
}

export default About
