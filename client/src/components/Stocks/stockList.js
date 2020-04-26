import React from 'react'
import {connect} from 'react-redux'
import {getStocksList} from '../../actions/stock'

class StocksList extends React.Component {
    componentDidMount(){
        this.props.dispatch(getStocksList())
    }

    render(){
        console.log(this.props.stocks)
        return (
            <>
                <h3>Stocks </h3>
                <div className="row">
                    {this.props.stocks.map((stock,index) => {
                        return <div key={index}> 
                            <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                    <h5 className="card-title">Stocks</h5> 
                        {/* {stock.products.map((product,index)=>{
                            return <p key={product._id}>Name: {product.product.name}, Stock Price: {product.stockPrice}, Quantity: {product.quantity}</p>

                        })} */}
                            </div>
                            </div>
                        </div>
                    })}
                    </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stocks: state.stocks
    }
}

export default connect(mapStateToProps)(StocksList)