import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import QrCode2RoundedIcon from '@mui/icons-material/QrCode2Rounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import SearchIcon from '@mui/icons-material/Search';
import classes from './Header.module.css';

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.topbar}>
        <div className={classes.location}>
          Bhubaneswar, Odisha
          <div className={classes.down}>
            <KeyboardArrowDownRoundedIcon />
          </div>
        </div>
        <div>
          <QrCode2RoundedIcon fontSize="large" style={{ color: 'white' }} />

          <AccountCircleIcon fontSize="large" style={{ color: 'white' }} />
        </div>
      </div>
      <div className={classes.searchBar}> <SearchIcon /> What do you want to shop today ?</div>
    </div>
  );
}

export default Header;
