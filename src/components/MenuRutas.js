import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>
                <NavLink to='/'>home</NavLink>
            </li>
            <li>
                <NavLink to='/tabla/21'>tabla</NavLink>
            </li>
            <li>
                <NavLink to='/tabla/19'>tabla</NavLink>
            </li>
            <li>
                <NavLink to='/tabla/10'>tabla</NavLink>
            </li>
            <li>
                <NavLink to='/noexisto'>Sin ruta</NavLink>
            </li>
        </ul>
      </div>
    )
  }
}
