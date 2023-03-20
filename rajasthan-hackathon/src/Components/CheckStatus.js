import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

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

function createData(name, status) {
  return { name, status }
}

const rows = [
  createData(
    'CGTMSE Loan',
    'Rejected'
  ),
  createData(
    'MUDRA Loan',
    'Approved'
  ),
]
export default function BasicModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button
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
          marginLeft: '465px',
        }}
        onClick={handleOpen}
      >
        Check Status
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h5" color="initial" sx={{ color: '#2F3A56' }}>
            The status of your application is as follows:{' '}
          </Typography>
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
                    Loan
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    style={{
                      color: 'white',
                      backgroundColor: '#E24748',
                      width: '450px',
                    }}
                  >
                    Status
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
                      {row.status}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </div>
  )
}
