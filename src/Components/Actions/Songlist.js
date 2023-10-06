const SET_ALL_SONGS = 'SET_ALL_SONGS';

const setsonglist = (list) => ({
  type: SET_ALL_SONGS,
  payload: {
    all:list
  },
});

export default setsonglist;