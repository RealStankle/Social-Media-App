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
  Switch,
} from '@mui/material';
import {
  Public,
  Mail,
  Search,
  Notifications,
  LightMode,
  DarkMode,
} from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const SearchBar = styled(InputBase)(({ theme }) => ({
  backgroundColor: 'white',
  color: 'black',
  paddingLeft: '10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
  boxShadow: theme.palette.mode === 'light' && theme.shadows[3],
  transition: theme.transitions.create(['box-shadow'], {
    duration: theme.transitions.duration.short,
  }),
  '&:focus-within': {
    boxShadow:
      theme.palette.mode === 'light'
        ? '0 0 0 3px black'
        : '0 0 0 3px hsl(198, 90%, 55%)',
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

const DarkModeSwitch = styled(Switch)(({ theme }) => ({
  width: 56,
  height: 28,
  padding: 0,
  overflow: 'visible',
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translate(12%, 5%)',
    '&.Mui-checked': {
      transform: 'translate(114%, 5%)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor:
          theme.palette.mode === 'dark'
            ? 'hsl(198, 90%, 15%)'
            : 'hsl(48, 90%, 85%)',
        borderRadius: 20,
      },
    },
  },
  '& .MuiSvgIcon-root': {
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'hsl(198, 90%, 55%)'
        : 'hsl(48, 90%, 55%)',
    width: 24,
    height: 24,
    borderRadius: '50%',
    padding: 5,
  },
  '& .MuiSwitch-track': {
    height: 28,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'hsl(198, 90%, 15%)'
        : 'hsl(48, 90%, 85%)',
    borderRadius: 20,
  },
}));

const Navbar = ({ themeMode, setThemeMode }) => {
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
              <IconButton size="small" sx={{ color: 'grey.600' }}>
                <Search />
              </IconButton>
            </InputAdornment>
          }
        />
        <Icons>
          <DarkModeSwitch
            size="medium"
            icon={<LightMode />}
            checkedIcon={<DarkMode />}
            checked={themeMode === 'dark'}
            onChange={(e) => setThemeMode(e.target.checked ? 'dark' : 'light')}
          />
          <IconButton sx={{ color: 'white' }}>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: 'white' }}>
            <Badge badgeContent={7} color="error">
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
        <Box sx={{ p: 1, display: { xs: 'block', md: 'none' } }}>
          <DarkModeSwitch
            size="medium"
            icon={<LightMode />}
            checkedIcon={<DarkMode />}
            checked={themeMode === 'dark'}
            onChange={(e) => setThemeMode(e.target.checked ? 'dark' : 'light')}
          />
        </Box>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
