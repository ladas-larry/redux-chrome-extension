export const UPDATE_STATE = 'UPDATE_STATE';
export const SET_OPTIONS = 'SET_OPTIONS';

export function updateState() {
  return {
    type: UPDATE_STATE
  };
}

export function setOptions(options) {
  return {
    type: SET_OPTIONS,
    options
  };
}


//Counter example

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}


