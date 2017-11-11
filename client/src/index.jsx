import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';//Jquery or axios for requests
import Lister from './components/Lister.jsx';
import Item from './components/Item.jsx'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      IngredientList: [],
      DishList: [],
      ProductList: []
    }
  }
  
  render() {
    return (
      <div>
      <h2>Foodify</h2>
      <Lister ingreds = {this.state.IngredientList} dishes = {this.state.DishList}/>
      <AddItem/>
      <div> List Visualizer</div>
    </div>
    )
  }
}

ReactDOM(<App/>, document.getElementById('app'));