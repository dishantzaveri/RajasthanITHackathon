import LoanTable from '../Components/LoanTable';
import Navbar from '../Components/Navbar';
import InsuranceTypes from '../Components/InsuranceTypes';
import InsuranceSchemes from '../Components/InsuranceSchemes';
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
          you financially! Browse through the categories <br /> below to know
          more.
        </Typography>
      </div>
      <div style={{ maxWidth: '70%', margin: 'auto' }}>
        <InsuranceTypes />
      </div>
      <div sx={{ alignItems: 'left', paddingTop: '20px' }}>
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
          <b>
            Some popular Insurance Schemes offered by some of the leading
            insurance companies in India:
          </b>
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
        <InsuranceSchemes />
      </div>
    </>
  )
}
