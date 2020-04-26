const purchaseReducer = (state = [], action) => {
    switch(action.type) {
        case 'PURCHASES_LIST': {
            return [...action.payload]
        }
        default: {
            return state
        }
    }
}

export default purchaseReducer