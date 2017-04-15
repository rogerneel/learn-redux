// a reducer takes in 2 things
// 1. the action
// 2. copy of current state

function posts(state = [], action) {
  console.log('The posts will change');
  console.log(state, action);

  switch(action.type) {
    case 'INCREMENT_LIKES': {
      const i = action.index;
      var newState = Object.assign([], state);
      newState[i].likes = newState[i].likes + 1;
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default posts;
