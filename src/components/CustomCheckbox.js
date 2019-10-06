import React from 'react'
import { FormControlLabel, Checkbox } from '@material-ui/core'

export default function CustomCheckbox({
  name,
  value = '',
  label = '',
  handleChange = (name) => {}
}) {
  return (
    <FormControlLabel
      control={<Checkbox onChange={handleChange(name)} value={value} />}
      label={label}
    />
  )
}
