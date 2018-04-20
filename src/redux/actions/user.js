import { COUNTER_DECREMENT, COUNTER_INCREMENT } from '../types';

export const counterIncrement = () => ({ type: COUNTER_INCREMENT });
export const counterDecrement = () => ({ type: COUNTER_DECREMENT });
