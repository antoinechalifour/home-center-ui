import React from 'react'
import { shallow } from 'enzyme'
import GetPosition from '.'

describe('scenes/Weather/GetPosition', () => {
  beforeEach(() => {
    // Reset the geolocation API mocks
    global.navigator.geolocation.getCurrentPosition.mockReset()
  })

  it('Should ask for user position on mount', () => {
    const render = () => null
    const wrapper = shallow(<GetPosition render={render} />)

    expect(
      global.navigator.geolocation.getCurrentPosition.mock.calls.length
    ).toBe(1)
  })

  it('Should call render prop with null arguments when the position is not acquired', () => {
    const render = jest.fn()
    const wrapper = shallow(<GetPosition render={render} />)

    expect(render.mock.calls.length).toBe(1)
    expect(render.mock.calls[0][0]).toEqual({ err: null, position: null })
  })

  it('Should call render prop with an error when the location is not available', () => {
    const render = jest.fn()
    const err = new Error('Location not available')
    const getCurrentPosition = jest.fn((onSuccess, onError) => onError(err))

    global.navigator.geolocation.getCurrentPosition = getCurrentPosition

    const wrapper = shallow(<GetPosition render={render} />)

    expect(render.mock.calls.length).toBe(2)
    expect(render.mock.calls[0][0]).toEqual({ position: null, err: null })
    expect(render.mock.calls[1][0]).toEqual({ position: null, err })
  })

  it('Should call render prop with the position when available', () => {
    const render = jest.fn()
    const position = { coords: { latitude: 1, longitude: 2 } }
    const getCurrentPosition = jest.fn(onSuccess => onSuccess(position))

    global.navigator.geolocation.getCurrentPosition = getCurrentPosition

    const wrapper = shallow(<GetPosition render={render} />)

    expect(render.mock.calls.length).toBe(2)
    expect(render.mock.calls[0][0]).toEqual({ position: null, err: null })
    expect(render.mock.calls[1][0]).toEqual({
      position: { latitude: 1, longitude: 2 },
      err: null
    })
  })
})
