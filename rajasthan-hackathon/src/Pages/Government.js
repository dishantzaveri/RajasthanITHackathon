import React from 'react'
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
import GovNavbar from '../Components/GovtNavbar'



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

function createData(name, loan, status) {
  return { name, loan, status }
}

const rows = [
  createData('Lokita Varma', 'Mudra'),
  createData('Priyambi Hiran', 'CGTMSE'),
  createData('Sarthak Bhan', 'CGTMSE'),
  createData('Shrey Parekh', 'Mudra'),
  createData('Priyambi Hiran', 'CGTMSE'),
  createData('Sarthak Bhan', 'CGTMSE'),
  createData('Shrey Parekh', 'Mudra'),
  createData('Priyambi Hiran', 'CGTMSE'),
  createData('Sarthak Bhan', 'CGTMSE'),
]

const rows2 = [
  createData('Priyambi Hiran', 'CGTMSE'),
  createData('Sarthak Bhan', 'CGTMSE'),
  createData('Shrey Parekh', 'Mudra'),
  createData('Priyambi Hiran', 'CGTMSE'),
  createData('Sarthak Bhan', 'CGTMSE'),
  createData('Shrey Parekh', 'Mudra'),
  createData('Priyambi Hiran', 'CGTMSE'),
  createData('Sarthak Bhan', 'CGTMSE'),
]


const Government = () => {
  const [checked , setChecked ] = React.useState(false)
  const handleClick = () => {
    setChecked(true)
  }
  return (
    <>
      <GovNavbar />
      <div
        style={{
          textAlign: 'left',
          marginInline: '15%',
          marginTop: '20px',
          marginBottom: '20px',
        }}
      >
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
                  Name
                </StyledTableCell>
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
              {checked ? (
                <>
                  {rows2.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        align="center"
                      >
                        <a
                          href="https://www.mudra.org.in/"
                          style={{ textDecoration: 'none', color: '#2F3A56' }}
                        >
                          {row.name}
                        </a>
                      </StyledTableCell>
                      <StyledTableCell align="center" sx={{ color: '#2F3A56' }}>
                        {row.loan}
                      </StyledTableCell>
                      <StyledTableCell align="center" sx={{ color: '#2F3A56' }}>
                        <Button
                          variant="text"
                          color="primary"
                          sx={{
                            backgroundColor: '#3A7E55',
                            color: '#FFFFFF',
                            margin: 1,
                          }}
                          onClick={handleClick}
                        >
                          Approve
                        </Button>
                        <Button
                          variant="text"
                          color="primary"
                          sx={{
                            backgroundColor: '#E0292A',
                            color: '#FFFFFF',
                            margin: 1,
                          }}
                        >
                          Reject
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </>
              ) : (
                <>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        align="center"
                      >
                        <a
                          href="https://www.mudra.org.in/"
                          style={{ textDecoration: 'none', color: '#2F3A56' }}
                        >
                          {row.name}
                        </a>
                      </StyledTableCell>
                      <StyledTableCell align="center" sx={{ color: '#2F3A56' }}>
                        {row.loan}
                      </StyledTableCell>
                      <StyledTableCell align="center" sx={{ color: '#2F3A56' }}>
                        <Button
                          variant="text"
                          color="primary"
                          sx={{
                            backgroundColor: '#3A7E55',
                            color: '#FFFFFF',
                            margin: 1,
                          }}
                          onClick={handleClick}
                        >
                          Approve
                        </Button>
                        <Button
                          variant="text"
                          color="primary"
                          sx={{
                            backgroundColor: '#E0292A',
                            color: '#FFFFFF',
                            margin: 1,
                          }}
                        >
                          Reject
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default Government