// src/redux/actions.js
export const setSelectedPost = (post) => ({
    type: 'SET_SELECTED_POST',
    payload: post,
  });
  
  export const setComments = (comments) => ({
    type: 'SET_COMMENTS',
    payload: comments,
  });
  