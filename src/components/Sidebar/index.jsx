import React, { Fragment, useState } from 'react';
import {
  Button,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Home, Face4, AccountTree } from '@mui/icons-material';

const navBarIcons = {
  Home: <Home />,
  'About Me': <Face4 />,
  Projects: <AccountTree />,
};

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const list = (
    <Box
      role='presentation'
      onClick={() => setIsOpen(!isOpen)}
      onKeyDown={() => setIsOpen(!isOpen)}
    >
      <List>
        {['Home', 'About Me', 'Projects'].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{navBarIcons[text]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Fragment>
      <Button onClick={() => setIsOpen(!isOpen)}>Menu</Button>
      <Drawer anchor='left' open={isOpen} onClose={() => setIsOpen(false)}>
        {list}
      </Drawer>
    </Fragment>
  );
};
