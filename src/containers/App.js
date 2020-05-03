import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header'
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { setSearchField, requestRobots } from '../action';

//從redux取得資料

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  }
}

//從compontent Dispatch資料上redux改變它

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: ()=>dispatch(requestRobots())
  }
}

class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }
  
  render() {
    const { robots, searchField, onSearchChange, isPending } = this.props;
    const filteredRobots = robots.filter((robot) =>{ //篩選名字有符合搜尋的機器人
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
      return !isPending ?
      <h1 className="tc">Loading</h1> :
        (
        
        <div className='tc'>
          <Header />
          <Searchbox 
            seachfield={ searchField }
            searchChange={onSearchChange} 
            />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={ filteredRobots } />
            </ErrorBoundry>
          </Scroll>  
        </div>
      );
  }  
}

export default connect(mapStateToProps, mapDispatchToProps)(App) ;