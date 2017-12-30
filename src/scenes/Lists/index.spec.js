jest.mock('./Lists', () => 'Lists')
import React from 'react'
import { shallow } from 'enzyme'
import { ListsContainer } from '.'

describe('scenes/Lists', () => {
  describe('onListCreated', () => {
    it('Should return undefined when no data is available', () => {
      const props = {
        id: 1,
        data: {
          subscribeToMore: jest.fn()
        }
      }
      const prev = {
        foo: 'bar',
        lists: [
          {
            id: 1,
            name: 'my list'
          }
        ]
      }
      const payload = {
        subscriptionData: { data: null }
      }

      const wrapper = shallow(<ListsContainer {...props} />)
      const result = wrapper.instance().onListCreated(prev, payload)

      expect(result).toEqual(undefined)
    })

    it('Should return the updated list when data is available', () => {
      const props = {
        id: 1,
        data: {
          subscribeToMore: jest.fn()
        }
      }
      const prev = {
        foo: 'bar',
        lists: [
          {
            id: 1,
            name: 'my old list',
            items: [1, 2, 3]
          }
        ]
      }
      const payload = {
        subscriptionData: {
          data: {
            listCreated: {
              id: 100,
              name: 'my new list',
              items: []
            }
          }
        }
      }

      const wrapper = shallow(<ListsContainer {...props} />)
      const result = wrapper.instance().onListCreated(prev, payload)

      expect(result).not.toBe(prev)
      expect(result).toEqual({
        foo: 'bar',
        lists: [
          {
            id: 1,
            name: 'my old list',
            items: [1, 2, 3]
          },
          {
            id: 100,
            name: 'my new list',
            items: []
          }
        ]
      })
    })
  })

  describe('onListDeleted', () => {
    it('Should return undefined when no data is available', () => {
      const props = {
        id: 1,
        data: {
          subscribeToMore: jest.fn()
        }
      }
      const prev = {
        foo: 'bar',
        lists: [
          {
            id: 1,
            name: 'my list'
          }
        ]
      }
      const payload = {
        subscriptionData: { data: null }
      }

      const wrapper = shallow(<ListsContainer {...props} />)
      const result = wrapper.instance().onListDeleted(prev, payload)

      expect(result).toEqual(undefined)
    })

    it('Should return the updated list when data is available', () => {
      const props = {
        id: 1,
        data: {
          subscribeToMore: jest.fn()
        }
      }
      const prev = {
        foo: 'bar',
        lists: [
          {
            id: 1,
            name: 'my old list',
            items: [1, 2, 3]
          }
        ]
      }
      const payload = {
        subscriptionData: {
          data: {
            listDeleted: {
              id: 1
            }
          }
        }
      }

      const wrapper = shallow(<ListsContainer {...props} />)
      const result = wrapper.instance().onListDeleted(prev, payload)

      expect(result).not.toBe(prev)
      expect(result).toEqual({
        foo: 'bar',
        lists: []
      })
    })
  })
})
