import React from 'react'
import useForm from 'react-hook-form'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  textField: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}))

export default function MainForm() {
  const classes = useStyles()
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id='email'
        label='Email'
        name='email'
        className={classes.textField}
        type='text'
        fullWidth
        error={errors.email !== undefined}
        inputRef={register({ required: true })}
        InputLabelProps={{
          shrink: true,
        }}
        helperText={errors.email && 'This field is required'}
        variant='outlined'
      />
      <TextField
        id='password'
        label='Password'
        name='password'
        className={classes.textField}
        type='password'
        fullWidth
        error={errors.password !== undefined}
        inputRef={register({ required: true })}
        InputLabelProps={{
          shrink: true,
        }}
        helperText={errors.password && 'This field is required'}
        variant='outlined'
      />
      <input type='submit' />
    </form>
  )
}
