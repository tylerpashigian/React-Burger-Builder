import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

import classes from './Burger.css'

const burger = (props) => {

  let ingredients = Object.keys(props.ingredients)
    .map((key) => {
      return [...Array(props.ingredients[key])]
        .map((_, i) => {
          return (<BurgerIngredient key={key + i} type={key}></BurgerIngredient>);
        })
    })
    .reduce((prev, current) => {
      return prev.concat(current);
    }, []);

  if (ingredients.length === 0) {
    ingredients = <p>Add ingredients!</p>
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      {ingredients}
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
}

export default burger;