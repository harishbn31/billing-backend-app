import React from 'react'
import {connect} from 'react-redux'
import {getCategoriesList} from '../../actions/category'

class CategoriesList extends React.Component {
    constructor(props){
        super();
        this.state = {
            categories: []
        }
    }
    componentDidMount(){
        this.props.dispatch(getCategoriesList())
    }
    render(){
        return (
            <>
                <h3>Categories</h3>
    
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(CategoriesList)