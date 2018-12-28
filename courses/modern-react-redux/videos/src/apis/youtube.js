import axios from 'axios';
const KEY = 'AIzaSyDQh8rPf74UWUyxCSDjoW1O1orGZ72F1X0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
