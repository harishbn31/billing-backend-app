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
import PurchaseShow from './components/Purchases/showPurchase'
import ReportList from './components/Reports/ReportList'
import CategoriesList from './components/Categories/CategoriesList'
import ProductsList from './components/Products/ProductsList'
import DealersList from './components/AllUsers/Dealers'
import EmployeesList from './components/AllUsers/Employees'
import StocksList from './components/Stocks/stockList'



function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Header/>
      
      <div className="container">
      
      <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/purchases" component={PurchaseList} exact={true} />
      <Route path="/purchases/:id" component={PurchaseShow} exact={true}/>
      <Route path="/categories" component={CategoriesList} />
      <Route path="/products" component={ProductsList} />
      <Route path="/dealers" component={DealersList} />
      <Route path="/employees" component={EmployeesList} />
      <Route path="/stocks" component={StocksList} />
      <Route path="/reports" component={ReportList} />
      </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
