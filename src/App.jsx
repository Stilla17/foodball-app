import { useState } from 'react'
import './App.css'
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function App() {

  return (
    <>
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
        Serkan
      </Alert>

      <Box
        component="form"
        sx={{
          backgroundColor: 'red', color: 'red',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField sx={{ color: "red" }} id="outlined-basic" label="Serkan" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>

    </>
  )
}

export default App
