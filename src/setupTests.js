import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'

Enzyme.configure({ adapter: new Adapter() })

const geolocationMock = {
  getCurrentPosition: jest.fn()
}

const localStorageMock = {
  setItem: jest.fn(),
  getItem: jest.fn()
}

global.navigator.geolocation = geolocationMock
global.localStorage = localStorageMock
