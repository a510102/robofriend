import React, {Component} from 'react';
import CountButton from './CounterButton';

class Header extends Component {
//  shouldComponentUpdate(nextProps, nextState){
//   return true;
//  }
  render() { 
    console.log('header');
    return (
      <div>
        <h1 className='f2'>Robot Friend</h1>
        <CountButton color={'red'} />
      </div>
      
    ) 
  }
}

export default Header;