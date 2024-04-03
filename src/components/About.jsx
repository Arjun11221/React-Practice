import React from 'react'
import UserClass from './UserClass'

class About extends React.Component{

  constructor(props){
    super(props);
  }
  componentDidMount(){
  }

  render(){
    return (
      <div>
        <h1>About Us</h1>
        <UserClass />
      </div>
    )
  }
}

export default About