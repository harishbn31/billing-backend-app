import React from 'react'
import {connect} from 'react-redux'
import {getBillsList} from '../../actions/bill'
import moment from 'moment'

function Tabular(props){
    const { data } = props
    return (
        <div>
            <table border='1'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>total</th>
                    </tr>
                </thead>
                <tbody>{
                    data.map((product,i) => {
                        return (<tr key={product.product._id}>
                            <td>{i+1}</td>
                            <td>{product.product.name}</td>
                            <td>{product.product.description}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price}</td>
                            <td>{product.price*product.quantity}</td>
                        </tr>)
                    })
                }
                </tbody>
            </table>
        </div>
    )
}


class BillShow extends React.Component {
    componentDidMount(){
        this.props.dispatch(getBillsList())
    }

    render(){
        console.log(this.props.bill)
        const bill = this.props.bill
        return (
            <>
            <h2>Bills Info</h2>
                <div className="row">
                    <div className="section">
                        { bill && 
                          <><h5><u>{ bill.billId} - {moment(bill.date).format('LLL')}</u></h5>
                          <p> Description - { bill.description}</p>
                          <Tabular data={bill.products} />
                          <br/>
                          <p>discount {bill.discount} %</p>
                          <p>tax {bill.tax} %</p>
                          <p>Total :{bill.total}</p>
                          <p> payMode: {bill.payMode}</p>
                          <p> Other charges: {bill.otherCharges}</p>
                          <p> Grand Total: {bill.totalAmount}</p>
                          </>
                        }
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state,props) => {
    return {
        bill: state.bills.find(b => b._id===props.match.params.id)
    }
}

export default connect(mapStateToProps)(BillShow)