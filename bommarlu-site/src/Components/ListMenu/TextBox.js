import React, { Component } from 'react'

export default class TextBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text,
            color: props.color,
            size: props.size,
        }
    }

    render() {
        return (
            <div className="TextBox" style={
                {
                    color: this.state.color,
                    "font-size": this.state.size
                }
            }>
                {this.state.text}
            </div>
        )
    }
}
