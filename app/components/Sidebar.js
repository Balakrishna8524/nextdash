// components/Sidebar.js
import Link from 'next/link';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const sections = ['overview', 'users', 'settings'];

export default function Sidebar() {
  return (
    <List>
      {sections.map((section) => (
        <ListItem key={section} disablePadding>
          <ListItemButton component={Link} href={`/dashboard/${section}`}>
            <ListItemText primary={section.charAt(0).toUpperCase() + section.slice(1)} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
