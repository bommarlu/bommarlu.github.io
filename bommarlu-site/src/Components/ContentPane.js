import React, { Component } from 'react'
import Resume from '../NavPages/resume';
import Projects from '../NavPages/projects';
import Home from '../NavPages/home';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    Switch
} from "react-router-dom";
import LinksPage from '../NavPages/links';


export default class ContentPane extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Routes>
                <Route exact path="/Home" element={<Home />} />
                <Route exact path="/Resume" element={<Resume />} />
                <Route exact path="/Projects" element={<Projects />} />
                <Route exact path="/Links" element={<LinksPage />} />
            </Routes>
        )
    }
}
