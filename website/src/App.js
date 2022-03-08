import './css/App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import CenterCard from './components/CenterCard'
import NavigationBar from './components/NavBar/NavigationBar';
import { Divider } from '@mui/material';
import LanguageButton from './components/LanguageButton';
import { IntlProvider } from 'react-intl'
import messages_en from "./messages/english.json";
import messages_pt from "./messages/portuguese.json";
import { useState } from 'react';

function App() {
  const [language, setLanguage] = useState(navigator.language === "pt-PT" ? "pt" : "en")
  const messages = {
    'en': messages_en,
    'pt': messages_pt
  };
  return (
    <IntlProvider messages={messages[language]} locale={language} defaultLocale="en">
      <div className="App">
        <CssBaseline />
        <Container maxWidth="false">
          <Grid container spacing={1} >
            <Grid item xs={2.5}>
              <NavigationBar />
              <LanguageButton language={language} setLanguage={setLanguage} />
            </Grid>
            <Grid item xs={0.1}>
              <Divider variant='fullWidth' orientation="vertical" />
            </Grid>
            <Grid item xs={9.4}>
              <CenterCard />
            </Grid>
          </Grid>
        </Container>
      </div >
    </IntlProvider>
  );
}

export default App;
