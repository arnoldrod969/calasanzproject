import React from 'react'

function ContactAndAsideBar() {
    return (
        <div>
            <div className="container-fluid padding">
                <div className="row welcome text-center">
                    <div className="col-12">
                        <h1 className="display-4">Contactez nous pour toutes suggestions</h1>
                    </div>
                </div>
                <hr/>
            </div>
            <div className='row'>
                <div className='col-md-8'>
                    <form className='blog_right_sidebar'>
                        <aside className="single-sidebar-widget newsletter_widget">
                            <h4 className="widget_title"> Contactez nous maintenant</h4>
                        </aside>
                        <div className="form-group d-flex flex-row">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Entrez votre adresse électronique ici"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea className="form-control" id="message" rows="2" placeholder="Saisissez votre message ici"></textarea>
                            <button type="button" className="btn btn-outline-success float-md-right" id="butt">Envoyez</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-4">
                    <div className="blog_right_sidebar">
                        <aside className="single-sidebar-widget newsletter_widget">
                        <h4 className="widget_title"> Souscrire à notre Newsletter</h4>
                        <p>
                            Ici, je me concentre sur une gamme d'articles et de fonctionnalités que nous utilisons dans la vie sans y réfléchir.
                        </p>
                        <div className="form-group d-flex flex-row">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </div>
                                </div>

                                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Entrez l'email" />
                            </div>
                            <a href="#" className="bbtns">Souscrire</a>
                        </div>
                        <p className="text-bottom">Vous pouvez vous desabonner à tout moment</p>
                        <div className="br"></div>
                    </aside>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactAndAsideBar
