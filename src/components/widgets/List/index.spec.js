jest.mock('./List', () => 'List')
import React from 'react'
import { shallow } from 'enzyme'
import { ListContainer } from './index'

describe('scenes/Lists/ListsContainer', () => {
  describe('onListUpdated', () => {
    it('Should return undefined when no data is available', () => {
      const props = {
        id: 1,
        data: {
          subscribeToMore: jest.fn()
        },
        updateList: jest.fn(),
        deleteList: jest.fn()
      }
      const prev = {
        foo: 'bar',
        list: {
          id: 1,
          name: 'my list'
        }
      }
      const payload = {
        subscriptionData: { data: null }
      }

      const wrapper = shallow(<ListContainer {...props} />)
      const result = wrapper.instance()._onListUpdated(prev, payload)

      expect(result).toEqual(undefined)
    })

    it('Should return the updated list when data is available', () => {
      const props = {
        id: 1,
        data: {
          subscribeToMore: jest.fn()
        },
        updateList: jest.fn(),
        deleteList: jest.fn()
      }
      const prev = {
        foo: 'bar',
        list: {
          id: 1,
          name: 'my list',
          items: [1, 2, 3]
        }
      }
      const payload = {
        subscriptionData: {
          data: {
            listUpdated: {
              name: 'my updated list'
            }
          }
        }
      }

      const wrapper = shallow(<ListContainer {...props} />)
      const result = wrapper.instance()._onListUpdated(prev, payload)

      expect(result).not.toBe(prev)
      expect(result).toEqual({
        foo: 'bar',
        list: {
          id: 1,
          name: 'my updated list',
          items: [1, 2, 3]
        }
      })
    })
  })

  describe('onListItemCreated', () => {
    it('Should return undefined when no data is available', () => {
      const props = {
        id: 1,
        data: {
          subscribeToMore: jest.fn()
        },
        updateList: jest.fn(),
        deleteList: jest.fn()
      }
      const prev = {
        foo: 'bar',
        list: {
          id: 1,
          name: 'my list',
          items: []
        }
      }
      const payload = {
        subscriptionData: { data: null }
      }

      const wrapper = shallow(<ListContainer {...props} />)
      const result = wrapper.instance()._onListItemCreated(prev, payload)

      expect(result).toEqual(undefined)
    })

    it('Should return the updated list when data is available', () => {
      const props = {
        id: 1,
        data: {
          subscribeToMore: jest.fn()
        },
        updateList: jest.fn(),
        deleteList: jest.fn()
      }
      const prev = {
        foo: 'bar',
        list: {
          id: 1,
          name: 'my list',
          items: [
            {
              id: 9,
              text: 'old item',
              done: true
            }
          ]
        }
      }
      const payload = {
        subscriptionData: {
          data: {
            listItemCreated: {
              id: 10,
              text: 'new item',
              done: false
            }
          }
        }
      }

      const wrapper = shallow(<ListContainer {...props} />)
      const result = wrapper.instance()._onListItemCreated(prev, payload)

      expect(result).not.toBe(prev)
      expect(result).toEqual({
        foo: 'bar',
        list: {
          id: 1,
          name: 'my list',
          items: [
            {
              id: 9,
              text: 'old item',
              done: true
            },
            {
              id: 10,
              text: 'new item',
              done: false
            }
          ]
        }
      })
    })
  })

  describe('onListItemUpdated', () => {
    it('Should return undefined when no data is available', () => {
      const props = {
        id: 1,
        data: {
          subscribeToMore: jest.fn()
        },
        updateList: jest.fn(),
        deleteList: jest.fn()
      }
      const prev = {
        foo: 'bar',
        list: {
          id: 1,
          name: 'my list',
          items: []
        }
      }
      const payload = {
        subscriptionData: { data: null }
      }

      const wrapper = shallow(<ListContainer {...props} />)
      const result = wrapper.instance()._onListItemUpdated(prev, payload)

      expect(result).toEqual(undefined)
    })

    it('Should return the updated list when data is available', () => {
      const props = {
        id: 1,
        data: {
          subscribeToMore: jest.fn()
        },
        updateList: jest.fn(),
        deleteList: jest.fn()
      }
      const prev = {
        foo: 'bar',
        list: {
          id: 1,
          name: 'my list',
          items: [
            {
              id: 9,
              text: 'old item',
              done: true
            }
          ]
        }
      }
      const payload = {
        subscriptionData: {
          data: {
            listItemUpdated: {
              id: 9,
              text: 'updated item',
              done: false
            }
          }
        }
      }

      const wrapper = shallow(<ListContainer {...props} />)
      const result = wrapper.instance()._onListItemUpdated(prev, payload)

      expect(result).not.toBe(prev)
      expect(result).toEqual({
        foo: 'bar',
        list: {
          id: 1,
          name: 'my list',
          items: [
            {
              id: 9,
              text: 'updated item',
              done: false
            }
          ]
        }
      })
    })
  })

  describe('onListItemDeleted', () => {
    it('Should return undefined when no data is available', () => {
      const props = {
        id: 1,
        data: {
          subscribeToMore: jest.fn()
        },
        updateList: jest.fn(),
        deleteList: jest.fn()
      }
      const prev = {
        foo: 'bar',
        list: {
          id: 1,
          name: 'my list',
          items: []
        }
      }
      const payload = {
        subscriptionData: { data: null }
      }

      const wrapper = shallow(<ListContainer {...props} />)
      const result = wrapper.instance()._onListItemDeleted(prev, payload)

      expect(result).toEqual(undefined)
    })

    it('Should return the updated list when data is available', () => {
      const props = {
        id: 1,
        data: {
          subscribeToMore: jest.fn()
        },
        updateList: jest.fn(),
        deleteList: jest.fn()
      }
      const prev = {
        foo: 'bar',
        list: {
          id: 1,
          name: 'my list',
          items: [
            {
              id: 9,
              text: 'old item',
              done: true
            },
            {
              id: 10,
              text: 'other item',
              done: false
            }
          ]
        }
      }
      const payload = {
        subscriptionData: {
          data: {
            listItemDeleted: {
              id: 9
            }
          }
        }
      }

      const wrapper = shallow(<ListContainer {...props} />)
      const result = wrapper.instance()._onListItemDeleted(prev, payload)

      expect(result).not.toBe(prev)
      expect(result).toEqual({
        foo: 'bar',
        list: {
          id: 1,
          name: 'my list',
          items: [
            {
              id: 10,
              text: 'other item',
              done: false
            }
          ]
        }
      })
    })
  })
})
