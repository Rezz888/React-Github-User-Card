import React from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import UserCard from './Components/UserCard';



class App extends React.Component {
  constructor() {
    // initialize state here
    console.log("Constructor running");
    super();
    this.state = {
       userData: [],
       followersData: [],
       userFollowers: [],
       userFollowing: []
    };
  }

   componentDidMount(){
     console.log('CDM running')
     axios
     .get("https://api.github.com/users/Rezz888")
     .then(res => 
       this.setState({userData : res.data})
      //  console.log(this.state)
     )
     .catch(err=> console.log(err))

     axios
     .get("https://api.github.com/users/Rezz888/followers")
     .then((res) => {
      
      this.setState({followersData : res.data})
      // console.log(this.state.followersData)
     })
     
   }

   componentDidUpdate(prevProps, prevState){
    //  Just console.logging it, no data rendering from here
      if (prevState.userFollowers !== this.state.userFollowers) {
      console.log("render CDU")

      }

      if (prevState.userFollowing !== this.state.userFollowing) {
        console.log("render CDU2")
      }
   }

   fetchFollowers = () => {
     axios
       .get(`https://api.github.com/users/boudlalkarim/followers`)
       .then((res)=> {
         this.setState({userFollowers : res.data})
         console.log(this.state.userFollowers)
       })
       .catch((err) => console.log(err));
   }

   fetchFollowing = () => {
     axios
      .get(`https://api.github.com/users/boudlalkarim/following`)
      .then((res)=>{
        this.setState({userFollowing : res.data})
        console.log(this.state.userFollowing)
      })
      .catch((err) => console.log(err));
   }
  
  render(){
    console.log('App.js component rendering');
    return (
      <AppContainer>
      <div className="App">
        <div className="app-header">
          <h1 className="headline"> Github User Card</h1>
        </div>
        <Switch>
          <Route path='/'>
        <UserCard userData={this.state.userData} followersData={this.state.followersData} userFollowers={this.state.userFollowers} userFollowing={this.state.userFollowing} fetchFollowers={this.fetchFollowers} fetchFollowing={this.fetchFollowing} />
        </Route>
        </Switch>
      </div>
      </AppContainer>
    );
  }
  
}

const AppContainer = styled.div `
   background-color: #200000;
   max-width: 1300px;
   margin: 0 auto;
   width: 100%;

   .app-header {
     top: 0;
     width: 100%;
     height: 5rem;

    .headline {
      font-size: 4.5rem;
      backdrop-filter: brightness(40%);
      color: honeydew;
    }
    }

`

export default App;
