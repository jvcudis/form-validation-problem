import React from 'react'
import { TextField, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  textField: {
    marginTop: theme.spacing(0),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  menu: {
    width: 200
  }
}))

export default function CustomSelect({
  name,
  label,
  choice,
  options,
  errors,
  setValue,
  triggerValidation,
  isSubmitted,
  register
}) {
  const classes = useStyles()
  const [colors, setSelectValue] = React.useState({ selected: '' })
  const handleChange = event => {
    const selected = event.target.value
    setValue(choice, selected)
    setSelectValue({ selected })
    if(isSubmitted) {
      triggerValidation({ name: choice })
    }
  }

  React.useEffect(() => {
    register({ name: choice, value: '' })
  }, [register, choice])

  return (
    <TextField
      id={name}
      label={label}
      name={name}
      value={colors.selected}
      className={classes.textField}
      select
      fullWidth
      error={errors[choice] !== undefined}
      onChange={handleChange}
      SelectProps={{
        MenuProps: {
          className: classes.menu,
        },
      }}
      helperText={errors[choice] && errors[choice].message}
      margin='normal'
      variant='outlined'
    >
      {options.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  )
}
