import React from "react";
import API from "../../../utils/API"

class Discover extends Component {
    state = {
     
    };
    getDog =() =>{
        const dog = axios.get("https://dog.ceo/api/breeds/image/random")
        .then(res => this.setState({ results: res }))
        .catch(err => console.log(err));
      np
    }
  
    render() {
      return (
        <h1>Stuff</h1> 
      );
    }
  }
  
  export default discover;
  