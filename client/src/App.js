import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/statics/Header'
import Home from './components/statics/Home'

import './config/dataTableTheme'
import './App.css'

import Login from './components/User/Login'
import Register from './components/User/Register'
import Dashboard from './components/Dashboard'

import PurchaseList from './components/Purchases/PurchaseList'
import OrderShow from './components/Purchases/OrderShow'
import ReportList from './components/Reports/ReportList'
import CategoriesList from './components/Categories/CategoriesList'
import ProductsList from './components/Products/ProductsList'


function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Header/>
      
      <div className="appContent">
      
      <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/purchases" component={PurchaseList} />
      <Route path="/categories" component={CategoriesList} />
      <Route path="/products" component={ProductsList} />
      <Route path="/orders" component={OrderShow} />
      <Route path="/reports" component={ReportList} />
      </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
