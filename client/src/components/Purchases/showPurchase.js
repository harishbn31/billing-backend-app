import React from 'react'
import {connect} from 'react-redux'
import {getPurchasesList} from '../../actions/purchase'


class PurchaseShow extends React.Component {
    componentDidMount(){
        this.props.dispatch(getPurchasesList())
    }

    render(){
        // console.log(this.props.dealers)
       const purchase = this.props.purchase
        return (
            <>
            <h2>Purchase Info</h2>
                <div className="row">
                    <div className="section">
                        { purchase && 
                          <><p>{ purchase.date}</p>
                          <p>{ purchase.invoice}</p>
                          <ul>
                              {purchase.products.map((product,index)=>{
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
        purchase: state.purchases.find(p => p._id===props.match.params.id)
    }
}

export default connect(mapStateToProps)(PurchaseShow)