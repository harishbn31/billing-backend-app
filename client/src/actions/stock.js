import axios from '../config/axios'

const getStocks = (stocks) => {
    return {
        type: 'STOCKS_LIST', payload: stocks
    }
}
export const getStocksList = () => {
    return (dispatch) => {
        axios.get('/stocks')
            .then(response => {
                // console.log(response)
                if (response.data) {
                    dispatch(getStocks(response.data))
                }
            })
            .catch(err => {
                console.log('error stocks', err)
                // history.push('/')
            })
    }
}