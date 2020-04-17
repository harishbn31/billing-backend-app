import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import categoryReducer from '../reducers/categoryReducer'
import productReducer from '../reducers/productReducer'

const appReducer = combineReducers({
    user: userReducer,
    categories: categoryReducer,
    products: productReducer

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