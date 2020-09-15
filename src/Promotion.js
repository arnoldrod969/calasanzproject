import React from 'react';
import {Carousel} from "antd";
import Icon from "antd/es/icon";
import Target411 from "./Target41/Target411";
import Target412 from "./Target41/Target412";

class Promotion extends React.Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.carousel = React.createRef();
    }

    next() {
        this.carousel.next();
    }
    previous() {
        this.carousel.prev();
    }

    render() {
        const props = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <React.Fragment>
                {/*<div className="jumbotron">*/}
                {/*    <h1>Hello</h1>*/}
                {/*    <p>.....</p>*/}
                {/*    <p></p>*/}
                {/*</div>*/}
                <div className="container">
                    <Icon type="left-circle" onClick={this.previous} />
                    <Carousel ref={node => (this.carousel = node)} {...props}>
                        <div>
                            <Target411/>
                        </div>
                        <div>
                            <Target412/>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                    <Icon type="right-circle" onClick={this.next} />
                </div>
            </React.Fragment>

        );
    }
}

export default Promotion;