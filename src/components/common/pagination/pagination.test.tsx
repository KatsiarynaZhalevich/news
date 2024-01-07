import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mockStore } from '../../pages/main/mocks';
import { render } from '@testing-library/react';
import Pagination from './pagination';

const mockStoreTest = configureStore([]);

const store = mockStoreTest(mockStore);

test('Pagination component should renders correctly', () => {
  const { asFragment } = render (
      <Provider store={store}>
        <Pagination pageCount={4} />
      </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
})