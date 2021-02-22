import React from 'react';

import classes from './BuildControls.css'

import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
  { label: "Lettuce", type: "salad" }
]

const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
      {
        controls.map((type) => {
          return <BuildControl
            added={() => props.addIngredient(type.type)}
            disabled={props.disabled[type.type]}
            key={type.label}
            label={type.label}
            removed={() => props.removeIngredient(type.type)}></BuildControl>
        })
      }
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.order}>ORDER NOW</button>
    </div>
  );
}

export default buildControls;
