import React, { Component } from 'react'
import me from './me.jpg'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";

import ContentPane from '../Components/ContentPane';
import ListMenu from '../Components/ListMenu/ListMenu';
import { SidebarElts } from '../Components/ListMenu/SidebarElts';
import SidebarMenu from '../Components/SidebarMenu';

export default class LinksPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Links"
        }
    }

    render() {
        return (
            <div className="ContentPane">
                <ListMenu title="Links!" className={"h2"} elements={[
                    <a href="https://www.linkedin.com/in/luca-b-42a358130/"> LinkedIn </a>,
                    <ListMenu title="child2" elements={["Instagram","Twitter","Facebook","LinkedIn"]}/>
                ]}/>
                {/* <ListMenu title="parent" elements={[
                    "Instagram",
                    "Twitter",
                    "Facebook",
                    "LinkedIn",
                ]}/> */}
            </div>
        )
    }
}
