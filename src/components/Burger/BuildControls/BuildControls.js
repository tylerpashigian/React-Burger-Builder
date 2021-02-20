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
      {
        controls.map((type) => {
          return <BuildControl
            added={() => props.addIngredient(type.type)}
            key={type.label}
            label={type.label}></BuildControl>
        })
      }
    </div>
  );
}

export default buildControls;