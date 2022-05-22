import TitleBar from 'components/titleBar/TitleBar';
import React from 'react';
import classes from "./AddProductView.module.scss";
import { useForm } from "react-hook-form";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import { postAPI } from 'utility/callsAPI';
import ButtonBase from 'components/buttonbase/ButtonBase';
import { TextField } from '@mui/material';

const AddProductView = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = async (data: any) => {
    if (data) {
      let dataToSend = { ...data };
      console.log("DATI:", data);

      //const dataRes = await postAPI("/api/cart", dataToSend);

    }
  }

  const fuelType = [{ id: 1, type: "gasoline" }, { id: 2, type: "GPL" }, { id: 3, type: "diesel" }];

  return (
    <section className={classes.container}>
      <TitleBar title="Add Product" btText="View Cars" btPath="/" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.row}>
          <span>Car name: </span>
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
            helperText={!!errors.year ? "Insert year." : null}
            {...register("year", { required: true, minLength: 4, maxLength: 4 })}
          />
        </div>
        <div className={classes.row}>
          <span>Fuel: </span>
          <FormControl className={classes.input}>
            <Select
              id="fuel"
              defaultValue={""}
              {...register("fuel", { required: "Select a fuel", })}
            >
              <MenuItem key="" value="" >Select</MenuItem>
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
        <ButtonBase text="Insert to Database" type="submit" />
      </form>


    </section>
  );
}

export default AddProductView;
