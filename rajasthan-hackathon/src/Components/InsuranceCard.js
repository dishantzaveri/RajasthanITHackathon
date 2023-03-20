import { Button, Card, CardContent, Grid } from '@mui/material'
import React from 'react'

function TaskCard({ taskName, image, btnTxt }) {
  return (
    <>
      <Card>
        <CardContent sx={{ padding: '20px' }}>
          <Grid
            container
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Grid item md={8}>
              <h3 style={{ margin: '0', padding: '0' }}>{taskName}</h3>
              <Button
                sx={{
                  // backgroundColor: '#E24748',
                  // border: '1px solid #E24748',
                  color: '#2F3A56',
                  marginTop: '10px',
                  // color: 'white',
                  // padding: 0,
                  ':hover': {
                    bgcolor: '#2F3A56',
                    transition: '0.7s',
                    color: 'white',
                    border: '0px solid #2F3A56',

                    // color: 'black',
                  },
                }}
              >
                {btnTxt}
              </Button>
            </Grid>
            <Grid
              md={4}
              item
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '2px',
                  objectFit: 'cover',
                }}
                src={image}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  )
}

export default TaskCard
