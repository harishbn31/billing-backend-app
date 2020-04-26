import React from 'react'
import {connect} from 'react-redux'
import {getUsersList} from '../../actions/allUsers'

class DealersList extends React.Component {
    componentDidMount(){
        this.props.dispatch(getUsersList())
    }

    render(){
        // console.log(this.props.dealers)
        return (
            <>
                <h3>Dealers </h3>
                <div className="row">
                    {this.props.dealers.map((dealer,index) => {
                        return <div key={index}> 
                            <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">{dealer.username}</h5> 
                                        {/* <p>{dealer.description}</p> */}
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
        dealers: state.users
    }
}

export default connect(mapStateToProps)(DealersList)