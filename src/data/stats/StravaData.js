import useSWR from 'swr';
import fetcher from './fetcher';
import stravaApi from './stravaApi';

// ToDo
// Remove Format
// change github Data

export const StravaData = () => {
  const { data } = useSWR(stravaApi, fetcher);
  // run
  const runCount = data?.count;
  return (runCount);
};

export default StravaData;
