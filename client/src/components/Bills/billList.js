import React, { Fragment } from 'react'
import {connect} from 'react-redux'
import {getBillsList,startAddBill} from '../../actions/bill'
import BillForm from './billsForm'
import { Link } from 'react-router-dom'
import FormBill from './FormBill'
import { Grid } from '@material-ui/core'


class BillList extends React.Component {
    componentDidMount(){
        this.props.dispatch(getBillsList())
    }
    handleSubmit= (data)=>{
        this.props.dispatch(startAddBill(data))
    }

    render(){
        return (
            <Fragment>
                {/* <BillForm handleSubmit={this.handleSubmit}/> */}
                <Grid container spacing={8}> 
                    <Grid item xs={9} zeroMinWidth>
                        <h2>Add Bills</h2>
                        <FormBill />
                    </Grid>
                    <Grid item xs={3} zeroMinWidth>
                            <h2>Bills </h2>
                            <div className="row">
                            <ul className="list-group">
                                {this.props.bills.map((bill,index) => {
                                    return <Link key={index} to={`/invoices/${bill._id}`}><li className="list-group-item">{bill.billId}</li></Link>
                                })}
                            </ul>
                            </div>
                    </Grid>  
                </Grid>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        bills: state.bills
    }
}

export default connect(mapStateToProps)(BillList)