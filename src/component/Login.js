import * as React from 'react';
import {Button, Stack, TextField} from '@mui/material';

export default function BasicTextFields(props) {
    const {login, setLogin} = props
    function handleLogin(event) {
        event.preventDefault()
        setLogin(!login)
    }


  return (
    <Stack onSubmit={handleLogin} spacing={2} sx={{width:300, margin:"20px auto 20px auto"}} component="form">
      <TextField required id="username" label="username" variant="standard" type='text' />
      <TextField required id="password" label="password" variant="standard" type="password" />
      <Button type="submit" variant="contained">Login</Button>
    </Stack>
  );
}
