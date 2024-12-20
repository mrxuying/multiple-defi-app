import React from 'react'
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment
} from '@mui/material'

export default function Staking() {
  return (
    <div>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">ST</InputAdornment>}
          label="Amount"
          required
        />
      </FormControl>
    </div>
  )
}
