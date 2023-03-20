import React from 'react'
import Navbar from '../Components/Navbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import PersonalLoanOptions from '../Components/PersonalLoanOptions'

const PersonalLoan = () => {
  return <>
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
          <b>Choose from your choice of personal loan:</b>
        </Typography>
        
        </div>
        <div
        style={{
          textAlign: 'center',
          marginInline: '15%',
          marginTop: '20px',
          marginBottom: '20px',
        }}
      >
        <PersonalLoanOptions />
        </div>
  </>
}

export default PersonalLoan
