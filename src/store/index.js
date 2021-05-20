import { createStore, applyMiddleware, compose } from 'redux';
import reduxLogger from 'redux-logger'

import reducer from "../reducers"

export default () => {
    const store = createStore(
    reducer,
    compose(
      applyMiddleware(reduxLogger),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
  return store
}