import * as React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import homeLoan from '../Images/homeLoan.jpeg'
import marriageLoan from '../Images/marriageLoan.jpeg'
import medicalLoan from '../Images/medicalLoan.jpeg'
import electronicsLoan from '../Images/electronicLoan.jpeg'
import vacationLoan from '../Images/vacationLoan.jpeg'
import carLoan from '../Images/carLoan.jpeg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={4} key={0}>
          {/* <Item>xs=2</Item> */}
          <Card>
            <CardContent>
              <Typography
                variant="h6"
                color="initial"
                sx={{
                  // paddingTop: '30px',
                  color: '#2F3A56',
                  // textAlign: 'left',
                  // marginLeft: 28,
                }}
              >
                <b>Home Loan</b>
              </Typography>
              <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                <img
                  src={homeLoan}
                  alt="eduloan"
                  height="100px"
                  width="100px"
                />
              </div>
              <Button
                variant="text"
                color="primary"
                sx={{
                  backgroundColor: '#E24748',
                  // marginTop: '30px',
                  color: 'white',
                  ':hover': {
                    bgcolor: '#2F3A56',
                    transition: '0.7s',
                    // color: 'black',
                  },
                  padding: '15px',
                }}
              >
                More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={2} sm={4} md={4} key={0}>
          <Card>
            <CardContent>
              <Typography
                variant="h6"
                color="initial"
                sx={{
                  // paddingTop: '30px',
                  color: '#2F3A56',
                  // textAlign: 'left',
                  // marginLeft: 28,
                }}
              >
                <b>Marriage Loan</b>
              </Typography>
              <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                <img
                  src={marriageLoan}
                  alt="eduloan"
                  height="100px"
                  width="100px"
                />
              </div>
              <Button
                variant="text"
                color="primary"
                sx={{
                  backgroundColor: '#E24748',
                  // marginTop: '30px',
                  color: 'white',
                  ':hover': {
                    bgcolor: '#2F3A56',
                    transition: '0.7s',
                    // color: 'black',
                  },
                  padding: '15px',
                }}
              >
                More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={2} sm={4} md={4} key={0}>
          <Card>
            <CardContent>
              <Typography
                variant="h6"
                color="initial"
                sx={{
                  // paddingTop: '30px',
                  color: '#2F3A56',
                  // textAlign: 'left',
                  // marginLeft: 28,
                }}
              >
                <b>Medical Loan</b>
              </Typography>
              <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                <img
                  src={medicalLoan}
                  alt="eduloan"
                  height="100px"
                  width="100px"
                />
              </div>
              <Button
                variant="text"
                color="primary"
                sx={{
                  backgroundColor: '#E24748',
                  // marginTop: '30px',
                  color: 'white',
                  ':hover': {
                    bgcolor: '#2F3A56',
                    transition: '0.7s',
                    // color: 'black',
                  },
                  padding: '15px',
                }}
              >
                More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={2} sm={4} md={4} key={0}>
          <Card>
            <CardContent>
              <Typography
                variant="h6"
                color="initial"
                sx={{
                  // paddingTop: '30px',
                  color: '#2F3A56',
                  // textAlign: 'left',
                  // marginLeft: 28,
                }}
              >
                <b>Electronics Loan</b>
              </Typography>
              <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                <img
                  src={electronicsLoan}
                  alt="eduloan"
                  height="80px"
                  width="100px"
                />
              </div>
              <Button
                variant="text"
                color="primary"
                sx={{
                  backgroundColor: '#E24748',
                  // marginTop: '30px',
                  color: 'white',
                  ':hover': {
                    bgcolor: '#2F3A56',
                    transition: '0.7s',
                    // color: 'black',
                  },
                  padding: '15px',
                }}
              >
                More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={2} sm={4} md={4} key={0}>
          <Card>
            <CardContent>
              <Typography
                variant="h6"
                color="initial"
                sx={{
                  // paddingTop: '30px',
                  color: '#2F3A56',
                  // textAlign: 'left',
                  // marginLeft: 28,
                }}
              >
                <b>Vacation Loan</b>
              </Typography>
              <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                <img
                  src={vacationLoan}
                  alt="eduloan"
                  height="100px"
                  width="100px"
                />
              </div>
              <Button
                variant="text"
                color="primary"
                sx={{
                  backgroundColor: '#E24748',
                  // marginTop: '30px',
                  color: 'white',
                  ':hover': {
                    bgcolor: '#2F3A56',
                    transition: '0.7s',
                    // color: 'black',
                  },
                  padding: '15px',
                }}
              >
                More
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={2} sm={4} md={4} key={0}>
          <Card>
            <CardContent>
              <Typography
                variant="h6"
                color="initial"
                sx={{
                  // paddingTop: '30px',
                  color: '#2F3A56',
                  // textAlign: 'left',
                  // marginLeft: 28,
                }}
              >
                <b>Car Loan</b>
              </Typography>
              <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                <img
                  src={carLoan}
                  alt="eduloan"
                  height="100px"
                  width="100px"
                />
              </div>
              <Button
                variant="text"
                color="primary"
                sx={{
                  backgroundColor: '#E24748',
                  // marginTop: '30px',
                  color: 'white',
                  ':hover': {
                    bgcolor: '#2F3A56',
                    transition: '0.7s',
                    // color: 'black',
                  },
                  padding: '15px',
                }}
              >
                More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
