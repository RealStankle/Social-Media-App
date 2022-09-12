import { Box } from '@mui/material';
import Post from './Post';
import { usePhotos } from '../context/PhotosContext';

const Feed = () => {
  const { photos } = usePhotos();

  return (
    <Box sx={{ flex: 4, p: { xs: 0, md: 2 } }}>
      {photos.length > 0 &&
        photos.map((photo, index) => <Post key={index} photo={photo} />)}
    </Box>
  );
};

export default Feed;
