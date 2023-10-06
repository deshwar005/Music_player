const SET_SONG_URL = 'SET_SONG_DETAIL';

const setSongdetail = (songname,singer,imageurl,songurl,isplaying) => ({
  type: SET_SONG_URL,
  payload: {
    songname:songname,
    singer:singer,
    imgurl: imageurl,
    songurl: songurl,
    isplaying:isplaying,
  },
});

export default setSongdetail;