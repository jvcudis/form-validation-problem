import React from 'react'
import useForm from 'react-hook-form'
import CustomInput from './components/CustomInput'

export default function MainForm() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <input type='submit' />
    </form>
  )
}
