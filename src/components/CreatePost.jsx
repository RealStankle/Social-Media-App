import { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  Zoom,
} from '@mui/material';
import {
  Add,
  AddAPhoto,
  DateRange,
  EmojiEmotions,
  PersonAdd,
  VideoCameraFront,
} from '@mui/icons-material';

const CreatePost = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Tooltip
        onClick={() => setIsOpen(true)}
        TransitionComponent={Zoom}
        title="Create Post"
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { xs: '50%', md: 30 },
          transform: { xs: 'translateX(-50%)', md: 'none' },
        }}
      >
        <Fab color="primary">
          <Add />
        </Fab>
      </Tooltip>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        // sx={{ backdropFilter: 'blur(4px)' }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'background.paper',
            borderRadius: 2,
            p: { xs: 2, md: 4 },
            width: 1 / 2,
            minWidth: { xs: 9 / 10, md: '400px' },
            maxWidth: '600px',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: 'text.primary',
              mb: 3,
            }}
          >
            Create a New Post
          </Typography>
          <Stack direction="row" gap={2} alignItems="center" mb={3}>
            <Avatar
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg"
              alt="user avatar"
            />
            <Typography variant="h6" component="p" fontWeight={400}>
              John Doe
            </Typography>
          </Stack>
          <TextField
            variant="outlined"
            label="Post description"
            placeholder="Write what's on your mind..."
            rows={4}
            multiline
            fullWidth
          />
          <Stack direction="row" mt={1}>
            <IconButton color="primary">
              <EmojiEmotions />
            </IconButton>
            <IconButton color="secondary">
              <AddAPhoto />
            </IconButton>
            <IconButton color="success">
              <VideoCameraFront />
            </IconButton>
            <IconButton color="error">
              <PersonAdd />
            </IconButton>
          </Stack>
          <ButtonGroup variant="contained" fullWidth sx={{ mt: 3 }}>
            <Button>Create Post</Button>
            <Button sx={{ width: 1 / 4 }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default CreatePost;
