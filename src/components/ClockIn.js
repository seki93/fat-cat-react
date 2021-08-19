import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClockIn = props => {

  const qs = require('qs');

   axios.post('/api/v1/time_tracks', qs.stringify(
      {
        start_time: "2021-08-17 15:15:15",
        user_id: 1
      }))
      .then(res=>( console.log(res)))
      .catch( error => console.log(error)

  const [response, setResponseCode] = useState([]);
};
export default ClockIn;