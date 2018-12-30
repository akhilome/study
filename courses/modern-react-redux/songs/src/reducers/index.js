import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No role models', duration: '4:05' },
    { title: 'How much a dollar cost', duration: '4:45' },
    { title: 'Draft Day', duration: '3:55' },
    { title: 'Overstimulated', duration: '5:05' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') return action.payload;
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
