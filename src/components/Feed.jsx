import { useEffect, useState, useCallback } from 'react';
import { Box } from '@mui/material';
import Post from './Post';
import { fetchPhotos, options } from '../utils/fetchPhotos';

const Feed = () => {
  const [photos, setPhotos] = useState([]);

  const fetchData = useCallback(async () => {
    const photosData = await fetchPhotos(
      'https://api.unsplash.com/photos/random',
      {
        ...options,
        params: { ...options.params, query: 'nature' },
      }
    );

    setPhotos(photosData);
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={{ flex: 4, p: { xs: 0, md: 2 } }}>
      {photos.length > 0 &&
        photos.map((photo, index) => <Post key={index} photo={photo} />)}
    </Box>
  );
};

export default Feed;
