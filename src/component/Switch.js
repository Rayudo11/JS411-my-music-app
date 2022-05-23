import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch' } };

export default function BasicSwitches(props) {

  const {state, setState} = props

  return (
    <div>
      <Switch 
        {...label} 
        checked={state} 
        onChange={()=>setState(!state)}
        
      />
    </div>
  );
}
