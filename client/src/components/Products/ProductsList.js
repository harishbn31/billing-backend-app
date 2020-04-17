import React from 'react'
import {connect} from 'react-redux'
import {getProdcutsList} from '../../actions/product'
import ProductForm from './ProductForm'
import Add from '@material-ui/icons/Add'
import Modal from 'react-modal'
import modalStyles from '../../config/modalCss'
import axios from '../../config/axios';
import IconButton from '@material-ui/core/IconButton';

class ProductList extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            modalIsOpen: false,
            isEdit: false,
            product: {}
        }
        
    }
    productDelete = (e) =>{
        // e.preventDefault()
        console.log(e.target.value)
        const id=e.target.value
        // console.log(id)
        axios.delete(`/products/${id}`)
        .then(catgeory => {
            this.props.dispatch(getProdcutsList())
            
        })
        .catch(err =>{
            console.log(err)
        })
    }
    // componentDidMount(){
    //     this.props.dispatch(getProdcutsList())
    // }
     closeModal = () => {
        this.setState({modalIsOpen : false})
    }
    modalOpen = () =>{
        this.setState({modalIsOpen : true})
    }
    // this.Modal.setAppElement('#root')  
    productPost = (data) =>{
        axios.post('/products',data)
        .then(product => {
            this.closeModal()
            this.props.dispatch(getProdcutsList())
            
        })
        .catch(err =>{
            console.log(err)
        })
    }
    productUpdate = e =>{
        e.preventDefault();
        this.setState({
            isEdit: true,
            product: this.props.products.find(product => product._id === e.target.id)
        })
    }
    productPut= data =>{
        const id = data._id
        axios.put(`/products/edit/${id}`,data)
        .then(response=>{
            this.setState({
                product: {}
            })
            this.props.dispatch(getProdcutsList())
        }).catch(err=>console.log(err))
    }
    handleChange= e =>{
        e.persist()
        this.setState((prevState) => {
           return{ product: {
               ...prevState.product,
                [e.target.name]: e.target.value
             }
            }
        })
    }
    

    render(){
       const {modalIsOpen} = this.state
       Modal.setAppElement('#root') 
        return (
            <>
            
            <Modal 
                style={modalStyles}
                isOpen={modalIsOpen}
                // onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                aria-labelledby="Create Product"
                aria-describedby="simple-modal-description"
            >
                <ProductForm productPost={this.productPost}/>
            </Modal>
            <IconButton className='tableButton' onClick={this.modalOpen}>
                <Add />
            </IconButton>
                <h3>Products </h3>
                <div className="row">
                    {this.props.products.map((product,index) => {
                        // return <li key={index}> {product.name}</li>
                        return <div key={index}> 
                            <div className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                {this.state.product._id === product._id ? <ProductForm productPut={this.productPut} isEdit={this.state.isEdit} {...product}/> : <><h5 className="card-title">{product.name}</h5> 
                                        <p>{product.description}</p>
                    <p>{product.price}</p>
                    <p>{product.category.name}</p>
                    <button className="btn btn-sm btn-info" id={product._id} onClick={this.productUpdate} >Edit</button>
                                    </>
                                }
                            <button className="btn btn-sm btn-danger" value={product._id} onClick={this.productDelete}>Delete</button>
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
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductList)