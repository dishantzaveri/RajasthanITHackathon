  import React, { useEffect, useState } from 'react'
  import gstLogo from '../Images/gst.png'
  import cinLogo from '../Images/cin.png'
  import panLogo from '../Images/pan.png'
  import patentLogo from '../Images/patent.png'
  import staticImg from '../Images/static.png'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
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
        <img src={staticImg} alt="startAStartup" />
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
            <b>
              Already have a startup and are looking for{' '}
              <span style={{ color: '#E24748' }}>loans</span>?
            </b>
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
        <div
          style={{
            textAlign: 'left',
            marginInline: '15%',
            marginTop: '20px',
            marginBottom: '20px',
          }}
        >
          <LoanTable />
        </div>

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
            <b>
              Already have a startup and are looking for{' '}
              <span style={{ color: '#E24748' }}>mentors</span>?
            </b>
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
            We have a special platform for people just like you to find and
            connect with mentors and get funding and interact <br />
            with investors!
          </Typography>
          <Button
            variant="text"
            color="primary"
            href="http://127.0.0.1:3001/login"
              target="_blank"
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
              margin: '10px',
              marginBottom: '60px'
              // marginLeft: '460px',
              
            }}
          >
            Try Now
            
          </Button>
        </div>
      </>
    )
  }

  export default Eligibility
