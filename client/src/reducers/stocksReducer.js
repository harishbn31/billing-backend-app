const stockReducer = (state = [], action) => {
    switch(action.type) {
        case 'STOCKS_LIST': {
            return [...action.payload]
        }
        default: {
            return state
        }
    }
}

export default stockReducer