import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {startCheckUserAuth} from './actions/user'
import {getProdcutsList} from './actions/product'
import {getCategoriesList} from './actions/category'

const store = configureStore()

// console.log(store.getState(), 'initial state')

store.subscribe(() => {
    // console.log(store.getState())
})

store.dispatch(startCheckUserAuth())
store.dispatch(getProdcutsList())
store.dispatch(getCategoriesList())

const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));

