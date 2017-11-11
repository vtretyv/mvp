import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryTerm: '',
    }
  }
  render(){
    return (
      <div> 
      Item Holder
      </div>
    )
  }
}