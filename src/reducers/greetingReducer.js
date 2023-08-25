const initialState = {
  greeting: '',
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RANDOM_GREETING':
      return {
        ...state,
        greeting: action.payload.greeting,
      };
    default:
      return state;
  }
};

export default greetingReducer;
