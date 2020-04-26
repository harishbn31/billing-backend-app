import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import PeopleIcon from '@material-ui/icons/People';
import CategoryIcon from '@material-ui/icons/Category';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

function Dashboard(props) {

    return (
        <>
            <h2 className="text-center">Dashboard</h2>
            <div  className="row ">
                <div className="col-md-5">

                </div>
                <div className="col-md-7" >
            <List>
                    <ListItem button  onClick={() => {
                        props.history.push(`/invoices`)
                    }}>
                        <ListItemIcon><ReceiptIcon/></ListItemIcon>
                        <ListItemText primary={'Invoices/Bills'} />
                    </ListItem>
                    <ListItem button  onClick={() => {
                        props.history.push(`/purchases`)
                    }}>
                        <ListItemIcon><ShoppingBasketIcon/></ListItemIcon>
                        <ListItemText primary={'Purchases'} />
                    </ListItem>
                    <ListItem button  onClick={() => {
                        props.history.push(`/expenses`)
                    }}>
                        <ListItemIcon><AccountBalanceWalletIcon/></ListItemIcon>
                        <ListItemText primary={'Expenses'} />
                    </ListItem>
                    <ListItem button  onClick={() => {
                        props.history.push(`/reports`)
                    }}>
                        <ListItemIcon><ShowChartIcon/></ListItemIcon>
                        <ListItemText primary={'Reports'} />
                    </ListItem>
                    <ListItem button  onClick={() => {
                        props.history.push(`/products`)
                    }}>
                        <ListItemIcon><CategoryIcon/></ListItemIcon>
                        <ListItemText primary={'Products'} />
                    </ListItem>
                    <ListItem button  onClick={() => {
                        props.history.push(`/categories`)
                    }}>
                        <ListItemIcon><CategoryIcon/></ListItemIcon>
                        <ListItemText primary={'Categories'} />
                    </ListItem>
                    <ListItem button  onClick={() => {
                        props.history.push(`/dealers`)
                    }}>
                        <ListItemIcon><PeopleIcon/></ListItemIcon>
                        <ListItemText primary={'Dealers'} />
                    </ListItem>
                    <ListItem button  onClick={() => {
                        props.history.push(`/employees`)
                    }}>
                        <ListItemIcon><PeopleOutlineIcon/></ListItemIcon>
                        <ListItemText primary={'Employees'} />
                    </ListItem>
                </List>
                </div>
            </div>
        </>
    )
}

export default Dashboard