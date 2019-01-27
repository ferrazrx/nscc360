import React, { Component } from 'react'

export default class VR extends Component {
  render() {
    return (
      <div>
        <iframe className="w-100 border-0 shadow"  height="450" src="http://localhost:8081/index.html"></iframe>
      </div>
    )
  }
}
