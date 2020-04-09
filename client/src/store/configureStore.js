import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import categoryReducer from '../reducers/categoryReducer'

const appReducer = combineReducers({
    user: userReducer,
    category: categoryReducer

})

const rootReducer = (state, action) => {
    if(action.type === 'LOGOUT') {
        state = undefined
    }
    return appReducer(state, action)
}

const preloadedState = {
    user: {
        isLoaded: false
    }
}

const configureStore = () => {
    const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk))
    return store
}

export default configureStore