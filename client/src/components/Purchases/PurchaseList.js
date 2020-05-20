import React from 'react'
import {connect} from 'react-redux'
import {getPurchasesList,startAddPurchase} from '../../actions/purchase'
import PurchaseForm from './purchaseForm'
import { Link } from 'react-router-dom'


class PurchaseList extends React.Component {
    componentDidMount(){
        this.props.dispatch(getPurchasesList())
    }
    handleSubmit= (data)=>{
        this.props.dispatch(startAddPurchase(data))
    }

    render(){
        // console.log(this.props.dealers)
        return (
            <>
            <h2>Add Purchases</h2>
            {/* <div className="col-md-8"> */}
            <PurchaseForm handleSubmit={this.handleSubmit}/>
            {/* </div> */}
                <h2>Purchases </h2>
                <div className="row">
                <ul className="list-group">
                    {this.props.purchases.map((purchase,index) => {
                        return <Link key={index} to={`/purchases/${purchase._id}`}><li className="list-group-item">{purchase.invoice}</li></Link>
                    })}
                </ul>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        purchases: state.purchases
    }
}

export default connect(mapStateToProps)(PurchaseList)