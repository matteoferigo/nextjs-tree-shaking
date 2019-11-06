import React from 'react'
import { shallow } from 'enzyme'
import Counter from './index'


describe('Counter', () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallow(<Counter />)
  })

  describe('when user clicks button', () => {
    beforeEach(() => {
      const button = wrapper.find('#button')
      button.simulate('click')
    })

    it('should increase counter', () => {
      const count = wrapper.find('#count')
      expect(count.text()).toEqual('1')
    })
  })
})
