const billReducer = (state = [], action) => {
    switch(action.type) {
        case 'BILLS_LIST': {
            return [...action.payload]
        }
        case 'ADD_BILL': {
            return [...state, action.payload]
        }
        default: {
            return state
        }
    }
}

export default billReducer