import React from "react";
import API from "../../utils/API";
import App from '.App';

class discover extends Component {
    state = {
     
    };
    getDog =() =>{
        API.search(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
    }
  
    render() {
      return (
        <h1>Stuff</h1> 
      );
    }
  }
  
  export default discover;
  