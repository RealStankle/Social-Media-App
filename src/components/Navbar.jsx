import { useState } from 'react';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  ButtonBase,
  IconButton,
  InputAdornment,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import { Public, Mail, Search, Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const SearchBar = styled(InputBase)(({ theme }) => ({
  backgroundColor: 'white',
  paddingLeft: '10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
  boxShadow: theme.shadows[3],
  transition: theme.transitions.create(['box-shadow'], {
    duration: theme.transitions.duration.short,
  }),
  '&:focus-within': {
    boxShadow: '0 0 0 3px black',
  },
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const UserBox = styled(ButtonBase)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
}));

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorElement, setAnchorElement] = useState(null);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          SOCIAL APP
        </Typography>
        <Public sx={{ display: { xs: 'block', sm: 'none' } }} />
        <SearchBar
          placeholder="Search"
          endAdornment={
            <InputAdornment position="end">
              <IconButton size="small">
                <Search />
              </IconButton>
            </InputAdornment>
          }
        />
        <Icons>
          <IconButton sx={{ color: 'white' }}>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: 'white' }}>
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton
            onClick={(e) => {
              setIsMenuOpen(true);
              setAnchorElement(e.currentTarget);
            }}
          >
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg"
            />
          </IconButton>
        </Icons>
        <UserBox
          onClick={(e) => {
            setIsMenuOpen(true);
            setAnchorElement(e.currentTarget);
          }}
        >
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg"
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        open={isMenuOpen}
        anchorEl={anchorElement}
        onClose={() => {
          setIsMenuOpen(false);
          setAnchorElement(null);
        }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
