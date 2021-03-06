import React from 'react';

import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.css'

const modal = (props) => (
  <Aux>
    <Backdrop
      clicked={props.modalClosed} 
      show={props.show}/>
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(100vh)',
        opactiy: props.show ? '1' : '0'
      }}>
      {props.children}
    </div>
  </Aux>
);

export default modal;
