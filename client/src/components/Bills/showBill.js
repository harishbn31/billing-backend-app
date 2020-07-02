import React from 'react'
import {connect} from 'react-redux'
import {getBillsList} from '../../actions/bill'


class BillShow extends React.Component {
    componentDidMount(){
        this.props.dispatch(getBillsList())
    }

    render(){
        // console.log(this.props.customers)
       const bill = this.props.bill
        return (
            <>
            <h2>Bills Info</h2>
                <div className="row">
                    <div className="section">
                        { bill && 
                          <><p>{ bill.date}</p>
                          <p>{ bill.description}</p>
                          <ul>
                              {bill.products.map((product,index)=>{
                                  return <li key={index}>{product.name}</li>
                              })}
                          </ul></>
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