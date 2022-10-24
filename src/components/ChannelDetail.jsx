import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './index'
import { fetchFromAPI } from '../utils/fetchFromApi';

const ChannelDetail = () => {
  // const [channelDetail, setChannelDetail] = useState('salom')
  const { id } = useParams();

  console.log(id);

  // useEffect(() => {
  //   fetchFromAPI(`channels?part=snippet&id=${id}`)
  //      .then((data) => setChannelDetail(data?.items[0]));
  // }, [id])

  return (
    <h1>{id}</h1>
  )
}

export default ChannelDetail