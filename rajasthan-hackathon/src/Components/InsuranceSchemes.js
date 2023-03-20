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

function createData(planName, planType, entryAge, sumAssured) {
  return { planName, planType, entryAge, sumAssured }
}

const rows = [
  createData(
    'Aditya Birla Sun Life Insurance',
    'Term',
    '18 years to 65 years',
    'Minimum - Rs.25 lakh'
  ),
  createData(
    'SBI Life eShield',
    'Term',
    '18 years to 65 years',
    'Minimum - Rs.20 lakh'
  ),
  createData(
    'HDFC Life Click 2 Protect Plus',
    'Term',
    '18 years to 65 years',
    'Minimum - Rs.25 lakh'
  ),
  createData(
    'Future Generali Care Plus',
    'Term',
    '18 years to 65 years',
    'Minimum - Rs.15 lakh'
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
              Plan Name
            </StyledTableCell>
            <StyledTableCell
              align="center"
              style={{
                color: 'white',
                backgroundColor: '#E24748',
                width: '450px',
              }}
            >
              Plan Type
            </StyledTableCell>
            <StyledTableCell
              align="center"
              style={{
                color: 'white',
                backgroundColor: '#E24748',
                width: '450px',
              }}
            >
              Entry Age
            </StyledTableCell>
            <StyledTableCell
              align="center"
              style={{
                color: 'white',
                backgroundColor: '#E24748',
                width: '450px',
              }}
            >
              Sum Assured
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.planName}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.planName}
              </StyledTableCell>
              <StyledTableCell align="center">{row.planType}</StyledTableCell>
              <StyledTableCell align="center">{row.entryAge}</StyledTableCell>
              <StyledTableCell align="center">{row.sumAssured}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
