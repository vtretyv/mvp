import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

function Lister(props){
  return(
    <div>
    <div>You currently have {props.ingreds.length} ingredients saved.</div>
    <div>And {props.dishes.length} dishes saved </div>
    </div>
    )
}