import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      bacon: 0,
      cheese: 0,
      meat: 0,
      salad: 0
    },
    purchasable: false,
    purchasing: false,
    totalPrice: 4
  }

  addIngredientHandler = (type) => {
    const updatedCount = this.state.ingredients[type] + 1
    const updatedIngredients = {...this.state.ingredients}
    updatedIngredients[type] = updatedCount;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type]
    });
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const updatedCount = this.state.ingredients[type] - 1
    if (updatedCount < 0) { return }
    const updatedIngredients = {...this.state.ingredients}
    updatedIngredients[type] = updatedCount;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type]
    });
    this.updatePurchaseState(updatedIngredients);
  }

  updatePurchaseState(updatedIngredients) {
    const ingredients = {...updatedIngredients}
    const sum = Object.keys(ingredients)
    .map((key) => {
      return ingredients[key];
    })
    .reduce((prevSum, count) => {
      return prevSum + count;
    }, 0);
    this.setState({purchasable: sum > 0})
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  purchaseContinueHandler = () => {
    alert('You Continued')
  }

  modalClosedHandler = () => {
    this.setState({ purchasing: false });
  }

  render() {

    const disabledInfo = {
      ...this.state.ingredients
    }

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.modalClosedHandler}>
          <OrderSummary
            cancel={this.modalClosedHandler}
            continue={this.purchaseContinueHandler}
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}></OrderSummary>
        </Modal>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls
          addIngredient={this.addIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          order={this.purchaseHandler}
          removeIngredient={this.removeIngredientHandler}></BuildControls>
      </Aux>
    );
  }

}

export default BurgerBuilder;
