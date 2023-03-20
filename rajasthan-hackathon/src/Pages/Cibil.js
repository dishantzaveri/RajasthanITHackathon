import Navbar from "../Components/Navbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button, TextField } from "@mui/material";

export default function Cibil() {
  const data = [
    { field: "Age" },
    { field: "Annual Income" },
    { field: "Monthly In-hand salary" },
    { field: "No of bank accounts" },
    { field: "No of credit cards" },
    { field: "No of Loans" },
  ];

  return (
    <>
      <Navbar />
      <div sx={{ alignItems: "left" }}>
        <Typography
          variant="h4"
          color="initial"
          sx={{
            paddingTop: "50px",
            color: "#2F3A56",
            textAlign: "left",
            marginInline: 28,
          }}
        >
          <b>Credit Score</b>
        </Typography>
        <Typography
          variant="h6"
          color="initial"
          sx={{
            color: "#5D657B",
            textAlign: "left",
            marginInline: 28,
          }}
        >
          A credit score is a measure of an individual’s eligibility for
          borrowing money. Several financial aspects combine to form the credit
          score. It is often a three-digit number ranging from 300 to 900
        </Typography>
      </div>
      <Grid container>
        {data.map((item) => (
          <Grid item xs={6} key={item}>
            <TextField variant="outlined" label={item.field} margin="dense" />
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" >Calculate Score</Button>
    </>
  );
}
