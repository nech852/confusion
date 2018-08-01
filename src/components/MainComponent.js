import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import  Menu from './MenuComponent';
import { DISHES } from '../shared/dishes.js';
import  DishSummary from './DishSummaryComponent' ;

class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
        dishes: DISHES
        };
    }

    onDishSelect(dishId){
        this.setState({ selectedDishId: dishId });
    }


  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick ={(dishId) => this.onDishSelect(dishId)} />
        <DishSummary dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDishId)[0]} />
      </div>
    );
  }
}

export default Main;
