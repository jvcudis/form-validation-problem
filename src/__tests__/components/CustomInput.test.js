import React from 'react'
import { mount, shallow } from 'enzyme'
import { TextField } from '@material-ui/core'
import CustomInput from '../../components/CustomInput'

describe('<CustomInput />', () => {
  let customInput

  beforeEach(() => {
    customInput = mount(<CustomInput />)
  })

  it('renders without crashing', () => {
    shallow(<CustomInput />)
  })

  it('contains a TextField element', () => {
    expect(customInput.find(TextField)).toHaveLength(1)
  })

  describe('TextField element', () => {
    describe('defaults', () => {
      let textfield

      beforeEach(() => {
        textfield = customInput.find(TextField)
      })

      it('uses \'textfield\' as default id', () => {
        expect(textfield.props().id).toEqual('textfield')
      })

      it('uses \'textfield\' as default name', () => {
        expect(textfield.props().name).toEqual('textfield')
      })

      it('uses \'Enter text\' as default label', () => {
        expect(textfield.props().label).toEqual('Enter text')
      })

      it('has a \'textField\' class', () => {
        expect(textfield.hasClass(/\w+(-textField-)[0-9]+/)).toEqual(true)
      })

      it('uses \'text\' as default type', () => {
        expect(textfield.props().type).toEqual('text')
      })

      it('has a \'fullWidth\' property', () => {
        expect(textfield.props().fullWidth).toEqual(true)
      })

      it('sets a false error value by default', () => {
        expect(textfield.props().error).toEqual(false)
      })

      it('has an undefined inputRef function by default', () => {
        const inputRef = textfield.props().inputRef
        expect(inputRef()).toEqual(undefined)
      })

      it('has a default \'InputLabelProps\' value', () => {
        expect(textfield.props().InputLabelProps).toEqual({ shrink: true })
      })

      it('has an default empty helperText value', () => {
        expect(textfield.props().helperText).toEqual('')
      })

      it('uses \'outlined\' as default variant', () => {
        expect(textfield.props().variant).toEqual('outlined')
      })
    })

    it('uses given name as id', () => {
      customInput = mount(<CustomInput name='somename' />)
      expect(customInput.find(TextField).props().id).toEqual('somename')
    })

    it('uses given name as name', () => {
      customInput = mount(<CustomInput name='somename' />)
      expect(customInput.find(TextField).props().name).toEqual('somename')
    })

    it('uses given label as label', () => {
      customInput = mount(<CustomInput label='Some label' />)
      expect(customInput.find(TextField).props().label).toEqual('Some label')
    })

    it('uses given type as type', () => {
      customInput = mount(<CustomInput type='password' />)
      expect(customInput.find(TextField).props().type).toEqual('password')
    })

    it('sets a true error value when errors are given', () => {
      const errors = { field1: { type: 'required', message: '' }}
      customInput = mount(<CustomInput name='field1' errors={errors} />)
      expect(customInput.find(TextField).props().error).toEqual(true)
    })

    it('renders the error message as helperText when error message is given', () => {
      const errors = { field1: { type: 'required', message: 'Invalid value' }}
      customInput = mount(<CustomInput name='field1' errors={errors} />)
      expect(customInput.find(TextField).props().helperText).toEqual('Invalid value')
    })

    it('renders a default error message as helperText when error message is not given', () => {
      const errors = { field1: { type: 'required' }}
      customInput = mount(<CustomInput name='field1' label='Value' errors={errors} />)
      expect(customInput.find(TextField).props().helperText).toEqual('Value is invalid.')
    })

    it('sets the inputRef value when register is given', () => {
      const register = () => { return true }
      customInput = mount(<CustomInput register={register} />)
      const inputRef = customInput.find(TextField).props().inputRef
      expect(inputRef()).toEqual(true)
    })
  })
})
