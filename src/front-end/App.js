import { Box } from '@mui/material';
import Grid from '@mui/system/Unstable_Grid';
import AlbumCard from "./components/AlbumCard"
import Navbar from './components/Navbar';

import AlbumData from '../samplealbumdata.json'

function App() {
  return (
    <Box className="App" >
        <Navbar />
        <Grid style={{paddingTop: '2%'}}container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {AlbumData.map((album) => (
          <Grid xs={6} sm={4} md={3} lg={3} xl={2} key={album.id}>
            <AlbumCard AlbumData={album}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default App;
