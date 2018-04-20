import { COUNTER_DECREMENT, COUNTER_INCREMENT } from '../types';

export default (state = {
    counter: 1,
}, action) => {
    switch (action.type) {
        case COUNTER_INCREMENT: {
            return { ...state, counter: state.counter + 1 };
        }
        case COUNTER_DECREMENT: {
            return { ...state, counter: state.counter - 1 };
        }
        default:
            return state;
    }
};
