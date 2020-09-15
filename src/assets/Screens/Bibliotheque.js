import React, {Component} from 'react';
import axios from 'axios'

class Bibliotheque extends Component {
    state = {
        document:[],
        nature : [],
        pays:[],
        queryDoc : '',
        queryCountry : '',
        filteredResults :null
    }

    componentDidMount() {
       const pays = axios.get("https://calasanzapp.herokuapp.com/api/pays/")
       const document = axios.get("https://calasanzapp.herokuapp.com/api/document/")
       const nature = axios.get("https://calasanzapp.herokuapp.com/api/nature/")

       axios.all([pays, document, nature])
       .then(axios.spread((...res)=>
       {
        const country = res[0].data
        const doc = res[1].data
        const nat = res[2].data
        this.setState({
            pays : country,
            document : doc,
            nature : nat
        })
       })).catch(axios.spread((...err) => console.log(err)))

    }

    search =(e) => {
        const pays = axios.get("https://calasanzapp.herokuapp.com/api/pays/")
       const document = axios.get("https://calasanzapp.herokuapp.com/api/document/")
       const nature = axios.get("https://calasanzapp.herokuapp.com/api/nature/")

       axios.all([pays, document, nature])
       .then(axios.spread((...res)=>
       {
        const country = res[0].data
        const doc = res[1].data
        const nat = res[2].data
        this.setState({
            pays : country,
            document : doc,
            nature : nat
        })
        let resultSearch = this.state.document.map((k) => 
            {for(let p of this.state.pays.map(x => x)){
                for(let n of this.state.nature.map(y => y)){
                    for(let j of p.documents.map(d => d)){                           
                        if(j === k.id && k.nature === n.id){
                            if( n.type === this.state.queryDoc && p.pays === this.state.queryCountry){
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
                            else if(n.type === this.state.queryDoc && this.state.queryCountry === ""){
                                return(<React.Fragment key={k.id}>
                                    <tr>
                                        <td><a href={k.source}> {k.titre} </a></td>
                                        <td>{n.type}</td>
                                        <td> {k.auteur} </td>
                                        <td>{k.langue} </td>
                                        <td>{p.pays}</td>
                                    </tr>
                                </React.Fragment>)
                            }
                            else if(this.state.queryDoc === "" && p.pays === this.state.queryCountry){
                                return(<React.Fragment key={k.id}>
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
            }
        )
        
    
        // let finalResult = (this.state.queryDoc !== "" )? resultsDoc : ((this.state.queryCountry !== "") ? resultsCountry : alert("Veuillez choisir un element !!")) 

        this.setState({
            filteredResults : resultSearch
        })
        //    console.log("country =", country,"doc =", doc, " nature = ", nat)
       })).catch(axios.spread((...err) => console.log(err)))
       e.preventDefault()
    }

    handleChangeCountry =(e) => {
        this.setState({
            queryCountry : e.target.value
        })
    }

    handleChangeDoc = (e) => {
        this.setState({
            queryDoc : e.target.value,
        })
    }



    render() {

        let results = this.state.document.map((k) => 
            {for(let p of this.state.pays.map(x => x)){
                for(let n of this.state.nature.map(y => y)){
                    for(let j of p.documents.map(d => d)){                           
                        if(j === k.id && k.nature === n.id){
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

        return (
            <React.Fragment>
                <div className="container mt-4">
                    <form onSubmit={this.search} className="form-inline mb-4">
                        <select onChange={this.handleChangeDoc} value={this.state.queryDoc} className="form-control" >
                            <option value="" disabled>Choisir un document</option>
                            {
                                this.state.nature.map(
                                    (nat, i) => <React.Fragment key={i}>
                                        <option value={nat.type} > {nat.type} </option>
                                    </React.Fragment>
                                )
                            }
                        </select>
                        <select value={this.state.queryCountry} onChange={this.handleChangeCountry} className="form-control">
                            <option value="" disabled >Choisir un pays</option>
                            {
                                this.state.pays.map(
                                    (p, i)=> <React.Fragment key={i}>
                                <option value={p.pays}> {p.pays} </option>
                            </React.Fragment>)
                            }
                        </select>&nbsp;

                        <button className="btn btn-primary" type="submit">search</button>

                    </form>
                    <div>
                        <table className="table" >
                            <thead className="table-dark">
                            <tr>
                                <th scope="col"> Titre</th>
                                <th scope="col">Nature</th>
                                <th scope="col">Auteur</th>
                                <th scope="col">Langue</th>
                                <th scope="col">Pays</th>
                            </tr>
                            </thead>
                            <tbody>
                            {(this.state.filteredResults === null) ? results : this.state.filteredResults}
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>

        );
    }
}

export default Bibliotheque;