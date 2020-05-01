import React, {Component} from 'react';

class ErrorBounbry extends Component{
  constructor(props) {
    super(props);
    this.state = {
      hasError : false,
    }
  }

  compontentDidCatch(error, info){
    this.setState({hasError: true})
  }

  render() {
    if(this.state.hasError) {
      return <h1>Ooooops. that is not good</h1>
    }
    return this.props.children;
  }
}

export default ErrorBounbry;