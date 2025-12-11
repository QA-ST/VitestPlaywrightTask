import { useState } from 'react'
import './App.css'

import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function App() {
  const [checked, setChecked] = useState(false)
  const [textValue, setTextValue] = useState('')
  const [autoValue, setAutoValue] = useState(null)

  const options = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']

  return (
    <Box sx={{ p: 3 }}>
      <Stack spacing={3} maxWidth={600}>
        <Typography variant="h4">Material UI Examples</Typography>

        
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
          }
          label={checked ? 'Checked' : 'Unchecked'}
        />

        <TextField
          label="Enter some text"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          variant="outlined"
        />

        <Autocomplete
          options={options}
          value={autoValue}
          onChange={(event, newValue) => setAutoValue(newValue)}
          renderInput={(params) => (
            <TextField {...params} label="Choose a fruit" variant="outlined" />
          )}
        />

      </Stack>
    </Box>
  )
}

export default App
