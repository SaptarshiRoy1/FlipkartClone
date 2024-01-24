import React,{useState} from "react";
import Popover from '@mui/material/Popover';
import {Card,Container,Typography} from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Accounts = ()=>{

    const [el,setEl]=useState(null);

    const handlePopoverOpen=(event)=>{
        setEl(event.currentTarget);
    };
    const handlePopoverClose=()=>{
        setEl(null);
    };

    return(
        <div>
      <Typography
        aria-owns={el ? 'account-menu-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        sx={{display:"flex",alignItems:"center",border:!!el? "1px solid lightgray":undefined,padding:1,borderRadius:2,backgroundColor:!!el?"rgba(0,0,0,0.3)":undefined}}
      >
        Account {
          !!el ? <ExpandLessIcon/>:<ExpandMoreIcon/>
        }
   
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={!!el}
        anchorEl={el}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>My account</Typography>
        <Typography sx={{ p: 1 }}>Orders</Typography>
        <Typography sx={{ p: 1 }}>Wishlist</Typography>
        <Typography sx={{ p: 1 }}>coupons</Typography>
      </Popover>
    </div>
    )
}

export default Accounts;