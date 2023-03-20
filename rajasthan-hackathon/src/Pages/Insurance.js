import LoanTable from '../Components/LoanTable';
import Navbar from '../Components/Navbar';
import InsuranceTypes from '../Components/InsuranceTypes';
import Typography from '@mui/material/Typography'

export default function Insurance() {
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
          <b>Insurance</b>
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
          The government has several provisions for you and would love to help
          you financially! Browse through the categories <br />  below to know more.
        </Typography>
      </div>
      <div sx={{marginInline: '40%'}}>
      <InsuranceTypes />
      </div>
    </>
  )
}
