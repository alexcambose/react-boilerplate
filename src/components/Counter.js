import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';
import { counterDecrement, counterIncrement } from '../store/actions/user';

const Counter = ({ counter, increment, decrement }) => (
    <div className="counter">
        <button onClick={() => increment()}>+</button>
        <span>{counter}</span>
        <button onClick={() => decrement()}>-</button>
    </div>
);

Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
};

export default connect(
    state => ({
        counter: state.user.counter,
    }),
    dispatch => ({
        increment: () => dispatch(counterIncrement()),
        decrement: () => dispatch(counterDecrement()),
    }),
)(Counter);
