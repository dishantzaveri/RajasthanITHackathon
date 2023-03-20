import React from 'react'
import Typography from '@mui/material/Typography'
import Navbar from '../Components/Navbar'
import LoanTypes from '../Components/LoanTypes'



const Loans = () => {
  return (
    <>
    <Navbar />
      <div sx={{ alignItems: 'left' }}>
        <Typography
          variant="h4"
          color="initial"
          sx={{
            paddingTop: '50px',
            color: '#2F3A56',
            textAlign: 'left',
            marginLeft: 28,
          }}
        >
          <b>Different types of loans</b>
        </Typography>
        <Typography
          variant="h6"
          color="initial"
          sx={{
            color: '#5D657B',
            textAlign: 'left',
            marginLeft: 28,
          }}
        >
          We have a provision for various kinds of loans which might suit your
          needs.
        </Typography>
      </div>
      <div sx={{marginInline: '15%'}}>
        <LoanTypes />
      </div>
      
    </>
  )
}

export default Loans