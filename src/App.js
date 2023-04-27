
import { AddNumberPage } from './AddNumberPage';
import './App.css';
import { useState } from 'react';

function App() {

  let localTime = new Date().toLocaleTimeString();

  const [value,setValue] = useState(0);

  let [time,setTime] = useState(localTime);

  const increaseValue = () =>{
    setValue(value+1);
  }

  const decreaseValue =()=>{
    setValue(value-1);
  }

  const getTimeFunction = ()=>{

    let newTime = new Date().toLocaleTimeString();

    setTime(newTime);
  }

  setInterval(getTimeFunction,1000);



  return (
    <div className="App">
      <AddNumberPage  time={localTime} getTime = {getTimeFunction}/>
    </div>
  );
}

export default App;
