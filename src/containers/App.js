import React, { Component } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import ErrorBounbry from '../components/ErrorBoundry';


class App extends Component {
  constructor(){
    super();
    this.state = {
      robots: [],
      seachfield:'',
    }
  }
 

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>  response.json())
      .then(users =>this.setState({robots: users})); 
  }
  
  onSearchChange = (event) => { //搜尋 因為 function(){}是this指向input 所以要使用arrow function 讓htis指向app 
    const seachfield = event.target.value
    this.setState( { seachfield });
  }
  
  render() {
    const {robots, seachfield} = this.state;
    const filteredRobots = robots.filter((robot) =>{ //篩選名字有符合搜尋的機器人
      return robot.name.toLocaleLowerCase().includes(seachfield.toLocaleLowerCase());
    })
      return !robots.length ?
      <h1 className="tc">Loading</h1> :
        (
        <div className='tc'>
          <h1 className='f2'>Robot Friend</h1>
          <Searchbox 
            seachfield={ seachfield }
            searchChange={this.onSearchChange} 
            />
          <Scroll>
            <ErrorBounbry>
              <CardList robots={ filteredRobots } />
            </ErrorBounbry>
          </Scroll>  
        </div>
      );
  }  
}

export default App ;