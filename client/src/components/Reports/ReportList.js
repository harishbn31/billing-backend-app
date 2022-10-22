import React, {useEffect, useState} from 'react'
import {getReportsList} from '../../actions/report'
import { connect } from 'react-redux'


function ReportList(props) {
    const [startDate, setStartDate] = useState(new Date().toLocaleString())
    const [endDate, setEndDate] = useState(new Date().toLocaleString())
    const handleClick = (e)=>{
        console.log("check3333333")
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
        </>
    )
}
const mapStateToProps = (state) => {
    return {
      reports: state.reports
    }
  }
export default connect(mapStateToProps)(ReportList)