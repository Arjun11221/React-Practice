import React from "react";
import { GITHUB_API } from "../utils/constant";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo : {
                name: "Dummy",
                city : "Default",
                avatar_url : "http://abc.com"
            }
        }
    }
    async componentDidMount(){
        const data = await fetch(GITHUB_API);
        const json = await data.json();
        this.setState({
            userInfo : json
        })
        
    }

    render(){
        const {name, location, avatar_url} = this.state.userInfo;
        return <div>
            <h1>Name : {name}</h1>
            <h2>City : {location}</h2>
            <img src={avatar_url} alt="abc" />
        </div>
    }
}

export default UserClass;