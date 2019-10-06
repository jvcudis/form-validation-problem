import React from 'react'
import { FormControl, FormGroup, FormLabel, FormHelperText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CustomCheckbox from './components/CustomCheckbox'

const useStyles = makeStyles(theme => ({
  formContainer: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
}))

export default function AnimalOptions({
  name,
  label,
  options,
  errors,
  setValue,
  triggerValidation,
  isSubmitted,
  getValues,
  register
}) {
  const classes = useStyles()
  const animalNames = options.map(opt => {
    return { name: opt.name }
  })
  const hasErrors = errors['animal.bear'] || errors['animal.tiger'] || errors['animal.snake'] || errors['animal.donkey']

  const handleChange = name => async (event) => {
    setValue(name, event.target.checked)

    // Also trigger validation when form has been submitted
    if(isSubmitted) {
      await triggerValidation(animalNames)
    }
    // When tiger is selected/unselected
    if (!getValues()['animal.tiger']) {
      setValue('tiger_type', '')
    } else {
      await triggerValidation({ name: 'tiger_type' })
    }
  }

  React.useEffect(() => {
    animalNames.map(animal => register({ name: animal.name, value: false }))
  }, [register, animalNames])

  return (
    <FormControl component="fieldset" error={(hasErrors !== undefined)} className={classes.formContainer}>
      <FormLabel>{label}</FormLabel>
      <FormGroup>
        {options.map(option => (
          <CustomCheckbox key={option.name} name={option.name} value={option.value} label={option.label} handleChange={handleChange} />
        ))}
      </FormGroup>
      <FormHelperText>{hasErrors && 'Please select at least two animals.'}</FormHelperText>
    </FormControl>
  )
}
