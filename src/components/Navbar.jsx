import {
  AppBar,
  Badge,
  Box,
  IconButton,
  InputAdornment,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import { Public, Mail, Search } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const SearchBar = styled(InputBase)(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
  boxShadow: theme.shadows[3],
  '&:focus-within': {
    boxShadow: '0 0 0 3px black',
  },
}));

const Icons = styled(Box)(({ theme }) => ({}));

const Navbar = () => {
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
            <InputAdornment>
              <IconButton size="small">
                <Search />
              </IconButton>
            </InputAdornment>
          }
        />
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
