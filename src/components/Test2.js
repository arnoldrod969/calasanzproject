import React, { Component } from 'react'

export default class Test2 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             doc : this.props.doc,
             nat : this.props.nat,
             pays : this.props.pays
        }
    }
    search=(e)=> {
        let resultsDoc = this.props.doc.map((k) => 
            {for(let p of this.props.pays.map(x => x)){
                for(let n of this.props.nat.map(y => y)){
                    for(let j of p.documents.map(d => d)){                           
                        if((j === k.id && k.nature === n.id)&& n.type === this.props.queryDoc ){
                            return (<React.Fragment key={k.id}>
                                <tr>
                                    <td><a href={k.source}> {k.titre} </a></td>
                                    <td>{n.type}</td>
                                    <td> {k.auteur} </td>
                                    <td>{k.langue} </td>
                                    <td>{p.pays}</td>
                                </tr>
                            </React.Fragment>)
                            }
                        }  
                    }
                }
            }
        )

        let resultsCountry = this.props.doc.map((k) => 
            {for(let p of this.props.pays.map(x => x)){
                for(let n of this.props.nat.map(y => y)){
                    for(let j of p.documents.map(d => d)){                           
                        if((j === k.id && k.nature === n.id) && p.pays === this.props.queryCountry ){
                            return (<React.Fragment key={k.id}>
                                <tr>
                                    <td><a href={k.source}> {k.titre} </a></td>
                                    <td>{n.type}</td>
                                    <td> {k.auteur} </td>
                                    <td>{k.langue} </td>
                                    <td>{p.pays}</td>
                                </tr>
                            </React.Fragment>)
                            }
                        }  
                    }
                }
            }
        )
        let results = (this.props.queryDoc !== "" )? resultsDoc : ((this.queryCountry !== "") ? resultsCountry : alert("Veuillez choisir un element !!")) 
        return results
        e.preventDefault()
    }
    
    render() {

        // let resultsDoc = this.props.doc.map((k) => 
        //     {for(let p of this.props.pays.map(x => x)){
        //         for(let n of this.props.nat.map(y => y)){
        //             for(let j of p.documents.map(d => d)){                           
        //                 if((j === k.id && k.nature === n.id)&& n.type === this.props.queryDoc ){
        //                     return (<React.Fragment key={k.id}>
        //                         <tr>
        //                             <td><a href={k.source}> {k.titre} </a></td>
        //                             <td>{n.type}</td>
        //                             <td> {k.auteur} </td>
        //                             <td>{k.langue} </td>
        //                             <td>{p.pays}</td>
        //                         </tr>
        //                     </React.Fragment>)
        //                     }
        //                 }  
        //             }
        //         }
        //     }
        // )

        // let resultsCountry = this.props.doc.map((k) => 
        //     {for(let p of this.props.pays.map(x => x)){
        //         for(let n of this.props.nat.map(y => y)){
        //             for(let j of p.documents.map(d => d)){                           
        //                 if((j === k.id && k.nature === n.id) && p.pays === this.props.queryCountry ){
        //                     return (<React.Fragment key={k.id}>
        //                         <tr>
        //                             <td><a href={k.source}> {k.titre} </a></td>
        //                             <td>{n.type}</td>
        //                             <td> {k.auteur} </td>
        //                             <td>{k.langue} </td>
        //                             <td>{p.pays}</td>
        //                         </tr>
        //                     </React.Fragment>)
        //                     }
        //                 }  
        //             }
        //         }
        //     }
        // )

        // let results = (this.props.queryDoc !== "" )? resultsDoc : ((this.queryCountry !== "") ? resultsCountry : alert("Veuillez choisir un element !!")) 

        return (
            <div>
                <button type="submit" onClick={this.search} >search</button>
               {this.search}
            </div>
        )
    }
}
