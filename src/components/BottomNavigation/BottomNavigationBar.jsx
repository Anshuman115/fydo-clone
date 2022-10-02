import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Paper from '@mui/material/Paper';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function BottomNavigationBar() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
    <Paper sx={{ zIndex: '1' ,position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation sx={{ width: '100%' }} value={value} onChange={handleChange}>
        <BottomNavigationAction
          value="Homepage"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          value="Events"
          icon={<FavoriteBorderIcon />}
        />
        <BottomNavigationAction
          value="notif"
          icon={<NotificationsNoneIcon />}
        />
         <BottomNavigationAction
          value="wallet"
          icon={<AccountBalanceWalletIcon />}
        />
      </BottomNavigation>
    </Paper>
    </div>
  );
}
