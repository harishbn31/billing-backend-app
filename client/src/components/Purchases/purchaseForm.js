import React from 'react'
import { connect } from 'react-redux'
// import Add from '@material-ui/icons/Add'
// import Select from 'react-select';

class PurchaseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      _id: '',
      stock: '',
      name: '',
      price: '',
      quantity: '',
      date: '',
      dealer: '',
      invoice: `EXPO-INVOICE`,
      total: '',
      discount: '',
      tax: '',
      otherCharges: '',
      payMode: '',
      totalAmount: '',
      paymentDetails: '',
      newField: false,
      tempId: '',
    }
  }

  generateTempId = () => {
    this.setState({ tempId: JSON.stringify(Number(Date.now())).substring(0,12) })
  }

  componentDidMount() {
    this.generateTempId()
  }

  handleChange = (e) => {
    // e.persist()
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  productChange = (e) => {
    console.log(e.target.value)
    const product = this.props.products.find(
      (product) => product._id === e.target.value
    )
    if (product) {
      this.setState((prevState) => {
        return {
          _id: product._id,
          price: product.price,
          quantity: 1,
          name: product.name,
          stock: product.stock,
          newField: false,
        }
      })
    } else {
      this.setState((prevState) => {
        return {
          _id: this.state.tempId,
          price: 0,
          quantity: 1,
          name: '',
          stock: 0,
          newField: true,
        }
      })
    }
  }
  addToPurchaseList = (e) => {
    e.preventDefault()
    this.generateTempId()
    if (this.state._id) {
      this.setState((prevState) => {
        return {
          products: [
            ...prevState.products,
            {
              product: this.state._id,
              stock: this.state.stock,
              price: this.state.price,
              quantity: this.state.quantity,
              name: this.state.name,
            },
          ],
          _id: '',
          price: '',
          quantity: '',
          stock: '',
          name: '',
          newField: false,
          total:
            Number(prevState.total) +
            Number(this.state.price) * Number(this.state.quantity),
          totalAmount:
            Number(prevState.total) +
            Number(this.state.price) * Number(this.state.quantity),
        }
      })
    }
  }
  removeFromList = (e, id) => {
    e.preventDefault()
    const product = this.state.products.find((p) => p.product === id)
    this.setState((prevState) => {
      return {
        products: this.state.products.filter((p) => p.product !== id),
        total: prevState.total - product.price * product.quantity,
      }
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const {
      products,
      date,
      total,
      paymentDetails,
      dealer,
      tax,
      invoice,
      otherCharges,
      payMode,
      discount,
      totalAmount,
    } = this.state
    this.props.handleSubmit({
      products,
      date,
      total,
      paymentDetails,
      dealer,
      tax,
      invoice,
      otherCharges,
      payMode,
      discount,
      totalAmount,
    })
    this.setState({
      products: [],
      date: '',
      dealer: '',
      invoice: `EXPO-INVOICE`,
      total: '',
      discount: '',
      tax: '',
      otherCharges: '',
      payMode: '',
      totalAmount: '',
      paymentDetails: '',
    })
  }
  taxBlur = (e) => {
    const amount = this.state.products
      .map((p) => p.price * p.quantity)
      .reduce((a, b) => {
        return a + b
      }, 0)
    this.setState((prevState) => {
      return {
        total: Number(amount) + (Number(amount) * Number(this.state.tax)) / 100,
        totalAmount:
          Number(amount) + (Number(amount) * Number(this.state.tax)) / 100,
      }
    })
  }
  discountBlur = (e) => {
    this.setState((prevState) => {
      return {
        totalAmount:
          Number(prevState.totalAmount) -
          (Number(prevState.total) * Number(prevState.discount)) / 100,
      }
    })
  }
  otherChargesBlur = (e) => {
    this.setState((prevState) => {
      return {
        totalAmount:
          Number(prevState.totalAmount) + Number(prevState.otherCharges),
      }
    })
  }
  render() {
    // console.log('cat',this.state)
    const {
      _id,
      price,
      quantity,
      date,
      total,
      paymentDetails,
      dealer,
      tax,
      invoice,
      otherCharges,
      payMode,
      discount,
      totalAmount,
    } = this.state
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className='form-row'>
            <div className='col'>
              <select
                className='form-control'
                placeholder='Product'
                name='_id'
                value={_id}
                onChange={this.productChange}
              >
                <option>Select Product</option>
                {this.props.products.map((product, index) => {
                  return (
                    <option key={product._id} value={product._id}>
                      {product.name}
                    </option>
                  )
                })}
                <option value={this.state.tempId}>Other</option>
              </select>
            </div>
            {this.state.newField && (
              <div className='col'>
                <input
                  className='form-control'
                  placeholder='Product Name'
                  name='name'
                  type='text'
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
            )}
            <div className='col'>
              <input
                className='form-control'
                placeholder='Price'
                name='price'
                type='number'
                value={price}
                onChange={this.handleChange}
              />
            </div>
            <div className='col'>
              <input
                className='form-control'
                placeholder='Quantity'
                name='quantity'
                type='number'
                value={quantity}
                onChange={this.handleChange}
              />
            </div>
            <div className='col' style={{ marginTop: '-20px' }}>
              <button
                className='btn btn-sm btn-info'
                onClick={this.addToPurchaseList}
              >
                Add to Purchase List
              </button>
            </div>
          </div>
          {/* <Add onClick={this.addProduct}/> */}
          <br />
          {this.state.products.length > 0 && (
            <>
              <h3>Added List</h3>
              {this.state.products.map((product, index) => {
                return (
                  <div key={index}>
                    <input value={product.name} readOnly={true} />
                    <input value={product.price} readOnly={true} />
                    <input value={product.quantity} readOnly={true} />
                    <button
                      onClick={(e) => {
                        this.removeFromList(e, product.product)
                      }}
                    >
                      Remove
                    </button>
                  </div>
                )
              })}
              <div className='form-row'>
                <div className='col'>
                  <input
                    className='form-control'
                    name='date'
                    placeholder='Date'
                    type='date'
                    value={date}
                    onChange={this.handleChange}
                  />
                </div>
                <div className='col'>
                  <select
                    className='form-control '
                    name='dealer'
                    placeholder='Dealer'
                    type='text'
                    value={dealer}
                    onChange={this.handleChange}
                  >
                    <option value=''>Select Dealer</option>
                    {this.props.dealers.map((dealer) => {
                      return (
                        <option key={dealer._id} value={dealer._id}>
                          {dealer.username}
                        </option>
                      )
                    })}
                  </select>
                </div>
                <div className='col'>
                  <input
                    className='form-control'
                    name='invoice'
                    placeholder='Invoice'
                    type='text'
                    value={invoice}
                    onChange={this.handleChange}
                  />
                </div>
                <div className='col'>
                  <input
                    className='form-control'
                    name='tax'
                    placeholder='Tax'
                    type='text'
                    value={tax}
                    onChange={this.handleChange}
                    onBlur={this.taxBlur}
                  />
                </div>
              </div>
              <br />
              <div className='form-row'>
                <div className='col'>
                  <input
                    className='form-control'
                    name='total'
                    placeholder='Total'
                    type='text'
                    value={total}
                    onChange={this.handleChange}
                  />
                </div>
                <div className='col'>
                  <input
                    className='form-control'
                    name='discount'
                    placeholder='Discount'
                    type='text'
                    value={discount}
                    onBlur={this.discountBlur}
                    onChange={this.handleChange}
                  />
                </div>
                <div className='col'>
                  <input
                    className='form-control'
                    name='otherCharges'
                    placeholder='Other Charges'
                    type='number'
                    onBlur={this.otherChargesBlur}
                    value={otherCharges}
                    onChange={this.handleChange}
                  />
                </div>

                <div className='col'>
                  <input
                    className='form-control'
                    name='totalAmount'
                    placeholder='Total Amount'
                    type='Number'
                    value={totalAmount}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <br />
              <div className='form-row'>
                <div className='col'>
                  <select
                    className='form-control'
                    name='payMode'
                    placeholder='Pay Mode'
                    value={payMode}
                    onChange={this.handleChange}
                  >
                    <option>Select Pay Mode</option>
                    {['Net-Banking', 'Cash', 'UPI', 'Cheque'].map((pay) => {
                      return (
                        <option key={pay} value={pay}>
                          {pay}
                        </option>
                      )
                    })}
                  </select>
                </div>
                <div className='col'>
                  <textarea
                    className='form-control'
                    name='paymentDetails'
                    placeholder='Payment Details'
                    type='text'
                    value={paymentDetails}
                    onChange={this.handleChange}
                  />
                </div>

                <div className='col' style={{ marginTop: '-20px' }}>
                  <button className='btn btn-primary'>Submit</button>
                </div>
                <div className='col'></div>
              </div>
            </>
          )}
        </form>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
    dealers: state.users,
  }
}

export default connect(mapStateToProps)(PurchaseForm)
