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
  name = '',
  label = '',
  type = 'text',
  errors = {},
  register = () => {}
}) {
  const classes = useStyles()
  const hasError = errors[name] !== undefined
  return (
    <TextField
      id={name}
      label={label}
      name={name}
      className={classes.textField}
      type={type}
      fullWidth
      error={hasError}
      inputRef={register}
      InputLabelProps={{
        shrink: true,
      }}
      helperText={hasError && (errors[name].message || `${label} is invalid.`)}
      variant='outlined'
    />
  )
}
