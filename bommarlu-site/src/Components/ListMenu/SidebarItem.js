import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
  
export default function SidebarItem(props) {
  return (
    <li 
        key={props.keyName}
        className = {props.className}
        onClick={props.onClick}
        id={props.id}
        >
        <Link to={props.title} id="title">{props.title}</Link>
    </li>
  )
}
