import axios from 'axios';
// users can fairly easily get hands on api key
const KEY = 'AIzaSyBjMq1ijxJbfLAiiagR95r9OqEWUvD7RBQ';

export default axios.create({ 
  baseURL: 'https://www.googleapis.com/youtube/v3', 
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY  
  }
});