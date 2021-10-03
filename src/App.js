import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import RTL from './components/RTL';
import AppRouter from './components/AppRouter';
import theme from './styles/theme';
import './App.css';

function App() {
  return (
    <div className="App" dir="rtl">
      <StyledEngineProvider injectFirst>
        <RTL>
          <ThemeProvider theme={theme}>
            <AppRouter />
          </ThemeProvider>
        </RTL>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
