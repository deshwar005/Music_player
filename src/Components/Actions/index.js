const SET_SONG_URL = 'SET_SONG_URL';

const setSongUrl = (isplaying,imageurl,songUrl,state) => ({
  type: SET_SONG_URL,
  payload: {
    isplaying:isplaying,
    imgurl: imageurl,
    songUrl: songUrl,
    songstate:state,
  },
});

export default setSongUrl;