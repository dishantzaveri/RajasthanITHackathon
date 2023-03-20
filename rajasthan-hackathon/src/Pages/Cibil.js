import * as React from "react"
import Navbar from "../Components/Navbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button, TextField } from "@mui/material";

export default function Cibil() {
  const [json, setJson] = React.useState({
        'Age': 0,
        'Annual_Income': 0,
        'Monthly_Inhand_Salary': 0,
        'Num_Bank_Accounts': 0,
        'Num_Credit_Card': 0,
        'Interest_Rate': 6,
        'Num_of_Loan': 0,
        'Delay_from_due_date': 6,
        'Num_of_Delayed_Payment': 1,
        'Changed_Credit_Limit': 181,
        'Num_Credit_Inquiries': 110,
        'Credit_Mix': 2,
        'Outstanding_Debt': 1000,
        'Credit_Utilization_Ratio': 35,
        'Credit_History_Age': 255,
        'Total_EMI_per_month': 55,
        'Amount_invested_monthly': 240,
        'Monthly_Balance': 186,
        'Credit_Score': 1,
        'Credit-Builder Loan': 0,
        'Personal_Loan': 1,
        'Debt Consolidation Loan': 0,
        'Student Loan': 0,
        'Payday Loan': 0,
        'Mortgage Loan': 0,
        'Auto Loan': 0,
        'Home Equity Loan': 0,
        'Month_August': 0,
        'Month_February': 0,
        'Month_January': 0,
        'Month_July': 0,
        'Month_June': 0,
        'Month_March': 0,
        'Month_May': 0,
        'Occupation_Architect': 0,
        'Occupation_Developer': 0,
        'Occupation_Doctor': 1,
        'Occupation_Engineer': 0,
        'Occupation_Entrepreneur': 0,
        'Occupation_Journalist': 0,
        'Occupation_Lawyer': 0,
        'Occupation_Manager': 0,
        'Occupation_Mechanic': 0,
        'Occupation_Media_Manager': 0,
        'Occupation_Musician': 0,
        'Occupation_Scientist': 0,
        'Occupation_Teacher': 0,
        'Occupation_Writer': 0,
        'Payment_of_Min_Amount_Yes': 0,
        'Payment_Behaviour_High_spent_Medium_value_payments': 1,
        'Payment_Behaviour_High_spent_Small_value_payments': 0,
        'Payment_Behaviour_Low_spent_Large_value_payments': 0,
        'Payment_Behaviour_Low_spent_Medium_value_payments': 0,
        'Payment_Behaviour_Low_spent_Small_value_payments': 0,
  })
  const [cibil, setCibil] = React.useState('')

  const [dataToPost, setDataToPost] = React.useState({
    data: [
      {
        'Age': 0,
        'Annual_Income': 0,
        'Monthly_Inhand_Salary': 0,
        'Num_Bank_Accounts': 0,
        'Num_Credit_Card': 0,
        'Interest_Rate': 6,
        'Num_of_Loan': 0,
        'Delay_from_due_date': 6,
        'Num_of_Delayed_Payment': 1,
        'Changed_Credit_Limit': 181,
        'Num_Credit_Inquiries': 110,
        'Credit_Mix': 2,
        'Outstanding_Debt': 1000,
        'Credit_Utilization_Ratio': 35,
        'Credit_History_Age': 255,
        'Total_EMI_per_month': 55,
        'Amount_invested_monthly': 240,
        'Monthly_Balance': 186,
        'Credit_Score': 1,
        'Credit-Builder Loan': 0,
        'Personal_Loan': 1,
        'Debt Consolidation Loan': 0,
        'Student Loan': 0,
        'Payday Loan': 0,
        'Mortgage Loan': 0,
        'Auto Loan': 0,
        'Home Equity Loan': 0,
        'Month_August': 0,
        'Month_February': 0,
        'Month_January': 0,
        'Month_July': 0,
        'Month_June': 0,
        'Month_March': 0,
        'Month_May': 0,
        'Occupation_Architect': 0,
        'Occupation_Developer': 0,
        'Occupation_Doctor': 1,
        'Occupation_Engineer': 0,
        'Occupation_Entrepreneur': 0,
        'Occupation_Journalist': 0,
        'Occupation_Lawyer': 0,
        'Occupation_Manager': 0,
        'Occupation_Mechanic': 0,
        'Occupation_Media_Manager': 0,
        'Occupation_Musician': 0,
        'Occupation_Scientist': 0,
        'Occupation_Teacher': 0,
        'Occupation_Writer': 0,
        'Payment_of_Min_Amount_Yes': 0,
        'Payment_Behaviour_High_spent_Medium_value_payments': 1,
        'Payment_Behaviour_High_spent_Small_value_payments': 0,
        'Payment_Behaviour_Low_spent_Large_value_payments': 0,
        'Payment_Behaviour_Low_spent_Medium_value_payments': 0,
        'Payment_Behaviour_Low_spent_Small_value_payments': 0,
  },
    ],
  })


  const fields = [
    { field: 'Age', name: 'Age' },
    { field: 'Annual Income', name: 'Annual_Income' },
    { field: 'Monthly In-hand Salary', name: 'Monthly_Inhand_Salary' },
    { field: 'No of bank accounts', name: 'Num_Bank_Accounts' },
    { field: 'No of credit cards', name: 'Num_Credit_Card' },
    { field: 'No of Loans', name: 'Num_of_Loan' },
  ]

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setJson({ ...json, [name]: value })
    console.log(name)
    console.log(value)
    setDataToPost({data: [ json]})
  }

  

  const handleSubmit = (e) => {
    console.log('submit')
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    var raw = JSON.stringify(dataToPost)

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    }
    console.log('submit2')
    fetch('https://2d2b-117-250-3-86.in.ngrok.io/cibil/score/', requestOptions)
      .then((response) => response.json())
      .then((result) => {console.log(result)
        console.log(result.data)
        setCibil(result.data)
      })
      .catch((error) => console.log('error', error))
  }
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
          score. It is often a three-digit number ranging from 300 to 900.
        </Typography>
      </div>
      <Grid container>
        {fields.map((item) => (
          <Grid item xs={6} key={item.name}>
            <TextField variant="outlined" name={item.name} label={item.field} margin="dense" onChange={handleChange}/>
          </Grid>
        ))}
      </Grid>
      {console.log(json)}
      <Button onClick={handleSubmit} variant="contained" >Calculate Score</Button>
      {cibil? <Typography variant="body1" color="initial">Your cibil score is {cibil}</Typography>: ''}
      
    </>
  );
}
