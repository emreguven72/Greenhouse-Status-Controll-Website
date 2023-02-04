import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import OpacityIcon from '@mui/icons-material/Opacity';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { Stack } from '@mui/system';

export default function GreenhouseCard({ onClick, temperature, humidity, name, address }) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: '#0A2647' }}>
      <CardActionArea onClick={onClick}>
        <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', px: 4, pb: 10, pt: 5 }}>
          <Stack spacing={0.5} sx={{ alignItems: 'center' }}>
            <LocalFireDepartmentIcon color='error' sx={{ width: '100px', height: '100px' }}/>
            <Typography component="h1" variant='h5' color='#CC2E2E'>
              {temperature}°C
            </Typography>
          </Stack>
          <Stack spacing={0.5} sx={{ alignItems: 'center' }}>
            <OpacityIcon color='primary' sx={{ width: '100px', height: '100px' }}/>
            <Typography component="h1" variant='h5' color='#1974CE'>
              {humidity}%
            </Typography>
          </Stack>
        </Box>
          <Typography gutterBottom variant="h4" component="div" color="white">
            {name}
          </Typography>
          <Typography component='p' color="white" sx={{ fontSize: 12, overflow:'hidden', height:'50px' }}>
           <span style={{ fontSize: 14 }}>Address:</span> {address}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}