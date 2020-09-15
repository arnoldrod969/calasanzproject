import React, {Component} from 'react';
import axios from 'axios'
import Results from "./Results";
import typeDocs from "./Documents";
import pays from "./Pays";


class Search extends Component {

    state = {
        query : "",
        searchInformation: {
            "searchTime": null,
            "totalResults":null
        },
        url : "https://www.googleapis.com/customsearch/v1/siterestrict?key=",
        items:[],
        doctype : "",
        countryQuery:"",
        searchTerms: "",
        count: null,
        startIndex: 1,
        nextPage: null,
        previousPage: null
    }
    handleChange = (e) => {
        this.setState({
            query : e.target.value
        })
    }
    handleChangeSelectDoc=(e)=>{
        this.setState({
            doctype : e.target.value
        })
    }
    handleChangeSelectcountry =(e) => {
        this.setState({
            countryQuery : e.target.value
        })
    }

    search =()=>{
        const exactTerms = this.state.countryQuery;
        let query = this.state.query ;
        const cx = "007671112563406955683:rxgrykxtlxw";
        const apikey = "AIzaSyDECrs2vAN6mEh5avNMSc8C-lPPDQm78PQ";
        let url = this.state.url +apikey+"&cx="+cx+"&q="+query+"&exactTerms="+exactTerms+"&orTerms="+this.state.doctype+""

        axios.get(url)
            .then(res=> {
                console.log(res.data.queries);
                this.setState({
                    count : res.data.queries.request[0].count,
                    items : res.data.items,
                    searchTerms : res.data.queries.request[0].searchTerms,
                    startIndex : res.data.queries.request[0].startIndex,
                    nextPage : ((res.data.queries.request[0].count === 10 ) ? res.data.queries.nextPage[0].startIndex : false ),
                    previousPage : ((res.data.queries.nextPage === true) ? res.data.queries.previousPage[0].startIndex : null)
            },
                    ()=>console.log(this.state.nextPage, this.state.previousPage))
            })
            .catch(err => alert("Désolé, il n'existe pas de resultats pour les termes de cette recherche!"))
    }

    render() {
        let next = this.state.count < 10 ?
            (this.state.items.map((item, i) => <React.Fragment key={i}>
                <a href={item.link}> {item.title} </a>
                <p> {item.snippet} </p>
            </React.Fragment>))
             :
        (<Results
                query={this.state.searchTerms}
                itemsSearchCompo={this.state.items}
                doc={this.state.doctype}
                country={this.state.countryQuery}
                nex={this.state.nextPage}
                prev={this.state.previousPage}
            />)
            return (
            <div>
                <div className="form-inline mb-3">
                    <label htmlFor="query"> Entrez un mot clé :</label>&nbsp;
                    <input className="form-control " onChange={this.handleChange} type="text" id="query"/>&nbsp;
                    <select onChange={this.handleChangeSelectDoc} value={this.state.doctype} className="form-control" id={"document"} >
                        <option disabled hidden value="">Choisissez votre document</option>
                        { typeDocs.map((doc, i)=> <option value={doc} key={i}>{doc}</option>) }
                    </select>&nbsp;
                    <select onChange={this.handleChangeSelectcountry} value={this.state.countryQuery} className="form-control" id={"country"} >
                        <option disabled hidden value="">Choisissez la region</option>
                        {
                            pays.map((pays, i)=>
                                <React.Fragment key={i}>
                                    <optgroup  label={pays.regionName}>
                                        { pays.region.map((p, index)=><option value={p} key={index}>{p}</option>) }
                                    </optgroup>
                            </React.Fragment>)
                        }
                    </select>&nbsp;
                    <button className="btn btn-primary" onClick={this.search} type="submit">Rechercher</button>
                </div>
                <div className="mt-4 w-75"> {next} </div>
            </div>
        );
    }
}

export default Search;