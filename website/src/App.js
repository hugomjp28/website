import './css/App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import CenterCard from './components/CenterCard'
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar />
        <CssBaseline />
        <Container maxWidth="false">
          <Grid container spacing={1} >
            <Grid item xs={3} />
            <Grid item xs={6}>
              <CenterCard />
            </Grid>
            <Grid item xs={3} />
          </Grid>
        </Container>
      </header>
    </div>
  );
}

export default App;
