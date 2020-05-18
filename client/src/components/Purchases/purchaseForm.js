import React from 'react'
import {connect} from 'react-redux'
// import Add from '@material-ui/icons/Add'
class PurchaseForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
            _id: "",
            name: "",
            price: "",
            quantity: "",
            date: new Date(),
            dealer: "",
            invoice: `EXPO-INVOICE`,
            total: '',
            discount: "",
            tax: "",
            otherCharges: "",
            payMode: "",
            totalAmount: "",
            paymentDetails: ""
        }
    }
    handleSubmit=(e) => {
        e.preventDefault()
        // console.log(this.state)


    }
    handleChange= (e) => {
        // e.persist()
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    // addProduct = e =>{
    //     e.preventDefault()
    //     this.setState((prevState) => {
    //         return {
    //             products: [...prevState.products, {product: "", price:"",quantity:"" }]
    //         }
    //     })
    // }
    productChange = e =>{
    const product = this.props.products.find(product => product._id === e.target.value)
        this.setState((prevState)=>{
            return {
                _id: product._id, price: product.price, quantity: 1,name: product.name
            }
        })

    }
    // productHandleChange = e =>{
    //     // console.log(e.target.name)
    //     e.persist()
    //     this.setState({
    //                 [e.target.name]: e.target.value 
    //         })
    // }
    addToPurchaseList = e =>{
        e.preventDefault()
        this.setState((prevState) => {
            return{
                products: [...prevState.products, {_id: this.state._id,price: this.state.price, quantity: this.state.quantity,name: this.state.name}],
                _id: "",
                price: "",
                quantity: 1,
                total: Number(prevState.total) + (Number(this.state.price) * Number(this.state.quantity))
            }
        })
    }
    // editFromList = e =>{
    //     e.preventDefault()
    //     const product = this.state.products.find(product => product._id === e.target.id)
    //     this.setState({
    //         _id: product._id,
    //         price: product.price,
    //         quantity: product.quantity,
    //         isEdit:true
    //     })
    // }
    // updateEditList = e =>{
    //     e.preventDefault()
    //     const product = this.state.products.find(product => product._id === e.target.id)
    //     product.price = this.state.price
    //     product.qunatity = this.state.qunatity
    //     this.setState((prevState) => {
    //         return{
    //             products: [...prevState.products.filter(product => product._id !== e.target.id), product]
    //         }
    //     })


    // }
    removeFromList = e =>{
        e.preventDefault()
        const id = e.target.id
        const product= this.state.products.find(p => p._id=== id)
        this.setState((prevState)=>{
            return {
                products: this.state.products.filter(product => product._id !== id),
                total: prevState.total - (product.price * product.quantity)
            }
        })

    }
    render(){
        // console.log('cat',this.state)
        const {_id,price, quantity,date,total,paymentDetails,dealer,tax,invoice,otherCharges,payMode,discount,totalAmount} = this.state
        return (
            <>  
            <form onSubmit={this.handleSubmit}>
                
                    <div className="form-row">
                        <div className="col">
                            <select className="form-control" placeholder="Product" name="_id"   value={_id} onChange={this.productChange}
                        > <option>Select Product</option>
                            {this.props.products.map((product,index) => {
                                return <option key={product._id} value={product._id}>{product.name}</option>
                            })}
                        </select>
                        </div>
                        <div className="col">
                            <input className="form-control" placeholder="Price" name="price" type="number" value={price} onChange={this.handleChange}
                        />
                        </div>
                        <div className="col">
                            <input className="form-control" placeholder="Quantity" name="quantity" type="number" value={quantity} onChange={this.handleChange}
                        />
                        </div>
                        <div className="col" style={{'marginTop': "-20px"}}>
                            <button className="btn btn-sm btn-info"  onClick={this.addToPurchaseList}
                        >Add to Purchase List</button>
                        </div>
                    </div>
                    {/* <Add onClick={this.addProduct}/> */}
                    <br />
                    <h3>Added List</h3>
                        {this.state.products.map((product,index)=>{
                            return <div key={index}>
                                <input value={product.name} readOnly={true}/>
                                <input value={product.price} readOnly={true}/>
                                <input value={product.quantity} readOnly={true}/>
                                <button className="btn btn-sm btn-danger" onClick={this.removeFromList} id={product._id}>Remove</button>
                            </div>
                        })}
                    <div className="form-row">
                        <div className="col">
                            <input className="form-control" name="date" placeholder="Date" type="date" value={date} onChange={this.handleChange}
                            />
                        </div>
                        <div className="col">
                        <select className="form-control " name="dealer" placeholder="Dealer" type="text" value={dealer} onChange={this.handleChange}
                        >
                            <option value="">Select Dealer</option>
                            {this.props.dealers.map(dealer =>{
                                return <option key={ dealer._id} value={dealer._id}>{dealer.username}</option>
                            })}
                        </select>
                        </div>
                        <div className="col">
                            <input className="form-control" name="invoice" placeholder="Invoice" type="text" value={invoice} onChange={this.handleChange}
                            />
                        </div>
                        <div className="col">
                            <input className="form-control" name="tax" placeholder="Tax" type="text" value={tax} onChange={this.handleChange}
                            />
                        </div>
                        
                        
                    </div>
                    <br />
                    <div className="form-row">
                        <div className="col">
                            <input className="form-control" name="otherCharges" placeholder="Other Charges" type="number" value={otherCharges} onChange={this.handleChange}
                            />
                        </div>
                        <div className="col">
                            <input className="form-control" name="total" placeholder="Total" type="text" value={total} onChange={this.handleChange}
                            />
                        </div>
                        <div className="col">
                            <input className="form-control" name="discount" placeholder="Discount" type="text" value={discount} onChange={this.handleChange}
                            />
                        </div>
                        
                        <div className="col">  
                        <input className="form-control" name="totalAmount" placeholder="Total Amount" type="Number" value={totalAmount}onChange={this.handleChange}
                        />
                        </div>
                    </div>
                    <br />
                    <div className="form-row">
                        <div className="col">
                            <select className="form-control" name="payMode" placeholder="Pay Mode" value={payMode} onChange={this.handleChange}
                            >
                                <option>Select Pay Mode</option>
                                {['Net-Banking','Cash','UPI','Cheque'].map((pay)=>{
                                    return <option key={pay} value={pay}>{pay}</option>
                                })}
                            </select>
                        </div>
                        <div className="col">
                            <textarea className="form-control" name="paymentDetails" placeholder="Payment Details" type="text" value={paymentDetails} onChange={this.handleChange}
                            />
                        </div>
                        <div className="col" style={{'marginTop': "-20px"}}>
                            <button className="btn btn-primary" >Submit</button>
                        </div>
                    </div>
            </form>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.products,
        dealers: state.users
    }
}

export default connect(mapStateToProps)(PurchaseForm)