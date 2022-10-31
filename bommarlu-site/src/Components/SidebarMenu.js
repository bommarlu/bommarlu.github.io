import { render } from '@testing-library/react';
import React from 'react'
import '../App';
import menuIcon from './ListMenu/menuIcon.svg';
import SidebarItem from './ListMenu/SidebarItem';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

class SidebarMenu extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      active: "Home",
      animation: "",
      data: props.elements,
      direction: props.direction,
      isOpen: true,
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

  closeAnimation() {
    console.log(this.state.isOpen);
    this.setState((state, props) => ({
      animation: state.isOpen ? "sidebarClose" : "sidebarOpen",
    }));
  }

  onAnimationStart() {
    this.setState((state, props) => ({
      isOpen: state.isOpen ? false : true,
    }));
    // this.setState({
    // });
  };

  onAnimationEnd() {

  };

  render() {
    return (
      <div className = {`SidebarContainer ${this.state.animation}`} 
          onAnimationEnd={this.onAnimationEnd}
          onAnimationStart={this.onAnimationStart}>
        <div>
        <input type="image" alt='menu' src={menuIcon} onClick={this.closeAnimation} className="SidebarButton" />
        </div>
        <div className= {`Sidebar`}>
          <ul className = "SidebarList" id={!this.state.isOpen ? "hidden" : ""}>
            {this.props.elements.map((val, key) => 
            <SidebarItem 
              key={key}
              keyName={key}
              className={`ListItem`} 
              title={val.title}
              onClick={this.getContent.bind(this, val.title)}
              id={val.title === this.state.active ? "active" : ""} 
            />
            // <li 
            // key={key} 
            // className = {`ListItem`}
            // onClick={this.getContent.bind(this, val.title)}
            // id={val.title === this.state.active ? "active" : ""}
            // >
            // <Link to={val.title} id="title">{val.title}</Link>
            // </li>
          )}
          </ul>
        </div>
      </div>
    )
  }
}

export default SidebarMenu