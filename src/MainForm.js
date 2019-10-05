import React from 'react'
import useForm from 'react-hook-form'
import CustomInput from './components/CustomInput'

import { AppBar, Toolbar, Typography, Container, Paper, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative'
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  formTitle: {
    marginBottom: theme.spacing(6)
  },
  formSubTitle: {
    marginBottom: theme.spacing(2)
  },
  formSubContainer: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
}))

export default function MainForm() {
  const classes = useStyles()
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant='h6' noWrap>
            Springload Form Validation
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant='h4' className={classes.formTitle}>
            Fill out this awesome form
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container className={classes.formSubContainer}>
              <Grid item xs={6} sm={4}>
                <Typography variant="h6" className={classes.formSubTitle}>
                  Your details
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid item xs={12}>
                  <CustomInput
                    label='Email'
                    name='email'
                    type='text'
                    errors={errors}
                    register={register({ required: true })}
                  />
                  <CustomInput
                    label='Password'
                    name='password'
                    type='password'
                    errors={errors}
                    register={register({ required: true })}
                  />
                </Grid>
              </Grid>
            </Grid>
            <input type='submit' />
          </form>
        </Paper>
      </Container>
    </>
  )
}
