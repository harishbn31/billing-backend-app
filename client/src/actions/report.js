import axios from '../config/axios'
import Swal from 'sweetalert2'

const getReports = (reports) => {
    return {
        type: 'REPORT_LIST', payload: reports
    }
}
export const getReportsList = (dates) => {
    return (dispatch) => {
        axios.post('/reports', dates)
            .then(response => {
                // console.log(response)
                if (response.data) {
                    dispatch(getReports(response.data))
                }
            })
            .catch(err => {
                console.log('error reports', err)
                // history.push('/')
            })
    }
}