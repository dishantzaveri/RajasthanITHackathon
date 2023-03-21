import React from 'react'
import Navbar from '../Components/Navbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import EducationalLoanTable from '../Components/EducationalLoanTable'


const EducationalLoan = () => {
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
          <b>Take the next step in your education without any fear of money!</b>
        </Typography>
        <Typography
          variant="h6"
          color="initial"
          sx={{
            color: '#5D657B',
            textAlign: 'left',
            marginLeft: 28,
            paddingTop: 2,
          }}
        >
          We want to promote education for the youth of our nation. Hence we
          have introduced a unique scheme to repay the <br />
          interest on the loans by your{' '}
          <span style={{ color: '#E24748' }}> skills </span> instead of money.
          You can do this by:
        </Typography>
        <Typography
          variant="h6"
          color="initial"
          sx={{
            color: '#5D657B',
            textAlign: 'left',
            marginLeft: 28,
            paddingTop: 2,
            paddingBottom: 4,
          }}
        >
          - Take up an unpaid internship under the government. <br /> - Build a
          project for the government. <br /> - Voluntary service work for NGOs
          and the government.
        </Typography>
        <Button
          variant="text"
          color="primary"
          sx={{
            backgroundColor: '#E24748',
            width: '200px',
            // marginTop: '30px',
            color: 'white',
            ':hover': {
              bgcolor: '#2F3A56',
              transition: '0.7s',
              // color: 'black',
            },
            padding: '15px',
          }}
          target="_blank"
          href="https://forms.gle/UQS1aiYaqKneNuzv8"
        >
          Apply Now
          <span>
            {' '}
            <b> → </b>{' '}
          </span>
        </Button>
        <Typography
          variant="h6"
          color="initial"
          sx={{
            paddingTop: '30px',
            color: '#2F3A56',
            textAlign: 'left',
            marginLeft: 28,
          }}
        >
          <b>Compare Top Education Loan Offers 2023</b>
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
        <EducationalLoanTable />
      </div>
    </>
  )
}

export default EducationalLoan