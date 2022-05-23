import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSlider(props) {
  const {state, setState} = props
  
  function handleVolume(e) {
    setState(e.target.value)
  }
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Volume"
        value={state}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
        onChange={handleVolume}
      />
    </Box>
  );
}
