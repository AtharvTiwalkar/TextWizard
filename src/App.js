import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Dark mode is disabled', 'success')
      document.title = 'textWizard-Light Mode'
      //we can also give warning type bad user interface like title alternation with the help of setInterval
    } else {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert('Dark mode is enabled', 'success')
      document.title = 'textWizard-Dark Mode'
    }
  }
  return (
    <HashRouter>
      <Navbar title="TextWizard" aboutText="aboutTextWizard" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
        <Routes>
          <Route exact path='/' element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />} />
          <Route exact path='/about' element={<About showAlert={showAlert} mode={mode} />} />
        </Routes>
      {/* this is very important showAlert passing working */}
    </HashRouter>
  );
}

export default App;
