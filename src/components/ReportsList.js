import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReportsList = props => {

  useEffect(() => {
    axios.get('/api/v1/time_tracks/report', 
              { params: { user_id: 1, report_type: 'weekly'} }
      )
        .then(res => setJobs(res.data))
      }, []);

  const [jobs, setJobs] = useState([]);
  let totalTime = 0;

  jobs.map(job =>{
    totalTime += job.total;
  })

  
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
        {jobs.map((job, index) => (
          <tr>
            <td id={job.id}>{job.start_time}</td>
            <td>{job.end_time}</td>
            <td>{job.total}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>total time</td>
          <td>{totalTime}</td>
        </tr>
      </tfoot>
    </table>
  )
};
export default ReportsList;