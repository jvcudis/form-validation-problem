import React from 'react'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  textField: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  }
}))

export default function CustomInput({
  name = 'textfield',
  label = 'Enter text',
  type = 'text',
  errors = {},
  register = () => {}
}) {
  const classes = useStyles()
  const hasError = errors[name] !== undefined
  console.log(register)
  return (
    <TextField
      id={name}
      name={name}
      label={label}
      className={classes.textField}
      type={type}
      fullWidth
      error={hasError}
      inputRef={register}
      InputLabelProps={{
        shrink: true
      }}
      helperText={hasError ? (errors[name].message || `${label} is invalid.`) : ''}
      variant='outlined'
    />
  )
}
