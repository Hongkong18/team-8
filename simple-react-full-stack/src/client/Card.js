import React, {Component} from 'react';

export default class Card extends Component {
    render () {
        return (
            <div style={{
                "border":"2px solid #000000",
                "border-radius": "5px",
                "padding":"10px",
                "margin-bottom":"20px",
                "background":"#F8F8FF"
            }}>
                    <h2>{this.props.name}</h2> <br />
                    <h4>{this.props.address}</h4> <br />
                    <h5>Phone: {this.props.phone}</h5>
            </div>
        )
    }
}