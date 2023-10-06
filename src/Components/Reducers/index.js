const initialState = {
    songname:null,
    singer:null,
    imgurl:null,
    songurl: null,
    isplaying:null,
    all:[]
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SONG_DETAIL':
        return {
          ...state,
          isplaying:action.payload.isplaying,
          imgurl: action.payload.imgurl,
          songurl: action.payload.songurl,
          singer:action.payload.singer,
          songname:action.payload.songname,
        };

        case 'SET_ALL_SONGS':
          return{
            ...state,
            all:action.payload.all
          };
      default:
        return state;
    }
  };
  
  export default reducer;