import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import Home from './Pages/Home';
import SearchResult from './Pages/SearchResult';
import reducers from './reducers';
import './App.css';

function App() {
  const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
  };
  
  const pReducer = persistReducer(persistConfig, reducers);
  
  
  const loggerMiddleware = createLogger();
  // const preloadedState = window.INITIAL_STATE;
  
  // Logger Operation should be halted in live environment.
  let middleware = [promiseMiddleware, thunkMiddleware];
  if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, loggerMiddleware];
  }
  
  const store = createStore(pReducer, applyMiddleware(...middleware));
  
  const persistor = persistStore(store);

  
  return (
    <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
            <Switch>
              <Route path="/search">
                <SearchResult />
                </Route>
                <Route path="/">
                  <Home />
               </Route>
            </Switch>
        </Router>
      </PersistGate>
    </Provider>
    </>
  );
}

export default App;
