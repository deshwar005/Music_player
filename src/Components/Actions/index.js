const SET_SONG_URL = 'SET_SONG_URL';

const setSongUrl = (songUrl,imageurl,state) => ({
  type: SET_SONG_URL,
  payload: {
    imgurl: imageurl,
    songUrl: songUrl,
    songstate:state,
  },
});

export default setSongUrl;