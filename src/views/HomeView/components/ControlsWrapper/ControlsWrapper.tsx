import React, { useRef, useState } from 'react'
import classes from "./ControlsWrapper.module.scss";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ControlsWrapper = () => {

  const [filter, setFilter] = useState<string>();  
  const [searchExpanded, setSearchExpanded] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  
  const toggleSearchBar = () => {
    if(!searchExpanded)
      setSearchExpanded(!searchExpanded);
  }

  const searchProducts = (val: any) => {
    let oldVal;
    if (inputRef)
      oldVal = inputRef!.current!.value;

    const timer = setTimeout(() => {
      // if (oldVal == inputRef.current.value)
      //UPDATE VALUE SEARCH
      //defcontext.setItemsFilter(inputRef.current.value);      
    }, 500);
    return () => {
      clearTimeout(timer);
    };

  }
  const fuelType = [{ id: 1, type: "gasoline" }, { id: 2, type: "GPL" }, { id: 3, type: "diesel" }];

  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <PersonOutlineOutlinedIcon className={classes.userIcon} />
        <div  className={` ${(searchExpanded) ? classes.searchBoxExpanded : classes.searchBox}`} onClick={()=> toggleSearchBar() }>
        <TextField
          id="searchField"
          inputRef={inputRef}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}          
        variant="standard"
          onChange={(e) => searchProducts(e.target.value)}
        />
        </div>
      </div>
      <div className={` ${classes.row} ${classes.searchInfo}`}>
        <span>123 items found</span>
        <h3>Search Results for "sdvsdvsdv"</h3>
      </div>
      <div className={classes.row}>
        <FormControl className={classes.input}>
          <Select
            displayEmpty
            value={""}
            onChange={(e) => setFilter(e.target.value)}
          >
            <MenuItem value="" disabled>
              Selezione config
            </MenuItem>
            {fuelType.map((el, index) => <MenuItem key={el.id} value={el.type}>{el.type}</MenuItem>)}
          </Select>
        </FormControl>
        <FormControl className={classes.input}>
          <Select
            displayEmpty
            value={""}
            onChange={(e) => setFilter(e.target.value)}
          >
            <MenuItem value="" disabled> 
              Selezione config
            </MenuItem>
            {fuelType.map((el, index) => <MenuItem key={el.id} value={el.type}>{el.type}</MenuItem>)}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default ControlsWrapper;
