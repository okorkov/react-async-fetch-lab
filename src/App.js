import React from 'react';

class App extends React.Component {


  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json').then(respone => respone.json()).then(data => {
      this.setState({
        people: data.people
      })
    })
  }

  render(){
    return (
      <div>This is app and I rendred </div>
    )
  }
}

export default App;