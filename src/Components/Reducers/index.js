const initialState = {
    imgurl:null,
    songUrl: null,
    songstate:false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SONG_URL':
        return {
          ...state,
          imgurl: action.payload.imgurl,
          songUrl: action.payload.songUrl,
          songstate:action.payload.songstate
        };
      default:
        return state;
    }
  };
  
  export default reducer;