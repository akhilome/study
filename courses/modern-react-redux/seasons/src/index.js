import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './Spinner';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage) return <div>Error: {this.state.errorMessage}</div>

    return !this.state.lat ? <Spinner message='Please accept location request 🙏🏾' /> : <SeasonDisplay lat={this.state.lat} />
  }

  render() {
    return (
      <div className="awesome">{this.renderContent()}</div>
    );
  }
}
 
ReactDOM.render(<App />, document.querySelector('#root'));
