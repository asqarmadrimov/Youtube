import {Link} from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';


const VideoCard = ({ video: {id: {videoId}, snippet }}) => {
  // console.log(videoId);
  return (
    <Card sx={{width: {md: '270px', xs: '100%'}}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia 
        image={snippet?.thumbnails?.high?.url} 
        alt={snippet?.title}
        sx={{width: '350px', height: '180px'}}
      />
      <CardContent sx={{background: '#215, 217, 219', height: '100px'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight="bold" color="#77, 80, 84">
            {snippet?.title.slice(0, 35) || demoVideoTitle.slice(0, 35)}
          </Typography>
        </Link>
        <Link to={snippet?.chennelId ? `/chennel/${snippet?.chennelId}` : demoChannelUrl}>
          <Typography variant='subtitle1' display='flex' alignItems='center' opacity='1' fontWeight="bold" color="#145, 145, 145">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{fontSize: 17, ml: 2}}/>
          </Typography>
        </Link>
      </CardContent> 
      </Link>
    </Card>
  )
}

export default VideoCard