import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";

import ContentPane from '../Components/ContentPane';

export default class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Resume"
        }
    }

    render() {
        return (
            <div className="ContentPane">
                <h2>Resume</h2> 
                <div className='ContentPaneBody'></div>
                <iframe style={{height:'100%'}} className="Content" src="https://docs.google.com/document/d/e/2PACX-1vRpMT068YuzP32wxuYcaLzB4x0tO3KlvZLq2ICERIwn-Zla5oLh_ufinjqC0bP7V6Ma-CDYX-jgklwJ/pub?embedded=true"></iframe>
            </div>
        )
    }
}
