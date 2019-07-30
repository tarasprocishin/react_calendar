import React from 'react';
import './App.css';
import Month from './Components/Monts';


class App extends React.Component {
  render(){
    let date = new Date();
    const year = date.getFullYear();
    const month  = date.getMonth();

    

    return (
      <div className="App">
        <h1>Calendar</h1>
        
        <Month 
        year={year}
        month={month}
        />
      </div>
    );
  }
  
}

export default App;
