import React from 'react'
import { connect } from 'react-redux'
import { getPurchasesList } from '../../actions/purchase'
import moment from 'moment'
import { Link } from 'react-router-dom'

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

class PurchaseShow extends React.Component {
  componentDidMount() {
    this.props.dispatch(getPurchasesList())
  }

  render() {
    //console.log(this.props.purchase)
    const purchase = this.props.purchase
    return (
      <>
        <h2>Purchase Info</h2>
        <div className='row'>
          <div className='section'>
            {purchase && (
              <>
                <h5>
                  <u>{purchase.invoice} - {moment(purchase.date).format('LLL')}</u>
                </h5>
                <Tabular data={purchase.products} />
                <br/>
                <div className='detailContain'>
                  <p>tax: {purchase.tax}%</p>
                  <p>Other charges: {purchase.otherCharges}</p>
                  <p>Total: {purchase.total}</p>
                  <p>discount: {purchase.discount}%</p>
                  <p>payMode: {purchase.payMode}</p>
                  <p style={{fontWeight:'bold',fontSize:'medium'}}><em>Grand Total:</em> {purchase.totalAmount}</p>
                </div>
                <Link to='/purchases'>Back</Link>
              </>
            )}
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    purchase: state.purchases.find((p) => p._id === props.match.params.id),
  }
}

export default connect(mapStateToProps)(PurchaseShow)
