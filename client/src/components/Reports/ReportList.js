import React, {useEffect, useState} from 'react'
import {getReportsList} from '../../actions/report'
import { connect } from 'react-redux'
import moment from 'moment'


function ReportList(props) {
    const [startDate, setStartDate] = useState(moment().subtract(15, 'days').format('YYYY-MM-DD'))
    const [endDate, setEndDate] = useState(moment().format('YYYY-MM-DD'))
    // console.log('check1111', startDate, endDate, new Date())
    useEffect(()=>{
        const dates = {
            startDate: startDate,
            endDate: endDate
        }
        props.dispatch(getReportsList(dates))
    },[])
    const handleClick = (e)=>{
        // console.log("check3333333")
        e.preventDefault()
        const dates = {
            startDate: startDate,
            endDate: endDate
        }
        props.dispatch(getReportsList(dates))
    }
    const dateChange= (e)=>{
        if(e.target.id === 'startDate'){
            setStartDate(e.target.value)
        }else{
            setEndDate(e.target.value)
        }
        
    }
    return (
        <>
            <h4>Generate Report</h4>
            <div className='report-date-picker' >
                <div className='col'>
                    <label htmlFor="startDate">Start Date:</label>
                    <input
                        className='form-control'
                        id='startDate'
                        name='startDate'
                        placeholder='Date'
                        type='date'
                        style={{width: '250px'}}
                        value={startDate}
                        onChange={dateChange}
                    />
                </div>
                <br/>
                <div className='col'>
                    <label htmlFor="endDate">End Date:</label>
                    <input
                        className='form-control'
                        id='endDate'
                        name='endDate'
                        placeholder='Date'
                        type='date'
                        style={{width: '250px'}}
                        value={endDate}
                        onChange={dateChange}
                    />
                </div>
            </div>
            <div>

            </div>
            <button onClick={(e)=>handleClick(e)}>Generate Report</button>
            <br/>
         <table border='1'>
         <thead>
             <tr>
                 <th>#</th>
                 <th>Bill No</th>
                 <th>Customer Name</th>
                 <th>PayMode</th>
                 <th>Net</th>
                 <th>Total Amount</th>
             </tr>
         </thead>
         <tbody>{
             props.reports.map((bill,i) => {
                 return (<tr key={i}>
                     <td>{i+1}</td>
                     <td>{bill.billId}</td>
                     <td>{bill.customer?.name}</td>
                     <td>{bill.payMode}</td>
                     <td>{bill.total}</td>
                     <td>{bill.totalAmount}</td>
                     <td>
                         <button className='table-action-btn' onClick={() => {props.history.push(`/invoices/${bill._id}`)}}>Show</button>
                         {/* <button className='table-action-btn' onClick={() => {props.handleRemovebill(bill._id)}}>Remove</button> */}
                     </td>
                 </tr>)
             })
         }
         </tbody>
     </table>
     </>
    )
}
const mapStateToProps = (state) => {
    return {
      reports: state.reports
    }
  }
export default connect(mapStateToProps)(ReportList)