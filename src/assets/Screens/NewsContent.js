import React from 'react'
import { Link } from 'react-router-dom';


function NewsContent(props) {
    const id = props.match.params.id;
    const info = {
        _id: 4,
        image: './img/u7.jpg',
        titre: 'titre 4',
        contenu: 'Contenu 3'
    };

    return (
        <div>

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={"/"}>Accueil</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Description</li>
                </ol>
            </nav>

            <div className="container">
                <div className="row">
                    <h1 className='jumbotron mb-3'>
                        L’UNESCO en collaboration avec l’ADEA et d’autres
                        partenaires lancent une enquête sur le personnel
                        de l’éducation de la petite enfance (EPE) durant le COVID-19 en Afrique subsaharienne
                    </h1>
                    <span>Publie le </span>
                    <div className="card mb-4 shadow-sm" id="card-photo">
                        <img className="bd-placeholder-img card-img-top" width="100%" height="500" src='../../img/4.jpg' alt="photo"/>
                    </div>

                    <p className="text-justify"> 
                        Le bureau de l'UNESCO à Dakar en collaboration avec l’ADEA et d’autres partenaires dans 48 pays d'Afrique subsaharienne ont lancé une enquête auprès du personnel chargé de l'éducation de la petite enfance (EPE) pendant la pandémie COVID-19. L'enquête vise à recueillir des données sur la façon dont les enseignants de la petite enfance, les assistants d'enseignement, les directeurs de centres de la petite enfance et d'écoles et les chefs d'établissement réagissent aux pressions liées à la pandémie, afin de comprendre les besoins du personnel d'éducation de la petite enfance et apprendre à les soutenir.

    Depuis mars 2020, date à laquelle le nouveau coronavirus, COVID-19, a été déclaré pandémie, les apprenants, les enseignants, les parents et toute la communauté éducative ont été gravement touchés. L'Institut de statistique de l'UNESCO (ISU) estime que plus de 1,2 milliard d'élèves ont été touchés dans le monde et que des écoles ont été fermées dans 150 pays.

    En Afrique subsaharienne, plus de 18,6 millions d'enseignants du pré-primaire ont été touchés par la pandémie. Les prestataires de l'enseignement pré-primaire doivent repenser leurs modalités d'enseignement et faire face à des défis sans précédent, tels que les problèmes de santé et de sécurité, le stress et la précarité de leur situation professionnelle. Les enseignants et les directeurs de centres sont confrontés à des questions sur la manière de dispenser une formation continue et de prodiguer des soins, tout en gérant la fermeture de leurs centres, souvent sans avoir reçu de formation préalable sur la manière d'utiliser les solutions d'enseignement à distance, ou l'utilisation des technologies de l'information. Ces préoccupations sont encore plus exacerbées par le statut vulnérable des prestataires et des éducateurs du pré-primaire au sein de la structure globale du personnel éducatif.

    Le Pôle de qualité inter-pays sur le développement de la petite enfance (PQIP-DPE) de l’Association pour le développement de l’éducation en Afrique (ADEA), le Réseau africain pour la petite enfance (AfECN), l'équipe de travail sur le Développement de la Petite Enfance et TALENT au sein du groupe de coordination régionale sur l’ODD4-Education 2030 pour l’Afrique de l'Ouest et du Centre (GRC4-AOC), l'OIT, l'UNESCO (y compris l'IIRCA), l'UNICEF et l'Organisation mondiale pour l'éducation préscolaire (OMEP) ont tous collaboré pour adapter une enquête sur le personnel de l'EPE qui avait été lancée à l'origine par l'UNESCO, l'UNICEF et d'autres partenaires dans la région Asie-Pacifique.

    Les résultats de l'enquête serviront à mieux comprendre les situations et les besoins du secteur de l'EPE et du personnel pour répondre aux besoins des enfants en matière d'éducation et de bien-être en temps de crise. L'équipe de travail sur le développement de la petite enfance au sein du GRC4-AOC prévoit d'organiser un webinaire pour présenter et discuter des résultats avec les parties prenantes régionales et publiera une note d'orientation pour présenter les principaux résultats.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default NewsContent
