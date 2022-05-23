import TitleBar from 'components/titleBar/TitleBar';
import React from 'react';
import classes from "./AddProductView.module.scss";
import { useForm } from "react-hook-form";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import ButtonBase from 'components/buttonbase/ButtonBase';
import { TextField } from '@mui/material';
import {useDispatch} from 'react-redux';
import {sendCarData } from "store/cars"; 
import { carInfo } from 'utility/Types';

const AddProductView = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = async(data: any) => {
    if(data)
      dispatch<any>(sendCarData(data));    
  }

  const fuelType = [{ id: 1, type: "gasoline" }, { id: 2, type: "GPL" }, { id: 3, type: "diesel" }];

  return (
    <section className={classes.container}>
      <TitleBar title="Add New Car" btText="View Cars" btPath="/" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.row}>
          <span >Name: </span>
          <TextField
            className={classes.input}
            id="name"
            label="Car Name"
            defaultValue=""
            helperText={!!errors.name ? "Insert car name and model" : null}
            {...register("name", { required: true, minLength: 3 })}
          />
        </div>
        <div className={classes.row}>
          <span>Year: </span>
          <TextField
            className={classes.input}
            id="year"
            label="Year"            
            defaultValue=""
            inputProps={{ maxLength: 4   }}
            helperText={!!errors.year ? "Insert a valid Year, e.g. 2022" : null}
            {...register("year", { required: true, minLength: 4, maxLength: 4 })}
          />
        </div>
        <div className={classes.row}>
          <span>Fuel: </span>
          <FormControl className={classes.input}>
            <Select
              id="fuel"
              defaultValue=""
              displayEmpty
              {...register("fuel", { required: "Select a fuel", })}
            >
              <MenuItem key="" value="" disabled >Select fuel</MenuItem>
              {fuelType.map((el, index) => <MenuItem key={el.id} value={el.type}>{el.type}</MenuItem>)}
            </Select>
            <FormHelperText>{!!errors.fuel ? errors.fuel.message : null}</FormHelperText>
          </FormControl>
        </div>
        <div className={classes.row}>
          <span>Price: </span>
          <TextField
            className={classes.input}
            id="price"
            label="Price"
            defaultValue=""
            helperText={!!errors.price ? "Insert price." : null}
            {...register("price", { required: true })}
          />
        </div>
        <div className={classes.row}>
          <span>Image link: </span>
          <TextField
            className={classes.input}
            id="imgurl"
            label="Paste image URL"
            defaultValue=""
            helperText={!!errors.imgurl ? "Insert image URL" : null}
            {...register("imgurl", { required: true })}
          />
          {!errors.imgurl && <small>Insert URL image, allowed only images 364x320 px</small> }
        </div>
        <ButtonBase text="Insert to Database" type="submit" />
      </form>


    </section>
  );
}

export default AddProductView;
