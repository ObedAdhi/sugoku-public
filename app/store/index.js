import { createStore, applyMiddleware } from "redux"
import sudokuReducer from "./reducers/sudokuReducer";
import thunk from 'redux-thunk'

const store = createStore(sudokuReducer, applyMiddleware(thunk))

export default store