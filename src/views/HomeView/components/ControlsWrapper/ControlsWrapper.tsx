import React, { useRef, useState, useEffect } from 'react'
import classes from "./ControlsWrapper.module.scss";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useDispatch, useSelector} from 'react-redux';
import { filterProductsByString } from 'store/cars';

const ControlsWrapper = (props:any) => {

  const dispatch = useDispatch();
  const searchString  = useSelector((state:any) => state.mainReducer.searchString); 
  const [searchExpanded, setSearchExpanded] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    //RESET SEARCH STRING ON COMPONENT MOUNT
    dispatch<any>(filterProductsByString(""));
},[]);
  
  const toggleSearchBar = () => {
    if(!searchExpanded)
      setSearchExpanded(!searchExpanded);
  }
  const searchProducts = () => {
    let oldVal = inputRef!.current!.value;
    const timer = setTimeout(() => {
        if(oldVal == inputRef!.current!.value)
          dispatch<any>(filterProductsByString(inputRef!.current!.value));
    
    }, 500);
    return () => {
      clearTimeout(timer);
    };

  }
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
          onChange={() => searchProducts()}
        />
        </div>
      </div>
      <div className={` ${classes.row} ${classes.searchInfo}`}>
          <span>{props.itemsTot} items found</span>
        { (searchString) && <h3>Search Results for "{searchString}"</h3>  }

      </div>
      <div className={classes.row}>
        <FormControl className={classes.input}>
          <Select
            displayEmpty
            value={""}
          >
            <MenuItem value="" disabled>
              PRODUCTS ({props.itemsTot})
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.input}>
          <Select
            displayEmpty
            value={""}
          >
            <MenuItem value="" disabled> 
              ORDER BY
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default ControlsWrapper;
