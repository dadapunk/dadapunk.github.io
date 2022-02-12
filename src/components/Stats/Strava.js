import React from 'react';
import Table from './Table';
import data from '../../data/stats/StravaData';

const StravaStats = () => (
  <>
    <h3>Some stats about strava</h3>
    <Table data={data} />
  </>
);

export default StravaStats;
