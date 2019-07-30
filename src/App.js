import React from 'react';
import './css/App.css';
import Months from './Components/Months';


class App extends React.Component {
  constructor(){
    super()
    
    this.state = {
      date: new Date()
    }
  }

  nextMonth = () => {
    this.setState(prevState =>{
      const year  = prevState.date.getFullYear();
      const month = prevState.date.getMonth();
      let next    = new Date(year, month + 1);
      return{
        date: next
      }
    })
  }

  prevMonth = () => {
    this.setState(prevState =>{
      const year  = prevState.date.getFullYear();
      const month = prevState.date.getMonth();
      let prev    = new Date(year, month - 1);
      return{
        date: prev
      }
    })
  }

  currentlyMonth = () => {
    this.setState(() =>{
      let currently = new Date();
      return{
        date: currently
      }
    })
  }



  render(){
 
    
    let {date} = this.state;
    const year = date.getFullYear();
    const month = date.getMonth();

    return (
      <div className="App">
        <h1>Calendar</h1>
        <div className='buttons'>
          <button onClick={this.prevMonth}>Prev</button>
          <button onClick={this.currentlyMonth}>Currently</button>
          <button onClick={this.nextMonth}>Next</button>
        </div>
        <Months 
        year={year}
        month={month}
        />
      </div>
    );
  }
  
}

export default App;
