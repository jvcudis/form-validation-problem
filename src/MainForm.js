import React from 'react'
import useForm from 'react-hook-form'
import CustomInput from './components/CustomInput'
import CustomButton from './components/CustomButton'
import CustomSelect from './components/CustomSelect'
import AnimalOptions from './AnimalOptions'

import { AppBar, Toolbar, Typography, Container, Paper, Grid } from '@material-ui/core'
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
    textAlign: 'center',
    marginBottom: theme.spacing(6)
  },
  formSubTitle: {
    marginBottom: theme.spacing(2)
  },
  formSubContainer: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  },
  formButtons: {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: theme.spacing(1)
  }
}))

const colorOptions = [
  { label: 'Blue', value: 'blue' },
  { label: 'Green', value: 'green' },
  { label: 'Red', value: 'red' },
  { label: 'Black', value: 'black' },
  { label: 'Brown', value: 'brown' }
]

const animalOptions = [
  { name: 'animal.bear', value: 'bear', label: 'Bear' },
  { name: 'animal.tiger', value: 'tiger', label: 'Tiger' },
  { name: 'animal.snake', value: 'snake', label: 'Snake' },
  { name: 'animal.donkey', value: 'donkey', label: 'Donkey' },
]

export default function MainForm() {
  const classes = useStyles()
  const { register, handleSubmit, errors, setValue, getValues, triggerValidation, watch, formState } = useForm()

  const [account, setAccount] = React.useState({ created: false, data: {} })
  const onSubmit = data => {
    const selectedAnimals = animalOptions
      .filter(animal => data.animal[animal.value])
      .map(animal => animal.label)

    setAccount({
      created: true,
      data: {
        email: data.email,
        colour: data.color_choice,
        animals: selectedAnimals,
        tigerType: data.tiger_type
      }
    })
  }

  const getAnimalSelected = () => {
    const values = getValues()
    const selectedList = animalOptions.map(animal => {
      return values[animal.name] ? animal.name : null
    })
    return selectedList.filter(value => value !== null)
  }

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant='h6' noWrap>
            (っ◕‿◕)っ Springload Form Validation Problem
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.layout}>
        {account.created ? (
          <Paper className={classes.paper}>
            <Typography variant='h4' id='account-created-message' className={classes.formTitle}>
              Yay! Account successfully created for <strong>{account.data.email}</strong>!
            </Typography>
            <Typography variant='h5' id='account-created-details' align='center'>
              You have chosen <strong>{account.data.colour}</strong> for colour, also
                {account.data.animals.map((animal, idx) => (
                  <React.Fragment key={idx}>{(idx === account.data.animals.length - 1) ? ' and ' : (idx === 0 ? ' ' : ', ')}
                    <strong>{animal}</strong>
                  </React.Fragment>
                ))} for animals {account.data.tigerType ? (<>with tiger type value set to <strong>{account.data.tigerType}</strong>.</>) : (<>.</>)}
            </Typography>
          </Paper>
        ) : (
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
                  <CustomInput
                    name='email'
                    label='Email'
                    type='text'
                    errors={errors}
                    register={register({
                      pattern: {
                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: 'Please input a valid email.'
                      }
                    })}
                  />
                  <CustomInput
                    name='password'
                    label='Password'
                    type='password'
                    errors={errors}
                    register={register({
                      pattern: {
                        value: /^([a-zA-Z0-9@*#]{8,})$/,
                        message: 'Please input a valid password with min length of 8.'
                      }
                    })}
                  />
                </Grid>
              </Grid>
              <Grid container className={classes.formSubContainer}>
                <Grid item xs={6} sm={4}>
                  <Typography variant="h6" className={classes.formSubTitle}>
                    Your animal
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomSelect
                    name='colour'
                    label='Choose colour'
                    choice='color_choice'
                    options={colorOptions}
                    errors={errors}
                    setValue={setValue}
                    triggerValidation={triggerValidation}
                    isSubmitted={formState.isSubmitted}
                    register={
                      register({
                        required: 'Please select a colour.'
                      })
                    }
                  />
                  <AnimalOptions
                    name='animal'
                    label='Animal'
                    options={animalOptions}
                    errors={errors}
                    setValue={setValue}
                    triggerValidation={triggerValidation}
                    isSubmitted={formState.isSubmitted}
                    getValues={getValues}
                    register={
                      register({
                        validate: () => {
                          return getAnimalSelected().length > 1
                        }
                      })
                    }
                  />
                  {watch('animal.tiger') && <CustomInput
                    name='tiger_type'
                    label='Type of tiger'
                    type='text'
                    errors={errors}
                    register={register({
                      pattern: {
                        value: /^[-\w\s]+$/,
                        message: 'Please input a string value.'
                      }
                    })}
                  />}
                </Grid>
              </Grid>
              <Grid container className={classes.formSubContainer}>
                <Grid item xs={6} sm={4} />
                <Grid item xs={12} sm={6} className={classes.formButtons}>
                  <CustomButton
                    name='create-account'
                    label='Create account'
                    type='submit'
                  />
                </Grid>
              </Grid>
            </form>
          </Paper>
        )}
      </Container>
    </>
  )
}
