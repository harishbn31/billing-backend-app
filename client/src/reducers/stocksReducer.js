const stockReducer = (state = [], action) => {
    switch(action.type) {
        case 'STOCKS_LIST': {
            return [...action.payload]
        }
        case 'REMOVE_STOCK': {
            return state.filter(stock => stock._id !== action.payload._id)
        }
        default: {
            return state
        }
    }
}

export default stockReducer