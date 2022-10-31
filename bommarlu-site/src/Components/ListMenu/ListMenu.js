import { render } from '@testing-library/react';
import React from 'react'
import '../../App';
import menuIcon from './menuIcon.svg';
import SidebarItem from './SidebarItem';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

class ListMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: "",
      data: props.elements,
      isOpen: true,
      title: props.title,
      isSidebar: props.isSidebar,
      // sidebarItems: this.props.elements.map((val, key) => 
      //   <li 
      //   key={key} 
      //   className = "ListItem"
      //   onClick={this.handleClick}>
      //   <div id="title">{val.title}</div>
      //   </li>
      // ),

    };
    this.getContent = this.getContent.bind(this);
    this.closeAnimation = this.closeAnimation.bind(this);
    this.onAnimationEnd = this.onAnimationEnd.bind(this);
    this.onAnimationStart = this.onAnimationStart.bind(this);
  }

  getContent(val) {
    this.setState({
      active: val,
    });
  }

  closeAnimation(event) {
    event.stopPropagation();
    this.setState((state, props) => ({
      animation: state.isOpen ? "sidebarClose" : "sidebarOpen",
    }));
  }

  onAnimationStart(event) {
    event.stopPropagation();
    this.setState((state, props) => ({
      isOpen: state.isOpen ? false : true,
    }));
  };

  onAnimationEnd() {

  };

  render() {
    return (
      <div>
        <div className={`SidebarContainer ${this.state.animation}`}
          onAnimationEnd={this.onAnimationEnd}
          onAnimationStart={this.onAnimationStart}>
          <div className="SidebarHeader">
            <input type="button" value={this.state.isOpen ? "˅" : "˄"} onClick={this.closeAnimation} className="SidebarButton" />
            {this.state.title ? this.state.title : ""}
          </div>
          <div className={`Sidebar`}>
            <ul className="SidebarList" id={!this.state.isOpen ? "hidden" : ""}>
              {
                this.state.data.map((val) =>
                  this.state.isSidebar ?
                    <SidebarItem
                      key={val}
                      keyName={val}
                      className={`ListItem`}
                      title={val}
                      onClick={this.getContent.bind(this, val)}
                      id={val === this.state.active ? "active" : ""}
                    />
                    :
                    <li className={`ListItem`}>
                      {val}
                    </li>
                )
              }
            </ul>
          </div>
        </div>
      </div>

    )
  }
}

export default ListMenu