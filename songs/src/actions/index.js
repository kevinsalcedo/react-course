// Action Creator
export const selectSong = song => {
  // Return an object
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
