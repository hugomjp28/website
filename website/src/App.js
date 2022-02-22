import './css/App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import CenterCard from './components/CenterCard'
import NavigationBar from './components/NavBar/NavigationBar';
import { Divider } from '@mui/material';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="false">
        <Grid container spacing={1} >
          <Grid item xs={2.5}>
            <NavigationBar />
          </Grid>
          <Grid item xs={0.1}>
            <Divider variant='fullWidth' orientation="vertical" />
          </Grid>
          <Grid item xs={9.4}>
            <CenterCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
