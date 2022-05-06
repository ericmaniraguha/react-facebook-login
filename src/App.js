import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  responseFacebook = (response) => {
    console.log(response);
    this.setState({ isLoggedIn: true });
  };

  render() {
    return (this.state.isLoggedIn ? 
      'Welcome to barefoot nomad'
    : (
      <div>
        <FacebookLogin
          appId='422842179578149'
          autoLoad={true}
          fields='name,email,picture'
          // onClick={componentClicked}
          callback={this.responseFacebook}
        />
      </div>)
    )
  }
}

export default App;
