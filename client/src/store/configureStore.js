import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import clientsReducer from '../reducers/clientsReducer'
import purchaseOrdersReducer from '../reducers/purchaseOrdersReducer'
import suppliersReducer from '../reducers/suppliersReducer'

const appReducer = combineReducers({
    user: userReducer,
    clients: clientsReducer,
    purchaseOrders: purchaseOrdersReducer,
    suppliers: suppliersReducer
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