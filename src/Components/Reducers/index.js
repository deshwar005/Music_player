const initialState = {
  imgurl:null,
    songUrl: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SONG_URL':
        return {
          ...state,
          songUrl: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;