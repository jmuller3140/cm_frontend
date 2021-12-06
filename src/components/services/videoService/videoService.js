import axios from 'axios';

const get = async () => {
  const result = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  return result.data;
}

const VideoService = { get };
export default VideoService;