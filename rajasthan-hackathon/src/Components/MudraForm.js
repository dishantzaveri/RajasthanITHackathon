import React from 'react'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import {
  Box,
  Grid,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  Button, 
  Radio
} from '@mui/material/'




const MudraForm = () => {
  const handleSubmit = () => {console.log('submitted')}
  return (
    <>
      <Typography
        variant="h5"
        color="initial"
        sx={{ color: '#2F3A56', marginBottom: 1 }}
      >
        Apply for the MUDRA Loan
      </Typography>
      <Typography variant="body1" color="initial">
        Section A. For Office Use:
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <TextField
              autoComplete="enterprise-name"
              name="enterpriseName"
              required
              fullWidth
              id="enterpriseName"
              label="Enterprise Name"
              autoFocus
              size="small"
              // onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              autoComplete="SI_no"
              name="SI_no"
              required
              fullWidth
              id="SI_no"
              label="Application SI Number"
              autoFocus
              size="small"
              // onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              autoComplete="branch-name"
              name="branchName"
              required
              fullWidth
              id="branchName"
              label="Branch Name"
              autoFocus
              size="small"
              // onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl sx={{ mt: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label-plateSize">
                Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-label-plateSize"
                id="demo-simple-select-plateSize"
                name="category"
                // value={json.description.plateSize}
                label="Category"
                // onChange={handleChangeDesc}
                size="small"
              >
                <MenuItem value={1}>Shishu</MenuItem>
                <MenuItem value={2}>Kishore</MenuItem>
                <MenuItem value={3}>Tarun</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Typography
            variant="body1"
            color="initial"
            sx={{ marginBottom: -2, marginRight: '20px' }}
          >
            Section B. Business Information:
          </Typography>
          <Grid item xs={12} sx={{ marginBottom: -3 }}>
            <TextField
              required
              fullWidth
              id="deliveryAddress"
              label="Current Business Address"
              name="deliveryAddress"
              autoComplete="deliveryAddress"
              size="small"
              // onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ marginBottom: -3 }}>
            <TextField
              required
              fullWidth
              id="deliveryAddress"
              label="Telephone Number"
              name="deliveryAddress"
              autoComplete="deliveryAddress"
              size="small"
              // onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ marginBottom: -3 }}>
            <TextField
              required
              fullWidth
              id="deliveryAddress"
              label="Mobile Number"
              name="deliveryAddress"
              autoComplete="deliveryAddress"
              size="small"
              // onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6} sx={{ marginBottom: -3 }}>
            <TextField
              required
              fullWidth
              id="deliveryAddress"
              label="Email Address"
              name="deliveryAddress"
              autoComplete="deliveryAddress"
              size="small"
              // onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ marginBottom: -3 }}>
            <TextField
              required
              fullWidth
              id="deliveryAddress"
              label="Date of Commencement (DD-MM-YYYY)"
              name="deliveryAddress"
              autoComplete="deliveryAddress"
              size="small"
              // onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              // id="deliveryAddress"
              label="Current Business Activity"
              name="deliveryAddress"
              autoComplete="deliveryAddress"
              size="small"
              // onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="deliveryAddress"
              label="Proposed Business Activity"
              name="deliveryAddress"
              autoComplete="deliveryAddress"
              size="small"
              // onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={4} sx={{ marginLeft: 2 }}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Is unit registered?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="baking"
                // value={json.description.baking}
                // onChange={handleChangeDesc}
              >
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="Yes"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="No"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={9} sx={{ marginLeft: -18 }}>
            {' '}
            <TextField
              fullWidth
              id="deliveryAddress"
              maxWdith="400px"
              label="If registered, Please mention:Registration no. and the Act under which registered: "
              name="deliveryAddress"
              autoComplete="deliveryAddress"
              size="small"
              // onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: -3 }}>
            <TextField
              fullWidth
              name="descriptiveText"
              label="Registered Address"
              type="description"
              id="description"
              autoComplete="description"
              size="small"
              // onChange={handleChangeDesc}
            />

            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Grid item xs={12} sm={4}>
                <FormControl sx={{ mt: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-label-plateSize">
                    Skill Level
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label-plateSize"
                    id="demo-simple-select-plateSize"
                    name="category"
                    // value={json.description.plateSize}
                    label="Category"
                    // onChange={handleChangeDesc}
                    size="small"
                  >
                    <MenuItem value={1}>Skill Certified (1)</MenuItem>
                    <MenuItem value={2}>Self Skilled (2)</MenuItem>
                    <MenuItem value={3}>Unskilled (3)</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl sx={{ mt: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-label-plateSize">
                    Skill Level
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label-plateSize"
                    id="demo-simple-select-plateSize"
                    name="category"
                    // value={json.description.plateSize}
                    label="Social Category"
                    // onChange={handleChangeDesc}
                    size="small"
                  >
                    <MenuItem value={1}>SC</MenuItem>
                    <MenuItem value={2}>ST</MenuItem>
                    <MenuItem value={3}>OBC</MenuItem>
                    <MenuItem value={4}>Minority Community</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl sx={{ mt: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-label-plateSize">
                    If Minority Community
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label-plateSize"
                    id="demo-simple-select-plateSize"
                    name="category"
                    // value={json.description.plateSize}
                    label="Category"
                    // onChange={handleChangeDesc}
                    size="small"
                  >
                    <MenuItem value={1}>Buddhists</MenuItem>
                    <MenuItem value={2}>Muslims</MenuItem>
                    <MenuItem value={3}>Christians</MenuItem>
                    <MenuItem value={4}>Sikhs</MenuItem>
                    <MenuItem value={5}>Jains</MenuItem>
                    <MenuItem value={6}>Zoroastrians</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => handleSubmit()}
        >
          Submit
        </Button>
      </Box>
    </>
  )
}

export default MudraForm