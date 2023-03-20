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
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.subSchemes}</StyledTableCell>
              <StyledTableCell align="center">
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
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
