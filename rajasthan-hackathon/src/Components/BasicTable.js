import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
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

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              style={{ color: 'white', backgroundColor: '#E24748' }}
            >
              Name of Scheme
            </TableCell>
            <TableCell
              align="right"
              style={{ color: 'white', backgroundColor: '#E24748', width: '400px' }}
            >
              Sub Schemes
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" align="center" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
