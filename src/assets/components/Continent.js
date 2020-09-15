import React from 'react'
import {Link} from "react-router-dom";

function Continent({name, datas}) {
    console.log(datas)
    return (
        <div>
            <div className="container">
                <div className="text-left">
                    <h3 className="text-primary">{name}</h3>
                </div>
                <div className="row">
                    {datas.map((data) => (
                        <div className="col-md-3" key={data.id}>
                        <div className="jumbotron">
                            <Link to={'/details/' + data._id}> <img className="card-img-top" src={data.image} alt="image" /></Link>
                            <div className="jumbotron-title">
                                <h4 className="text-center">{data.titre}</h4>
                                <p className="text">{data.contenu}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default Continent
