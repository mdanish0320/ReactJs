import { createStore, compose } from 'redux'

//local import
import rootReducer from './reducer'

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export default createStore(
    rootReducer,
    compose(ReactReduxDevTools)
)