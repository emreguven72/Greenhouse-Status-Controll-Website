import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function GreenhouseCard() {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: '#1E1E1E' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn1.ntv.com.tr/gorsel/125_Ig6zsU6-OZUiC_39qw.jpg?width=1060&height=795&mode=crop&scale=both&v=1285332237000&meta=square"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white">
            Lizard
          </Typography>
          <Typography variant="body2" color="white">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}