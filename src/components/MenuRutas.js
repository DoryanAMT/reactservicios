import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>
                <a href='/'>home</a>
            </li>
            <li>
                <a href='/tabla/21'>tabla</a>
            </li>
            <li>
                <a href='/noexisto'>Sin ruta</a>
            </li>
        </ul>
      </div>
    )
  }
}
