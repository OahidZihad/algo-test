// src/redux/reducers.js
const initialState = {
    selectedPost: null,
    comments: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SELECTED_POST':
        return { ...state, selectedPost: action.payload };
      case 'SET_COMMENTS':
        return { ...state, comments: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  