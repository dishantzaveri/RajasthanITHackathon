import React from 'react'
import Navbar from '../Components/Navbar'
import Loans from './Loans'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Switch from '@mui/material/Switch'
import Paper from '@mui/material/Paper'
import Slide from '@mui/material/Slide'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'


const Landing = () => {
  const [checked, setChecked] = React.useState(true)

  return (
    <>
      <Navbar />

      <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        <div>
          <Typography variant="h2" color="initial" sx={{ paddingTop: '150px' }}>
            The modern <span style={{ color: '#E24748' }}>finance</span>{' '}
            platform.
          </Typography>
          <Typography variant="h2" color="initial">
            All your business in one app.
          </Typography>
        </div>
      </Slide>
      <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        <div>
          <Typography
            variant="h5"
            color="initial"
            sx={{ paddingTop: 3, color: '#5d657b' }}
          >
            All your finance modules at one place.
          </Typography>
          <Typography variant="h5" color="initial" sx={{ color: '#5d657b' }}>
            Manage money quickly, easily and efficiently.
          </Typography>
        </div>
      </Slide>

      <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
        <Link to="/loans" style={{textDecoration: 'none'}}>
        <Button
          variant="text"
          color="primary"
          sx={{
            backgroundColor: '#E24748',
            marginTop: '30px',
            color: 'white',
            ':hover': {
              bgcolor: '#2F3A56',
              transition: '0.7s',
              // color: 'black',
            },
            padding: '15px',
          }}
        >
          Browse{' '}
          <span>
            {' '}
            <b>→</b>{' '}
          </span>
        </Button>
        </Link>
      </Slide>

      {/* <Loans /> */}
    </>
  )
}

export default Landing
