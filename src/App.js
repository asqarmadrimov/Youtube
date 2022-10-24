import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar, ChannelDetail, Feed, VideoDetail, SearchFeed } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#303030' }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route paht="/video/:id" element={<VideoDetail />} />
          <Route paht="/channel/:id" element={<ChannelDetail />} />
          <Route paht="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App