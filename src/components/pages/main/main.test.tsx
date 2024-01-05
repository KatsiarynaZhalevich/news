
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Main from './main';
import { mockStore } from './mocks';
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'

const mockStoreTest = configureStore([]);

const store = mockStoreTest(mockStore);

test('renders a message', () => {
  const {asFragment} = render(
  <Provider store={store}>
                <Main />
              </Provider>)

  expect(asFragment()).toMatchSnapshot()
})
