import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  hiddenInput: {
    display: 'none'
  }
}))

export default function CustomButton({
  name = 'submit-button',
  label = '',
  type = 'submit',
  color = 'primary'
}) {
  const classes = useStyles()
  return (
    <>
      <input type={type} id={name} className={classes.hiddenInput} />
      <label htmlFor={name}>
        <Button variant='contained' color={color} component='span'>
          {label}
        </Button>
      </label>
    </>
  )
}
