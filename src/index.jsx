import React from 'react';
import { render } from 'react-dom';
import Message from './Hello.jsx';

class App extends React.Component {
 
 constructor (props){
     super(props)
     this.state = {
         name:'boyka',
         fullName:'Bá Vương'
        }
 }
  onChange(e)
  {
      this.setState({name:e.target.value});
  
  }
  changeFullName(e)
  {
    this.setState({fullName:e.target.value});
  }
    render() {
    return (
      <div>
      <input type='text'onChange={this.onChange.bind(this)} />
      <input type='text'onChange={this.changeFullName.bind(this)} />
      <Message name={this.state.name} fullName ={this.state.fullName}/>
      </div>
    );
  }
}
//app.js

console.log('run react js');
render(<App />, document.getElementById('app'));