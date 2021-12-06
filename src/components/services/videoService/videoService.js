import axios from 'axios';

const get = async () => {
  const result = await axios.get('http://localhost:3080/users');
  return result.data;
}

const VideoService = { get };
export default VideoService;