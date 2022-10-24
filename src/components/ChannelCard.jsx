import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail }) => {
  console.log(channelDetail.snippet.title);
  return (
    <Box sx={{ boxShadow: 'none', background: '#fff', borderRadius: '20px', margin: 'auto', width: {xs: '320px', md: '280px'}}}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAling: 'center', color: '#120, 122, 121' }}>
          <CardMedia
            image={channelDetail.snippet.thumbnails.high.url || demoProfilePicture} 
            alt={channelDetail.snippet.title}
            sx={{borderRadius: '50%', height: '210px', width: '235px', mb: 4, border: 'solid 1px #e3e3e3'}}
          />
          <Typography variant="h5" sx={{display: 'flex', alignItems: 'center'}}>
            {channelDetail.snippet.title}
            <CheckCircle sx={{fontSize: 20, ml: 1, color: '#000'}}/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>

    </Box>
  )
}

export default ChannelCard