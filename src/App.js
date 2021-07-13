import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form';
import Table from './Components/Table';


class App extends Component {
  constructor() {
    super();

    this.state = {
      studname: '',
      seatno:'',
      prn: '',
      m1:'',
      m2:'',
      m3:'',
      m4:'',
      m5:'',
      total:'',
      per:'',

      items: []
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      studname: this.state.studname,
      seatno: this.state.seatno,
      prn:this.state.prn,
      m1:this.state.m1,
      m2:this.state.m2,
      m3:this.state.m3,
      m4:this.state.m4,
      m5:this.state.m5,
      
    });

    this.setState({
      items,
      studname: '',
      seatno: '',
      prn:'',
      m1:'',
      m2:'',
      m3:'',
      m4:'',
      m5:'',
     
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  render() {
    return (
      <div className="App">
        
        <Form handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          newstudname={ this.state.studname }
          newseatno={ this.state.seatno }
          newprn={ this.state.prn }
          newm1={this.state.m1}
          newm2={this.state.m2}
          newm3={this.state.m3}
          newm4={this.state.m4}
          newm5={this.state.m5} 
         />
          <Table items={ this.state.items }/>
      </div>
    );
  }
}

export default App;