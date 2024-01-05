import React from 'react';
import './App.css';
import Main from './components/pages/main/main';
import Header from './components/pages/main/header/header';
import { Provider } from 'react-redux';
import { store } from './components/common/store/store';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <ErrorBoundary fallback={<p className="text-center">Something went wrong. Please try later</p>}>
      <Provider store={store}> 
        <div className="App">
          <Header/>
          <Main/>
        </div>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
