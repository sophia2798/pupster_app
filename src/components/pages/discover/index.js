import React from "react";
import API from "../../../utils/API"
import './style.css'

class Discover extends React.Component {
    state = {
     dogImg:"",
     pupfriends:0,
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
      if(event.target.className === "btn btn-success like"){
         const oneInFive = Math.floor(Math.random() * Math.floor(5))
         if(oneInFive === 1){
            this.setState(prevState => {
            return {pupfriends: prevState.pupfriends + 1}
         })
         }
      }
      this.getDog()
    }
  
    render() {
      return (
        <div className="row">
          <div className="col">
            <h2>Make New Friends</h2>
            <h3>Thumbs up on any pups you'd like to meet!</h3>
            <img src={this.state.dogImg}/>
            <div className="buttons">
              <button type="button" onClick={this.handleClick} className="btn btn-success like">like</button>
              <button type="button" onClick={this.handleClick} className="btn btn-danger dislike">pass</button>
            </div>
            <h2>made friends with {this.state.pupfriends} pups so far</h2>
          </div>
        </div> 
      );
    }
  }
  
  export default Discover;
  