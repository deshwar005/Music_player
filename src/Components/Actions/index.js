const SET_SONG_URL = 'SET_SONG_URL';

const setSongUrl = (songUrl) => ({
  type: SET_SONG_URL,
  payload: songUrl,
});

export default setSongUrl;