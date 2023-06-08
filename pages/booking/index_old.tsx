import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Button from '@mui/material/Button';
import Hotel from '../../src/api/booking/booking';
import { useEffect, useState } from 'react';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() {

    const [hotel, setHotel] = useState<any[]>([])
    const [refresh, setRefresh] = useState<any>(false)
    useEffect(() => {
        Hotel.GetDataHotel().then
            (data => {
                setHotel(data)
            })
    }, [refresh])

    // console.log(hotel)

  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 1000,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
        {hotel && hotel.map(item => {
          return (
            <Grid container spacing={4}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img alt="complex" src="https://cdn0-production-images-kly.akamaized.net/83eNIr6NoNALbf0ukgz4tBEz1ko=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3386715/original/094552600_1614241094-Double_Tree_Jakarta.jpg" />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" component="div">
                      {item.hotelName}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {item.hotelDescription}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.hotelPhonenumber}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ cursor: 'pointer' }} variant="body2">
                      <Button>
                          Book
                      </Button>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="div">
                    {item.hotelRatingStar} Star
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          )})}
    </Paper>
  );
}