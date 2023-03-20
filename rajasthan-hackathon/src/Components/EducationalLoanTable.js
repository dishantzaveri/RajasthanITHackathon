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

function createData(name, subSchemes, apply) {
  return { name, subSchemes, apply }
}

const rows = [
  createData('PNB', '8.55% onwards', 'Rs. 250 plus GST'),
  createData(
    'SBI',
    '8.55% onwards',
    'Up to Rs.10,000. \nNo charged required for loan amount below Rs.20 lakh \nLoan amount above Rs.20 lakh: Rs.10,000 (plus taxes)'
  ),
  createData('Axis Bank', '13.70% to 15.20%', '2.00% of the loan plus GST'),
  createData(
    'Bank of Baroda',
    '9.15% onwards',
    'No processing charges up to Rs.7.50 lakh. 1% of loan amount up to Rs.10,000'
  ),
]

export default function CustomizedTables() {
  return (
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
              Name of Bank
            </StyledTableCell>
            <StyledTableCell
              align="center"
              style={{
                color: 'white',
                backgroundColor: '#E24748',
                width: '450px',
              }}
            >
              Interest Rate (p.a.)
            </StyledTableCell>
            <StyledTableCell
              align="center"
              style={{
                color: 'white',
                backgroundColor: '#E24748',
                width: '450px',
              }}
            >
              Processing Fees
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.subSchemes}</StyledTableCell>
              <StyledTableCell align="center">{row.apply}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
