import axios from '../config/axios'
import Swal from 'sweetalert2'


const getProducts = (products) => {
    return {
        type: 'PRODUCTS_LIST', payload: products
    }
}
const addProduct = (product)=>{
    return {
        type: 'ADD_PRODUCT',payload: product
    }
}
const updateProduct = (id,product)=>{
    return {
        type: 'UPDATE_PRODUCT',payload: {id,product}
    }
}
const removeProduct = (id)=>{
    return {
        type: 'REMOVE_PRODUCT',payload: id
    }
}
export const startListProducts = () => {
    return (dispatch) => {
        axios.get('/products')
            .then(response => {
                // console.log(response)
                if (response.data) {
                    dispatch(getProducts(response.data))
                }
            })
            .catch(err => {
                console.log('error products', err)
                // history.push('/')
            })
    }
}
export const startAddProduct = (data) => {
    return (dispatch) => {
        axios.post(`/products`,data,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(res => {
            if(res.data.errors){
                Swal.fire({
                    type: 'error',
                    text: "Check the fileds"
                })
            }else{
                dispatch(addProduct(res.data))
            }
        })
        .catch(err => {
            Swal.fire({
                type: 'error',
                text: err
            })
            
        })
    }
}
export const startUpdateProduct = (id,data,history) => {
    return (dispatch) => {
        axios.put(`/products/edit/${id}`,data,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(res => {
            if(res.data.errors){
                Swal.fire({
                    type: 'error',
                    text: "Check the fileds"
                })
            }else{
                dispatch(updateProduct(res.data._id,res.data))
                // history.push('/products')
                window.location.reload()
            }
        })
        .catch(err => {
            Swal.fire({
                type: 'error',
                text: err
            })
        })
    }
}
export const startRemoveProduct = (id) => {
    return (dispatch) => {
        axios.delete(`/products/${id}`,{
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(res => {
            dispatch(removeProduct(res.data._id))
        })
        .catch(err => {
            Swal.fire({
                type: 'error',
                text: err
            })
        })
    }
}