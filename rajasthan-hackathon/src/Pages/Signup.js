import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import img from '../Images/signup.png'

const theme = createTheme()

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url(https://img.etimg.com/thumb/width-640,height-480,imgsize-489530,resizemode-1,msid-69089725/markets/stocks/news/why-india-cant-be-the-next-china-and-shouldnt-try/indian-economy-getty.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#002ead' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3, ml: 11 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={5}>
                  <TextField
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    required
                    fullWidth
                    id="phone"
                    label="Contact Number"
                    name="phone"
                    autoComplete="phone"
                  />
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    required
                    fullWidth
                    name="pan"
                    label="Pan Number"
                    type="pan"
                    id="pan"
                    autoComplete="pan"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                // minWidth='50%'
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  ml: -10,
                  maxWidth: '150px',
                  bgcolor: '#E24748',
                  ':hover': {
                    bgcolor: '#ABD0DA',
                    transition: '0.7s',
                    // color: 'black',
                  },
                }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}