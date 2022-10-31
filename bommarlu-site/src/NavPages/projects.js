import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";

import ContentPane from '../Components/ContentPane';
import ListMenu from '../Components/ListMenu/ListMenu';

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
                <h2>Projects!</h2>  
                <ListMenu title="Projects!" elements={[,
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/QbxO9d6nHSA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/NtaXHY3I87M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                ]} />
            </div>
        )
    }
}
