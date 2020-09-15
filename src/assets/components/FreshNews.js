import React from 'react'
import {Link} from "react-router-dom";

function FreshNews({freshContents}) {
    console.log(freshContents)
    return (
        <div>
            <div className="container">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                {freshContents.map((content) => (
                                    <div className="col-md-4">
                                        <div className="card mb-4 shadow-sm">
                                            <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={content.image}/>
                                            <text className="text-center">{content.freshTitle}</text>

                                            <div className="card-body">
                                                <p className="card-text">{content.contents}</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                       <Link to={'/details/' + content._id}> <button type="button" className="btn btn-sm btn-outline-secondary">Consulter
                                                       </button> </Link>
                                                    </div>
                                                    <small className="text-muted">{content.postTime}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
            </div>

        </div>
    )
}

export default FreshNews