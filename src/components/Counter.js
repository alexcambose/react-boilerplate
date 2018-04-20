import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'proptypes';
import { counterDecrement, counterIncrement } from '../redux/actions/user';

const Counter = ({ counter, increment, decrement, children }) => (
    <div className="counter">
        <Link to="hello">Hello</Link>
        <button onClick={() => increment()}>+</button>
        <span>{counter}</span>
        <button onClick={() => decrement()}>-</button>
        {children}
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
