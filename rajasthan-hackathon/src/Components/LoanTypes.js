import * as React from 'react'
import Grid from '@mui/material/Grid'
import FormLabel from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
// import HighlightedCode from 'docs/src/modules/components/HighlightedCode'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import eduLoan from '../Images/eduLoan.png'
import perLoan from '../Images/perLoan.png'
import busiLoan from '../Images/busiLoan.png'
import { Link } from 'react-router-dom'


export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(8)

  const jsx = `
<Grid container spacing={${spacing}}>
`

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={4}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          <Grid key={0} item>
            <Card
              sx={{
                height: 280,
                width: 320,
                marginTop: '30px',
                ':hover': {
                  transform: 'translate3D(0,-1px,0) scale(1.03)',
                  backgroundColor: '#D8E8EB',
                  boxShadow:
                    '8px 28px 50px rgba(39,44,49,.07), 1px 6px 12px rgba(39,44,49,.04)',
                  transition: 'all .4s ease',
                },
              }}
            >
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
                  <b>Educational Loan</b>
                </Typography>
                <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                  <img
                    src={eduLoan}
                    alt="eduloan"
                    height="100px"
                    width="100px"
                  />
                </div>
                <Link to="/educationalLoans" style={{ textDecoration: 'none' }}>
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
                    Check Out
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>

          <Grid key={1} item>
            <Card
              sx={{
                height: 280,
                width: 320,
                marginTop: '30px',
                ':hover': {
                  transform: 'translate3D(0,-1px,0) scale(1.03)',
                  backgroundColor: '#D8E8EB',
                  boxShadow:
                    '8px 28px 50px rgba(39,44,49,.07), 1px 6px 12px rgba(39,44,49,.04)',
                  transition: 'all .4s ease',
                },
              }}
            >
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
                  <b>Business Loan</b>
                </Typography>
                <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                  <img
                    src={busiLoan}
                    alt="eduloan"
                    height="100px"
                    width="100px"
                  />
                </div>
                <Link to="/businessLoans" style={{ textDecoration: 'none' }}>
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
                    Check Out
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>

          <Grid key={5} item>
            <Card
              sx={{
                height: 280,
                width: 320,
                marginTop: '30px',
                ':hover': {
                  transform: 'translate3D(0,-1px,0) scale(1.03)',
                  backgroundColor: '#D8E8EB',
                  boxShadow:
                    '8px 28px 50px rgba(39,44,49,.07), 1px 6px 12px rgba(39,44,49,.04)',
                  transition: 'all .4s ease',
                },
              }}
            >
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
                  <b>Personal Loan</b>
                </Typography>
                <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                  <img
                    src={perLoan}
                    alt="eduloan"
                    height="100px"
                    width="100px"
                  />
                </div>
                <Link to="/personalLoans" style={{ textDecoration: 'none' }}>
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
                    Check Out
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
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
          Find other loans
          <span>
            {' '}
            <b>→</b>{' '}
          </span>
        </Button>
      </Grid>
    </Grid>
  )
}
