
import './App.css';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import ComboBox from './components/ComboBox';
import CountrySelect from './components/CountrySelect';
import MyHeader from './components/header/Cabecera';


function App() {
  return (
    <div className="App">
      <Button variant='outlined'>
        Soy un botón
      </Button>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>       
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      <ComboBox />
      <CountrySelect/>
      <MyHeader />

    </div>
  );
}

export default App;
