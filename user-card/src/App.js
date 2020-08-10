import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './Components/UserCard';


class App extends React.Component {
  constructor(){
    console.log("Constructor")
    super();
    this.state = {
       user: []
    };
  }

   componentDidMount(){
     console.log('CDM running')
     axios
     .get("https://api.github.com/users/Rezz888")
     .then((res)=>{
       this.setState({user : res.data});
       console.log(this.state)
     })
     .catch((err)=>{
       console.log(err)
     })
   }
  
  render(){
    console.log('Render')
    return (
      <div className="App">
        <header className="App-header">
          <h1> Github User Card</h1>
        </header>
        <UserCard user={this.state.user}/>
      </div>
    );
  }
  
}

export default App;
