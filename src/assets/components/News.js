import React, {Component} from 'react';
import axios from 'axios'
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Col, Row} from 'reactstrap'


class News extends Component {
    state = {
        articles : [],
        apiKey : "84a3f85c85454e37b95ef17bd25fdd1b"
    }
    componentDidMount(){
        const q = "education"
        const urlQuery ="http://newsapi.org/v2/everything?q=droit+à+education&from=2020-07-05&sortBy=publishedAt&apiKey="+this.state.apiKey+"&language=fr&qInTitle=education AND droit"
        axios.get(urlQuery)
            .then(res => {
                const news = res.data
                const articles = news.articles
                console.log(articles)
                this.setState({
                    articles: articles
                })

            })
    }
    render() {
        return (
            <div className="container" >
                <h1 className="text-center mt-4 mb-5">Dernieres actualités sur le droit à l'education</h1>
            <Row>
                {
                    this.state.articles.map((el, i) =>
                        <Col md={3}>
                            <Card>
                                <CardImg top width="50%" src={el.urlToImage} />
                                    <CardBody>
                                        <CardTitle><b>{el.title}</b> </CardTitle>
                                        <CardSubtitle> <i>Publié le {el.publishedAt}</i>  </CardSubtitle>
                                        <CardText>{el.content} </CardText>
                                        <a className="btn btn-primary" target="_blank" href={el.url}>Consulter</a>
                                    </CardBody>
                            </Card>
                        </Col>
                    )
                }
            </Row>

            </div>
        );
    }
}

export default News;