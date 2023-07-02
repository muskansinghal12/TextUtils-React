import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`} style = {{color: props.mode === 'dark'?'white':'black'}} >
  <div className="container-fluid" >
    <a className="navbar-brand" href="#" style = {{color: props.mode === 'dark'?'white':'black'}}>{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" style = {{color: props.mode === 'dark'?'white':'black'}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" style = {{color: props.mode === 'dark'?'white':'black'}}>{props.aboutTitle}</a>
        </li>
      </ul>
      
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" onClick = {props.toggle} id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'dark'?'light':'dark'} mode</label>
      </div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutTitle : PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: "Set Title Text Here",
    aboutTitle : "Set About title here"
}
