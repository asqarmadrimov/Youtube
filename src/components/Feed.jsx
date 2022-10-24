import {useState, useEffect} from 'react';
import {Box, Stack, Typography} from '@mui/material'
import {SideBar, Videos} from './index';

import { fetchFromAPI } from '../utils/fetchFromApi';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])


  useEffect(() => {
    // setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);



  return (
    <Stack sx={{flexDirection: {sx: 'column', md: "row"}}}>
      <Box sx={{height: {sx: 'auto', md: '90vh'}, borderRight: 'solid 1px #3d3d3d', px: {sx: 0, md: 2}}}>
       <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography className="copyright" variant="body2, h5 " sx={{my: 2, mt: 3, color: '#fff'}}>
          Madrimov Asqar
        </Typography>
      </Box>

      <Box p={2} sx={{overflowY: 'auto', height: '90hv', flex: 2}}>
        <Typography variant='h4' fontWeight='bold'mb={2} sx={{color: "white"}}>
          {selectedCategory} <span style={{color: 'red'}}>videos</span>
        </Typography>
      <Videos videos={videos} />
      </Box> 
    </Stack>
  )
}

export default Feed