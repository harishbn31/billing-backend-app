const reportReducers = (state = [], action) => {
    switch(action.type) {
        case 'REPORT_LIST': {
            return [...action.payload]
        }
        default: {
            return state
        }
    }
}
export default reportReducers