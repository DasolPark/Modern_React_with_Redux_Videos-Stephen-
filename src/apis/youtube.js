import axios from 'axios';

const KEY = 'AIzaSyDTXqr_0AeRITb904u-MUdBOlSTJGExy1g';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
});
