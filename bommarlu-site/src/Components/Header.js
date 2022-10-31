import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="Header">
            <h1>Luca Bommarito<br/></h1>
            <div>Mail Me: <span style={{color : "var(--blue)"}}>bommarlu@umich.edu</span>  | Text Me: <span style={{color : "var(--blue)"}}>408-458-0201</span></div>
        </div>
        )
    }
}
