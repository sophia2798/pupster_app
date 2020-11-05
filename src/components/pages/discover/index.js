import React from "react";
import API from "../../../utils/API"

class Discover extends React.Component {
    state = {
     dogImg:"",
     pupfriends:0,
     click:""
    };
    
    componentDidMount() {
      this.getDog();
    }
    
    getDog =() =>{
        const dog = API.getRandomDog()
        .then(res => this.setState({dogImg:res.data.message}))
        .catch(err => console.log(err));
    }
    handleClick = (event) =>{
      if(event.target.className === "like"){
        // const oneInFive = Math.floor(Math.random() * Math.floor(5))
        // return 
      }
      this.setState({click:event.target.classNam })
    }
  
    render() {
      return (
        <div>
          <h2>Make New Friends</h2>
          <h3>Thumbs up on any pups you'd like to meet!</h3>
          <img src={this.state.dogImg}/>
          <h4 className="like" onClick={this.handleClick}>like</h4>
          <h4 className="dislike" onClick={this.handleClick}>dislike</h4>
          <h2>made friends with {this.state.pupfriends} pups so far</h2>
        </div> 
      );
    }
  }
  
  export default Discover;
  