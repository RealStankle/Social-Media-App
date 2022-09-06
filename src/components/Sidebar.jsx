import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Switch,
} from '@mui/material';
import {
  AccountBox,
  Article,
  DarkMode,
  Group,
  Home,
  LightMode,
  Person,
  Settings,
  Storefront,
} from '@mui/icons-material';

const DarkModeSwitch = styled(Switch)(({ theme }) => ({
  width: 80,
  height: 34,
  padding: 7,
  overflow: 'visible',
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translate(34%, 34%)',
    '&.Mui-checked': {
      transform: 'translate(132%, 34%)',
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
    width: 29,
    height: 29,
    borderRadius: '50%',
    padding: 5,
  },
  '& .MuiSwitch-track': {
    height: 36,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'hsl(198, 90%, 15%)'
        : 'hsl(48, 90%, 85%)',
    borderRadius: 20,
  },
}));

const Sidebar = ({ setThemeMode }) => {
  return (
    <Box
      sx={{
        flex: 1,
        p: 2,
        display: { xs: 'none', sm: 'block' },
      }}
    >
      <Box
        sx={{
          position: 'fixed',
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homapage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <DarkModeSwitch
              size="medium"
              icon={<LightMode />}
              checkedIcon={<DarkMode />}
              onChange={(e) =>
                setThemeMode(e.target.checked ? 'dark' : 'light')
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
