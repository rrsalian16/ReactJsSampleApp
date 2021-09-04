import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SendSharpIcon from '@material-ui/icons/SendSharp';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../App.scss';
import useForm from './useForm';

const useStyles = makeStyles({
  mainContainer: {
    display: 'grid',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 5,
  },
  formContainer: {
    position: 'relative',
    width: '28.25rem',
    height: 'auto',
    padding: '2rem',
  },
  inputField: {
    width: '100%',
    marginBottom: '1rem',
  },
  btn: {
    width: '100%',
    height: '3rem',
    background: 'red',
    color: '#fff',
    '&:hover': {
      background: 'red',
    },
  },
});

const StepOne = () => {
  const stateSchema = {
    firsname: { value: '', error: '' },
    lastname: { value: '', error: '' },
    email: { value: '', error: '' },
    password: { value: '', error: '' },
    confirmPassword: { value: '', error: '' },
  };
  const stateValidatorSchema = {
    firstname: {
      required: true,
      validator: {
        func: (value) => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
        error: 'First Name must be more than 1 charactor',
      },
    },
  };

  const { values, errors, dirty, handleOnChange } = useForm(stateSchema, stateValidatorSchema);

  const [showPasswordValue, setShowPasswordValue] = useState({
    showPassword: false,
  });
  const [showConfirmPasswordValue, setShowConfirmPasswordValue] = useState({
    showConfirmPassword: false,
  });
  const handleClickShowPassword = () => {
    setShowPasswordValue({
      showPassword: !showPasswordValue.showPassword,
    });
  };
  const handleClickConfirmShowPassword = () => {
    setShowConfirmPasswordValue({
      showConfirmPassword: !showConfirmPasswordValue.showConfirmPassword,
    });
  };

  const { firstname, lastname, email, password, confirmPassword } = values;
  const classes = useStyles();
  const a = { lastname, email, password, confirmPassword };
  a.email = 'd';
  return (
    <div className={classes.mainContainer}>
      <Typography variant="h5" style={{ color: '#999', textAlign: 'center' }}>
        Sign Up with Email
      </Typography>
      <div className={classes.formContainer}>
        <form>
          <TextField
            style={{ width: '100%', margin: '1rem 0' }}
            label="First Name"
            variant="outlined"
            value={firstname}
            name="firsname"
            onChange={handleOnChange}
          />
          {errors.firsname && dirty.firsname && (
            <Typography style={{ marginTop: '0', color: 'red', fontWeight: '200' }}>{errors.firstname}</Typography>
          )}
          <TextField style={{ width: '100%', marginBottom: '1rem' }} label="Last Name" variant="outlined" />
          <PhoneInput country={'ca'} />
          <TextField className={classes.inputField} label="Email" variant="outlined" />
          <FormControl className={classes.inputField} variant="outlined">
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              type={showPasswordValue.showPassword ? 'text' : 'password'}
              labelWidth={70}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={handleClickShowPassword}>
                    {showPasswordValue.showPassword ? <Visibility /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className={classes.inputField} variant="outlined">
            <InputLabel>Confirm Password</InputLabel>
            <OutlinedInput
              type={showConfirmPasswordValue.showConfirmPassword ? 'text' : 'password'}
              labelWidth={135}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={handleClickConfirmShowPassword}>
                    {showConfirmPasswordValue.showConfirmPassword ? <Visibility /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <>
            <Button className={classes.btn} variant="contained" type="submit" endIcon={<SendSharpIcon />}>
              Sign Up
            </Button>
          </>
        </form>
      </div>
    </div>
  );
};

export default StepOne;
