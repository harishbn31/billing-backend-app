import React from 'react'
import {connect} from 'react-redux'
import {getBillsList,startAddBill} from '../../actions/bill'
import BillForm from './billsForm'
import { Link } from 'react-router-dom'


class BillList extends React.Component {
    componentDidMount(){
        this.props.dispatch(getBillsList())
    }
    handleSubmit= (data)=>{
        this.props.dispatch(startAddBill(data))
    }

    render(){
        // console.log(this.props.customers)
        return (
            <>
            <h2>Add Bills</h2>
            {/* <div className="col-md-8"> */}
            <BillForm handleSubmit={this.handleSubmit}/>
            {/* </div> */}
                <h2>Bills </h2>
                <div className="row">
                <ul className="list-group">
                    {this.props.bills.map((bill,index) => {
                        return <Link key={index} to={`/invoices/${bill._id}`}><li className="list-group-item">{bill.billId}</li></Link>
                    })}
                </ul>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bills: state.bills
    }
}

export default connect(mapStateToProps)(BillList)