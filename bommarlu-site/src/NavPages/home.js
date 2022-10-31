import React, { Component } from 'react'
import me from './me.jpg'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";

import ContentPane from '../Components/ContentPane';
import TextBox from '../Components/ListMenu/TextBox';

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
                <h2>About Me</h2>
                <div className="ContentPaneBody">
                    <div className="Content">
                        <div>
                            <img src={me} alt="me" width={647 / 2} height={784 / 2} style={{
                                "background-color": "var(--yellow)",
                                "padding": "1em"
                            }} />
                        </div>
                        <div flex-direction="row">
                            <TextBox color={"var(--dark-grey)"} size={"1em"}
                                text={`
                                Hello! My name is Luca Bommarito. I'm currently a senior purusing Computer Science in the University of Michigan College of Engineering.
                               I am most comfortable with C++ and Python, though I have working to gain familiarity with javascript and golang for web applications and c# for Unity.
                            \n`}
                            />
                            <TextBox color={"var(--dark-grey)"} size={"1em"}
                                text={`
                                Within the field of computer science, I am mainly interested in machine learning applications, though I have also been learning more about programming for Virtual and Augmented Reality. 
                                `}
                            />
                            <TextBox color={"var(--dark-grey)"} size={"1em"}
                                text={`
                                I am most comfortable with C++ and Python, though I have working to gain familiarity with javascript and golang for web applications and c# for Unity.
                                `}
                            />
                        </div>


                    </div>

                </div>
            </div>
        )
    }
}
