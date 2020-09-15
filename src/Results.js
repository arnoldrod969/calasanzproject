import React, {Component} from 'react';
import axios from "axios";


class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items : [],
            nextPage : this.props.nex,
            prevPage : this.props.nex - 10,
            startIndex : 1,
            exactTerms : this.props.country,
            orTerms : this.props.doc
        }
    }


    next=() => {
        let query = this.props.query;
        let start = this.state.nextPage;
        const exactTerms = this.state.exactTerms;
        const orTerms = this.state.orTerms;
        const cx = "007671112563406955683:rxgrykxtlxw";
        const apikey = "AIzaSyDECrs2vAN6mEh5avNMSc8C-lPPDQm78PQ";
        let url = "https://www.googleapis.com/customsearch/v1/siterestrict?key="+apikey+"&cx="+cx+"&q="+query+"&start="+start+"&exactTerms="+exactTerms+"&orTerms="+orTerms

        axios.get(url)
            .then(res=> {
                console.log(res.data.queries)
                this.setState({
                    nextPage : res.data.queries.nextPage[0].startIndex,
                    prevPage : res.data.queries.previousPage[0].startIndex,
                    startIndex : res.data.queries.request[0].startIndex,
                    items: res.data.items
                })
                console.log(res.data.queries, "n",this.state.nextPage, "p", this.state.prevPage);
            })
            .catch(err => console.log(err))
    }
    prev=() => {
        let query = this.props.query;
        let start = this.state.prevPage;
        const exactTerms = this.state.exactTerms;
        const orTerms = this.state.orTerms;
        const cx = "007671112563406955683:rxgrykxtlxw"
        const apikey = "AIzaSyDECrs2vAN6mEh5avNMSc8C-lPPDQm78PQ"
        let url = "https://www.googleapis.com/customsearch/v1/siterestrict?key="+apikey+"&cx="+cx+"&q="+query+"&start="+start+"&exactTerms="+exactTerms+"&orTerms="+orTerms

        axios.get(url)
            .then(res=> {
                this.setState({
                    prevPage : res.data.queries.previousPage[0].startIndex,
                    nextPage : res.data.queries.nextPage[0].startIndex,
                    startIndex : res.data.queries.request[0].startIndex,
                    items: res.data.items
                })
                console.log(res.data.queries, "n",this.state.nextPage, "p", this.state.prevPage)
            })
            .catch(err => console.log(err))
    }


    render() {
       let a = this.props.itemsSearchCompo.map((item, i)=> <React.Fragment key={i}>
            <a href={item.link}> {item.title} </a>
            <p> {item.snippet} </p>
        </React.Fragment>)

       let b = this.state.items.map((item, i)=> <React.Fragment key={i}>
           <a href={item.link}> {item.title} </a>
           <p> {item.snippet} </p>
       </React.Fragment>)
        let list = this.state.nextPage <= 11 ? a : b

        return (
            <div>
                <div>
                    {list}
                </div>
                <button type="submit" className="btn btn-outline-primary" onClick={this.next} >Suivant</button>
                {
                    this.state.startIndex ===1 ? '' :<button type="submit" className="btn btn-outline-primary"
                                               onClick={this.prev}>Précédent</button>
                }
            </div>
        );
    }
}

export default Results;