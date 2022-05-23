import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';


export default function BasicCard(props) {
    const {title, body, state, setState, component: Component} = props

  return (
    <Card sx={{ width: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} variant={'h5'} gutterBottom color="#212121">
            {title}
        </Typography>
        <Typography color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Component state={state} setState={setState} />
      </CardActions>
    </Card>
  );
}
