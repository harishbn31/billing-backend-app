import axios from '../config/axios'

const getProducts = (products) => {
    return {
        type: 'PRODUCTS_LIST', payload: products
    }
}
export const getProdcutsList = () => {
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