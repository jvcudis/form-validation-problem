import React from 'react'
import { mount, shallow } from 'enzyme'
import { Button } from '@material-ui/core'
import CustomButton from '../../components/CustomButton'

describe('<CustomButton />', () => {
  let customButton

  beforeEach(() => {
    customButton = mount(<CustomButton />)
  })

  it('renders without crashing', () => {
    shallow(<CustomButton />)
  })

  it('contains an input element', () => {
    expect(customButton.find('input')).toHaveLength(1)
  })

  it('contains a Button element', () => {
    expect(customButton.find(Button)).toHaveLength(1)
  })

  describe('input element', () => {
    describe('defaults', () => {
      let input

      beforeEach(() => {
        input = customButton.find('input')
      })

      it('uses \'submit\' as default type', () => {
        expect(input.props().type).toEqual('submit')
      })

      it('uses \'submit-button\' as default name', () => {
        expect(input.props().id).toEqual('submit-button')
      })

      it('is hidden by default', () => {
        expect(input.hasClass(/\w+(-hiddenInput-)[0-9]+/)).toEqual(true)
      })
    })

    it('uses given type', () => {
      customButton = mount(<CustomButton type='text' />)
      const input = customButton.find('input')
      expect(input.props().type).toEqual('text')
    })

    it('uses given name as id', () => {
      customButton = mount(<CustomButton name='some-name' />)
      const input = customButton.find('input')
      expect(input.props().id).toEqual('some-name')
    })
  })

  describe('Button element', () => {
    describe('defaults', () => {
      let button

      beforeEach(() => {
        button = customButton.find(Button)
      })

      it('uses \'primary\' as default color', () => {
        expect(button.props().color).toEqual('primary')
      })

      it('uses empty text as default label', () => {
        expect(button.text()).toEqual('')
      })
    })

    it('uses given button color', () => {
      customButton = mount(<CustomButton color='secondary' />)
      const button = customButton.find(Button)
      expect(button.props().color).toEqual('secondary')
    })

    it('uses given button label', () => {
      customButton = mount(<CustomButton label='some label' />)
      const button = customButton.find(Button)
      expect(button.text()).toEqual('some label')
    })
  })
})
