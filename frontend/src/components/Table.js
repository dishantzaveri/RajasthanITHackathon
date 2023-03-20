import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "../components/Chip";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Mr. Shrey Parekh", 159, "Web", 4.0),
  createData("Ms. Priyambi Hiran", 237, "Tech", 4.3),
  createData("Mr. Sarthak Bhan", 262, "Marketing", 6.0),
  createData("Mr. Dishant Zaveri", 305, "Sales", 4.3),
  createData("Ms. Lokita Varma", 356, "Consultancy", 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer
      style={{
        width: "65rem",
        marginInline: "15rem",
        marginBlock: "5rem"
      }}
      component={Paper}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              style={{ backgroundColor: "#E24748", color: "white" }}
              align="center"
            >
              Entrepreneur
            </TableCell>
            <TableCell
              style={{ backgroundColor: "#E24748", color: "white" }}
              align="center"
            >
              Tags
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" align="center" scope="row">
                {row.name}
              </TableCell>
              <Chip word={row.fat} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
