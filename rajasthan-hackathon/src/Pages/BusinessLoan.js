  import React, { useEffect, useState } from 'react'
  import gstLogo from '../Images/gst.png'
  import cinLogo from '../Images/cin.png'
  import panLogo from '../Images/pan.png'
  import patentLogo from '../Images/patent.png'
  import staticImg from '../Images/static.png'
import Typography from '@mui/material/Typography'
import LoanTable from '../Components/LoanTable'


  import Navbar from '../Components/Navbar'

  // import proofLogo from '../Images/proof.png'
  // import eventsLogo from '../Images/events.png'   
  const Eligibility = () => {
    // This function put query that helps to
    // change the language
    const constantData = [
      {
        id: 1,
        image: gstLogo,
        title: 't1',
        description: 'd1',
      },
      {
        id: 2,
        image: cinLogo,
        title: 't2',
        description: 'd2',
      },
      {
        id: 3,
        image: panLogo,
        title: 't3',
        description: 'd3',
      },
      {
        id: 4,
        image: patentLogo,
        title: 't4',
        description: 'd4',
      },
    ]

    return (
      <>
        <Navbar />
        <img src={staticImg} alt="static" />
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
            <b>Already have a startup and are looking for loans?</b>
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
            The government has several provisions for micro and small services
            like yours and would love to help you financially! <br />
            Browse through some schemes below:
          </Typography>
        </div>
        <div style={{ textAlign: 'left', marginInline: '15%', marginTop: '20px', marginBottom: '20px'}}><LoanTable /></div>
      </>
    )
  }

  export default Eligibility
