import React from 'react'
import { shallow } from 'enzyme'
import MainForm from '../MainForm'

it('renders without crashing', () => {
  shallow(<MainForm />)
})
