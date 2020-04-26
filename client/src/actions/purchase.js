import axios from '../config/axios'

const getPurchase = (purchases) => {
    return {
        type: 'PURCHASES_LIST', payload: purchases
    }
}
export const getPurchasesList = () => {
    return (dispatch) => {
        axios.get('/purchases')
            .then(response => {
                // console.log(response)
                if (response.data) {
                    dispatch(getPurchase(response.data))
                }
            })
            .catch(err => {
                console.log('error purchases', err)
                // history.push('/')
            })
    }
}