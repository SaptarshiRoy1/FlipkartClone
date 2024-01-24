import React from "react";
import {Card,Container,Typography} from "@mui/material";
import logo from "../../assets/logo.svg";
import "./header.css"
import SearchBar from "../../common/search";
import Accounts from "../../common/Accounts";
import Popover from '@mui/material/Popover';


const Header = ()=>{
    return(
        <div>
            <Card sx={{borderRadius: 0,
            padding:2, 
            display:"flex",
            alignItems:"center",
            gap: 8}}>
                <img src={logo} alt="logo" className="header_logo"/>
                <SearchBar/>
                <Accounts/>
            </Card>

        </div>
    )
}

export default Header;