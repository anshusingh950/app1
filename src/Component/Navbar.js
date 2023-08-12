import React , { useState } from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"
export default function Navbar(props) {
  
  
  let st0={
    height:'25px',
    width:'25px',
    backgroundColor:'rgb(255 255 255)',
    borderRadius:'50%',
    border:'2px solid red',
    margin:'3px'

  }
  let st01={
    height:'25px',
    width:'25px',
    backgroundColor:'rgb(0 0 0)',
    borderRadius:'50%',
    border:'2px solid red',
    margin:'3px'

  }
  let st1={
    height:'25px',
    width:'25px',
    backgroundColor:'rgb(117 189 117)',
    borderRadius:'50%',
    border:'2px solid red',
    margin:'3px'

  }
  let st2={
    height:'25px',
    width:'25px',
    backgroundColor:'#854179',
    borderRadius:'50%',
    border:'2px solid red',
    margin:'3px'
  }
  let st3={
    height:'25px',
    width:'25px',
    backgroundColor:'cyan',
    borderRadius:'50%',
    border:'2px solid red',
    margin:'3px'

  }
  let st4={
    height:'25px',
    width:'25px',
    backgroundColor:'yellow',
    borderRadius:'50%',
    border:'2px solid red',
    margin:'3px'

  }
  let myst1={
    borderBottom:'2px solid green',
    // setProperty('backgroundColor','rgb(199 199 117)','important')
    // backgroundColor:'rgb(213 213 197)',
    background:'linear-gradient(to right,red,pink,lime,crimson,purple,green,yellow,blue)'
  }

  
  return (
    <nav className={`navbar navbar-expand-lg navbar`} id='navbar'style={myst1}>
    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          {/* <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link> */}
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
        {/* <Link className="nav-link" to="/About">{props.abt} {props.ant}</Link> */}
          {/* <a className="nav-link" href="#">{props.abt} {props.ant}</a> */}
        </li>
        
      </ul>
      <button style={st0} onClick={props.toleMode0}></button>
      <button style={st01} onClick={props.toleMode01}></button>
      <button style={st1} onClick={props.toleMode1}></button>
      <button style={st2} onClick={props.toleMode2}></button>
      <button style={st3} onClick={props.toleMode3}></button>
      <button style={st4} onClick={props.toleMode4}></button>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}` }>
     
  <input className="form-check-input" onClick={props.toleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
      <form className="form-inline my-2 my-lg-0 mx-4">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
      
  )
}
Navbar.propTypes={title:PropTypes.string.isRequired,
    // isRequired indicated that it must be passed(although if default is  set,it will use default's value and will not throw error)
    abt:PropTypes.string,
    ant:PropTypes.number
}
Navbar.defaultProps={
    // It indicates that if not passed ,the following will set its value
    title:"Set Title Here",
    abt:"Set Default abt Here",
    ant:56
}