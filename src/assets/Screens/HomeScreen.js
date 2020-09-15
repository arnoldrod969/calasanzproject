import React, {Component} from 'react'
import ImageSlider from "../components/ImageSlider";
import FreshNews from "../components/FreshNews";
import Continent from "../components/Continent";
import ContactAndAsideBar from "../components/ContactAndAsideBar";
import Loading from "../components/Loading";

class HomeScreen extends Component{

    constructor(props) {
        super(props)

        this.state = {
            name: 'Afrique',
            datas: [],
            freshContents: [],
            email: '',
            loading: false
        }
    }

    handleLoadingState = loading => {
        this.setState({loading:loading});
    }

    handleSendEmail = email =>{
        console.log(email);
    }

    handleOnChangeEmail = email =>{
        this.state({
            email: email
        })
    }

    updateFreshNews(){
        let fresh =[
            {
                _id: 1,
                image: '/img/u1.jpg',
                freshTitle: "L'éducation transforme la vie",
                contents: "L'éducation transforme les vies et elle est au cœur de la mission de l’UNESCO qui est de bâtir la paix, éradiquer la pauvreté et promouvoir le développement durable.",
                
            },
            {
                _id: 2,
                image: '/img/u2.jpg',
                freshTitle: "Ministère de l'Education de Base du Cameroun: Accueil",
                contents: 'Content 2',
               
            },
            {
                _id: 3,
                image: '/img/u3.jpg',
                freshTitle: "L’UNESCO en collaboration avec l’ADEA et d’autres partenaires lancent une enquête sur le personnel de l’éducation de la petite enfance (EPE) durant le COVID-19 en Afrique subsaharienne",
                contents: 'Content 3',
               
            }
        ]
        this.setState({freshContents: fresh});
    }

    defaultValue() {

        let datas= [
            {
                _id: 1,
                image: './img/u4.jpg',
                titre: 'titre 1',
                contenu: 'Contenu 1'
            },
            {
                _id: 2,
                image: './img/u5.jpg',
                titre: 'titre 2',
                contenu: 'Contenu 2'
            },
            {
                _id: 3,
                image: './img/u6.jpg',
                titre: 'titre 3',
                contenu: 'Contenu 3'
            },
            {
                _id: 4,
                image: './img/u7.jpg',
                titre: 'titre 4',
                contenu: 'Contenu 3'
            },

        ]

        this.setState({datas:datas});
    }

    componentDidMount(){
        this.updateFreshNews()
        // Recuperer les donnees de lafrique
        this.defaultValue()
    }

    changeContinent = (e, index) => {
        e.preventDefault();
        if(index === 1) {
            // Recuperer les infos par defajut
            this.defaultValue()
        }

        if(index === 2) {
            // Recuperer les infos de l'europe
            let d = [
                {
                    _id: 11,
                    titre: 'titre 11',
                    contenu: 'Contenu 11'
                },
                {
                    _id: 21,
                    titre: 'titre 12',
                    contenu: 'Contenu 12'
                },
                {
                    _id: 13,
                    titre: 'titre 13',
                    contenu: 'Contenu 13'
                },
                {
                    _id: 14,
                    titre: 'titre 13',
                    contenu: 'Contenu 13'
                },
            ];

            this.setState({name: 'Europe', datas:d});
        }

        if(index === 3) {
            // Recuperer les infos de l'amerique
            let d = [
                {
                    _id: 31,
                    titre: 'titre 31',
                    contenu: 'Contenu 31'
                },
                {
                    _id: 32,
                    titre: 'titre 32',
                    contenu: 'Contenu 32'
                },
                {
                    _id: 33,
                    titre: 'titre 33',
                    contenu: 'Contenu 33'
                },
                {
                    _id: 34,
                    titre: 'titre 34',
                    contenu: 'Contenu 34'
                },
            ];

            this.setState({name: 'Amerique', datas:d});
        }

        if(index === 4) {
            // Recuperer les infos de l'asie'
            let d = [
                {
                    _id: 41,
                    titre: 'titre 41',
                    contenu: 'Contenu 41'
                },
                {
                    _id: 32,
                    titre: 'titre 42',
                    contenu: 'Contenu 42'
                },
                {
                    _id: 33,
                    titre: 'titre 43',
                    contenu: 'Contenu 43'
                },
                {
                    _id: 34,
                    titre: 'titre 45',
                    contenu: 'Contenu 45'
                },
            ];

            this.setState({name: 'Asie', datas:d});
        }
        console.log(index)
    }

    render() {
        return (
            <>
                <ImageSlider />

                <div className="container-fluid padding">
                    <div className="row welcome text-center">
                        <div className="col-12">
                            <h1 className="display-4">Actualité sur l'éducation à travers le monde</h1>
                        </div>
                    </div>
                    <hr />
                </div>

                <FreshNews freshContents={this.state.freshContents} />

                
                {/* <nav className="blog-pagination justify-content-center d-flex">
                    <ul className="pagination">
                        <li className="page-item">
                            <a href="#" className="page-link" aria-label="Previous">
                  <span aria-hidden="true">
                    <span className="fas fa-chevron-left"></span>
                  </span>
                            </a>
                        </li>
                        <li className={`page-item ${this.state.name==='Afrique' ? 'active' : ''}`}><a href="" className="page-link" onClick={(e) => this.changeContinent(e, 1)}>01</a></li>
                        <li className={`page-item ${this.state.name==='Europe' ? 'active' : ''}`}><a href="" className="page-link" onClick={(e) => this.changeContinent(e, 2)}>02</a></li>
                        <li className={`page-item ${this.state.name==='Amerique' ? 'active' : ''}`}><a href="" className="page-link" onClick={(e) => this.changeContinent(e, 3)}>03</a></li>
                        <li className={`page-item ${this.state.name==='Asie' ? 'active' : ''}`}><a href="" className="page-link" onClick={(e) => this.changeContinent(e, 4)}>04</a></li>
                        <li className="page-item">
                            <a href="#" className="page-link" aria-label="Next">
                  <span aria-hidden="true">
                    <span className="fas fa-chevron-right"></span>
                  </span>
                            </a>
                        </li>
                    </ul>
                </nav> */}
                {this.state.loading
                   ? <Loading message="Nous effectuons votre requte...."/>
                   : <ContactAndAsideBar email={this.state.email} handleOnChangeEmail={this.handleOnChangeEmail} handleSendEmail={this.handleSendEmail}/>
                }
             </>
        )
    }
}

export default HomeScreen
