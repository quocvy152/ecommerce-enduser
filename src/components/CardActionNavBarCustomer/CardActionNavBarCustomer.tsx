// import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import SupportIcon from '@mui/icons-material/Support';  
import LogoutIcon from '@mui/icons-material/Logout';  
// import SendIcon from '@mui/icons-material/Send';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';

import './CardActionNavBarCustomer.css';
import { Avatar } from '@mui/material';
import { images } from '@/assets/assets';
import { useAuth } from '@/services/hooks/useAuth';

export type CardActionNavBarCustomerProps = {};

export const CardActionNavBarCustomer = () => {
  // const [open, setOpen] = React.useState(true);

  // const handleClick = () => {
  //   setOpen(!open);
  // };

  const { signOut } = useAuth();

  return (
    <List
      sx={{
        width: 220,
        right: 10,
        backgroundColor: 'background.paper',
        position: 'absolute',
        zIndex: 1,
        boxShadow: '0px 0px 20px #00000015',
        borderRadius: 1
      }}
      component='nav'
      aria-labelledby='nested-list-subheader'
      // subheader={
      //   <ListSubheader component='div' id='nested-list-subheader'>
      //     Nested List Items
      //   </ListSubheader>
      // }
    >
      <ListItemButton>
        <ListItemIcon>
          {/* <SendIcon /> */}
          <Avatar alt="Remy Sharp" src={images.ic_user_default} />
        </ListItemIcon>
        <ListItemText primary='Phạm Quốc Vỹ' />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <SupportIcon />
        </ListItemIcon>
        <ListItemText primary='Hỗ trợ' />
      </ListItemButton>

      <hr />

      <ListItemButton
        onClick={signOut}
      >
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary='Đăng xuất' />
      </ListItemButton>
      {/* <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Inbox' />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Starred' />
          </ListItemButton>
        </List>
      </Collapse> */}
    </List>
  );
};
