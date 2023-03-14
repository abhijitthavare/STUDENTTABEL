import React, { Component } from 'react'
import Users from './Users.jsx'
import JSON from "./users.json"

export default class App extends Component 
{ 
    constructor()
    {
        super()
        this.state={
         json:JSON
        }
    }
  render() {
    return (
      <>
      <Users data={this.state.json}/>
      </>
    )
  }
}

