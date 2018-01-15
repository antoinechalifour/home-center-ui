jest.mock('./SwitchableLight', () => 'SwitchableLight')

import React from 'react'
import { shallow } from 'enzyme'
import { SwitchableLightContainer } from '.'

describe('scenes/Lights/SwitchableLight', () => {
  describe('_onToggleLight', () => {
    const tests = [
      {
        props: {
          id: '42',
          status: 'on',
          switchLight: jest.fn(),
          updateLightInformation: jest.fn()
        },
        expected: {
          variables: {
            input: {
              id: '42',
              isOn: false
            }
          }
        }
      },
      {
        props: {
          id: '42',
          status: 'off',
          switchLight: jest.fn(),
          updateLightInformation: jest.fn()
        },
        expected: {
          variables: {
            input: {
              id: '42',
              isOn: true
            }
          }
        }
      }
    ]

    tests.forEach(t =>
      it(`Should call props.switchLight() with correct params`, () => {
        const wrapper = shallow(<SwitchableLightContainer {...t.props} />)

        wrapper.instance()._onToggleLight()

        expect(t.props.switchLight.mock.calls.length).toEqual(1)
        expect(t.props.switchLight.mock.calls[0][0]).toEqual(t.expected)
      })
    )
  })

  describe('_onUpdateName', () => {
    it('Should call props.updateLightInformation with correct params', () => {
      const props = {
        id: '42',
        status: 'on',
        switchLight: jest.fn(),
        updateLightInformation: jest.fn()
      }
      const wrapper = shallow(<SwitchableLightContainer {...props} />)

      wrapper.instance()._onUpdateName('new name')

      expect(props.updateLightInformation.mock.calls.length).toEqual(1)
      expect(props.updateLightInformation.mock.calls[0][0]).toEqual({
        variables: {
          input: {
            id: '42',
            name: 'new name'
          }
        }
      })
    })
  })
})
