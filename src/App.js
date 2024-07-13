import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000)
  }
  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Dark mode is disabled','success')
      document.title='textUtil-Light Mode'
      //we can also give warning type bad user interface like title alternation with the help of setInterval
    }else{
      setMode('dark')
      document.body.style.backgroundColor='black'
      showAlert('Dark mode is enabled','success')
      document.title='textUtil-Dark Mode'
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="aboutTextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>
      {/* <About/> */}
      </div>
      {/* this is very important showAlert passing working */}
     
    </>
  );
}

export default App;
