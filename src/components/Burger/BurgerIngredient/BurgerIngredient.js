import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './BurgerIngredient.css'

class BurgerIngredient extends Component {

  setIngredient = (type) => {

    let ingredient = null;

    switch (type) {
      case ('bacon'):
        ingredient = <div className={classes.Bacon}></div>
        break;
      case ('bread-bottom'):
        ingredient = <div className={classes.BreadBottom}></div>
        break;
      case ('bread-top'):
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        )
        break;
      case ('cheese'):
        ingredient = <div className={classes.Cheese}></div>
        break;
      case ('meat'):
        ingredient = <div className={classes.Meat}></div>
        break;
      case ('salad'):
        ingredient = <div className={classes.Salad}></div>
        break;
      default:
    }
    return ingredient;
  }

  render() {
    return this.setIngredient(this.props.type);
  }
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngredient;