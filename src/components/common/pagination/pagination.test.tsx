
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Pagination from './pagination';
import renderer from 'react-test-renderer';
import { ErrorBoundary } from 'react-error-boundary';



const mockStore = configureStore([]);

const store = mockStore({
  currentPage: 1,
});

it('page should renders correctly', () => {
  const pageCount = 10;
  const tree = renderer
    .create(
      <ErrorBoundary fallback={<p className="text-center">Something went wrong. Please try later</p>}>
            <Provider store={store}>
             <Pagination pageCount={pageCount} />
           </Provider>
      </ErrorBoundary>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
