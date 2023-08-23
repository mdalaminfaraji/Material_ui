
import Drawer from '@mui/material/Drawer';

import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';

import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { navbarStyles } from './styles';

import {mainNavbarItems} from './consts/navbarItems'
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

const Navbar = () => {
  const navigate=useNavigate();
    return (
        <Grid item xs={4}>
         <Drawer
        sx={navbarStyles.drawer}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {mainNavbarItems.map((text) => (
            <ListItem key={text.id} disablePadding>
              <ListItemButton onClick={()=>navigate(text.route)}>
                <ListItemIcon sx={navbarStyles.icons}>
                 {text.icon}
                </ListItemIcon>
                <ListItemText sx={navbarStyles.text}  primary={text.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

      </Drawer>
     
        </Grid>
    );
};

export default Navbar;