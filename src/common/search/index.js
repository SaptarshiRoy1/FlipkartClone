import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const SearchBar = ()=>{
    return(
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={Options}
        sx={{ width: 500,borderEndStartRadius:8}}
        renderInput={(params) => <TextField {...params} label="Search For Products"/>}
      />
    )
}

const Options=["Electronics","Cloths","Accesories","Mobiles"]

export default SearchBar;