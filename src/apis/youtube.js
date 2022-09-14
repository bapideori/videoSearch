import axios from 'axios';
const KEY = 'AIzaSyBxWFBNbgh41mi0LV9urRqsEEXOF5mDD54';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
    }
}); 


