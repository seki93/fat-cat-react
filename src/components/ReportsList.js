import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReportsList = props => {

  useEffect(() => {
    axios.get('/api/v1/time_tracks/report', 
              { params: { user_id: 1, report_type: 'weekly'} }
      )
        .then(res => setReports(res.data))
      }, []);

  const [reports, setReports] = useState([]);
  let totalTime = 0;

  reports.map(report =>{
    totalTime += report.total;
  })

  let totalHours = totalTime / 60;
  let totalMinutes = totalTime % 60;


  return (
    <table>
      <thead>
        <tr>
          <th>Start time</th>
          <th>End time</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {reports.map((report, index) => (
          <tr>
            <td id={report.id}>{report.start_time}</td>
            <td>{report.end_time}</td>
            <td>{report.total}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>total time</td>
          <td>{totalHours}h and {totalMinutes}min</td>
        </tr>
      </tfoot>
    </table>
  )
};
export default ReportsList;