import React from 'react'
import { mount, shallow } from 'enzyme'
import { FormControlLabel } from '@material-ui/core'
import CustomCheckbox from '../../components/CustomCheckbox'

describe('<CustomCheckbox />', () => {
  let customCheckbox

  beforeEach(() => {
    customCheckbox = mount(<CustomCheckbox />)
  })

  it('renders without crashing', () => {
    shallow(<CustomCheckbox />)
  })

  it('renders a FormControlLabel element', () => {
    expect(customCheckbox.find(FormControlLabel)).toHaveLength(1)
  })

  describe('defaults', () => {
    let checkbox
    let nativeCheckbox

    beforeEach(() => {
      checkbox = customCheckbox.find(FormControlLabel)
      // For the Checkbox in control prop
      nativeCheckbox = customCheckbox.find('input')
    })

    it('renders a Checkbox as default control', () => {
      expect(checkbox.props().control).toBeDefined()
    })

    it('uses an empty string as default label', () => {
      expect(checkbox.props().label).toEqual('')
    })

    it('uses an empty string as default checkbox value', () => {
      expect(nativeCheckbox.props().value).toEqual('')
    })
  })

  describe('checkbox element', () => {
    it('uses the given label as label', () => {
      customCheckbox = mount(<CustomCheckbox label='Some label' />)
      expect(customCheckbox.find(FormControlLabel).props().label).toEqual('Some label')
    })

    it('uses the given value as value', () => {
      customCheckbox = mount(<CustomCheckbox value='val1' />)
      expect(customCheckbox.find('input').props().value).toEqual('val1')
    })
  })
})
