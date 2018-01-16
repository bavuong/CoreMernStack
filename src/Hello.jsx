
import React, { PropTypes, Component } from 'react';

export default class Message extends Component {
  render() {
    return (
      <table>
          <tr>
              Hello  { this.props.name } 
              </tr>
              <tr>
             {this.props.fullName}
             </tr>
      
      </table>
      
    );
  }
}

