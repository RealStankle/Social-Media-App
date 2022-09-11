import axios from 'axios';

const options = {
  method: 'GET',
  params: {
    client_id: import.meta.env.VITE_ACCESS_KEY,
    count: 30,
  },
  headers: {
    'Accept-Version': 'v1',
  },
};

const fetchPhotos = async (url, options) => {
  const { data } = await axios(url, options);

  return data;
};

export { fetchPhotos, options };
