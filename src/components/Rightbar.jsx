import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  styled,
  Typography,
} from '@mui/material';
import { usePhotos } from '../context/PhotosContext';

const RightbarHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 100,
  marginBottom: theme.spacing(2),
  '&:not(&:first-of-type)': {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Rightbar = () => {
  const { photos } = usePhotos();

  return (
    <Box
      sx={{
        flex: 2,
        p: 2,
        display: { xs: 'none', sm: 'block' },
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          p: 2,
        }}
      >
        <RightbarHeading variant="h5">Online Friends</RightbarHeading>
        <AvatarGroup max={8} sx={{ justifyContent: 'flex-end' }}>
          {photos.map((photo, index) => (
            <Avatar key={index} src={photo.user.profile_image.large} />
          ))}
        </AvatarGroup>
        <RightbarHeading variant="h5">Latest Photos</RightbarHeading>
        <ImageList variant="masonry" cols={3} gap={5}>
          {photos.slice(5, 12).map((photo, index) => (
            <ImageListItem key={index}>
              <img
                src={photo.urls.small}
                alt={photo.alt_description}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default Rightbar;
