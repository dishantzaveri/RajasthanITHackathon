import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import MudraForm from './MudraForm'
import CheckStatus from './CheckStatus'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '900px',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}

function createData(name, subSchemes, apply) {
  return { name, subSchemes, apply }
}

const rows = [
  createData(
    'Mudra Loan',
    'Micro-Credit Scheme  Credit for Micro Finance Refinance Scheme for BanksMahila Uddyami SchemeMUDRA Card Equipment Finance Scheme Credit Guarantee Scheme'
  ),
  createData(
    'Credit Guarantee Funds Trust for Micro and Small Enterprises (CGTMSE)',
    'N/A'
  ),
  createData('Prime Minister’s Employment Generation Programme (PMEGP)', 'N/A'),
]

export default function CustomizedTables() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell
                align="center"
                style={{
                  color: 'white',
                  backgroundColor: '#E24748',
                  width: '450px',
                }}
              >
                Name of Scheme
              </StyledTableCell>
              <StyledTableCell
                align="center"
                style={{
                  color: 'white',
                  backgroundColor: '#E24748',
                  width: '450px',
                }}
              >
                Sub Schemes
              </StyledTableCell>
              {/* <StyledTableCell align="center">
                <Button
                  variant="text"
                  color="primary"
                  href="http://127.0.0.1:3001/login"
                  target="_blank"
                  sx={{
                    // backgroundColor: '#E24748',
                    // border: '1px solid #E24748',
                    color: '#2F3A56',
                    ':hover': {
                      bgcolor: '#2F3A56',
                      transition: '0.7s',
                      color: 'white',
                      border: '0px solid #2F3A56',

                      // color: 'black',
                    },
                  }}
                >
                  Apply
                </Button>
              </StyledTableCell> */}
              <StyledTableCell
                align="center"
                style={{
                  color: 'white',
                  backgroundColor: '#E24748',
                  width: '450px',
                }}
              >
                Apply Now
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row" align="center">
                  <a
                    href="https://www.mudra.org.in/"
                    style={{ textDecoration: 'none', color: '#2F3A56' }}
                  >
                    {row.name}
                  </a>
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ color: '#2F3A56' }}>
                  {row.subSchemes}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="text"
                    color="primary"
                    sx={{
                      // backgroundColor: '#E24748',
                      // border: '1px solid #E24748',
                      color: '#2F3A56',
                      ':hover': {
                        bgcolor: '#2F3A56',
                        transition: '0.7s',
                        color: 'white',
                        border: '0px solid #2F3A56',

                        // color: 'black',
                      },
                    }}
                    onClick={handleOpen}
                  >
                    Apply
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

        // sx={{maxWdith: '50%'}}
        // maxWidth="600px"
      >
        <Box sx={style}>
          <MudraForm />
        </Box>
      </Modal>
      {/* <div style={{margin:'auto', width: '100%'}}> */}
      <CheckStatus />
      {/* </div> */}
    </>
  )
}
