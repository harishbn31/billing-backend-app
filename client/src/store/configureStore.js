import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import categoryReducer from '../reducers/categoryReducer'
import productReducer from '../reducers/productReducer'
import allUsersReducer from '../reducers/allUsersReducer'
import stockReducer from '../reducers/stocksReducer'
import purchaseReducer from '../reducers/purchaseReducer'

const appReducer = combineReducers({
    user: userReducer,
    categories: categoryReducer,
    products: productReducer,
    users: allUsersReducer,
    stocks: stockReducer,
    purchases: purchaseReducer

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