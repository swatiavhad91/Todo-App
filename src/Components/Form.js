import React, { Component } from 'react';


class Form extends React.Component {
  render() {
    return (
      <div id="Form">
        <h3>* * * * * Student Details * * * * *</h3>  
        <form onSubmit={this.props.handleFormSubmit}>
            
          <label For="studname">
          <b>Student Name : </b> 
          <input required id="studname" value={this.props.newstudname} 
            type="text"   name="studname" pattern="[A-Za-z]+" title="Student Name must be character only.. It can not contain
            numbers or symbols.."
            onChange={this.props.handleInputChange} /><i>(Student Name must be characters only..)</i>
          </label><br></br><br></br>

          
          <label for="seatno">
          <b> Seat No : </b> 
          <input required id="seatno" value={this.props.newseatno} 
            type="text" name="seatno" pattern="^[A-Za-z0-9-_\s]+$" title="Seat no can be combination of characters and decimal numbers only.."
            onChange={this.props.handleInputChange} /><i>(Seat no can be combination of character and decimal no..)</i>

           
          </label><br></br><br></br>
          
          
          <label for="prn">
          <b>PRN : </b>
          <input required id="prn" value={this.props.newprn} 
            type="text" inputMode="numeric" pattern="[0-9]*" title="PRN should be decimal number only.. It can not be floating 
            point number or symbol or character...." name="prn"
            onChange={this.props.handleInputChange} /><i>(PRN must be decimal number..)</i>
          </label><br></br><br></br>      

          <label style={{marginLeft:"30%"}}><b>* * * Enter Marks * * *</b></label><br></br><br></br>
          <label for="m1">
          <b>English : </b>
          <input required id="m1" value={this.props.newm1} 
            type="text" inputMode="numeric" pattern="[0-9]*" title="Marks should be decimal number only.. It can not be floating 
            point number or symbol or character...." name="m1"
            onChange={this.props.handleInputChange} />
          </label>
          <input value="Out of 100" disabled style={{marginLeft:"20px"}}></input>
          <br></br><br></br>     

          <label for="m2">
          <b>Marathi : </b>
          <input required id="m2" value={this.props.newm2} 
            type="text" inputMode="numeric" pattern="[0-9]*" title="Marks should be decimal number only.. It can not be floating 
            point number or symbol or character...." name="m2"
            onChange={this.props.handleInputChange} />
          </label>
          <input value="Out of 100" disabled style={{marginLeft:"20px"}}></input>
          <br></br><br></br>  

          <label for="m3">
          <b>Mathematics : </b>
          <input required id="m3" value={this.props.newm3} 
            type="text" inputMode="numeric" pattern="[0-9]*" title="Marks should be decimal number only.. It can not be floating 
            point number or symbol or character...." name="m3"
            onChange={this.props.handleInputChange} />
          </label>
          <input value="Out of 100" disabled style={{marginLeft:"20px"}}></input>
          <br></br><br></br> 

          <label for="m4">
          <b>Science : </b>
          <input required id="m4" value={this.props.newm4} 
            type="text" inputMode="numeric" pattern="[0-9]*" title="Marks should be decimal number only.. It can not be floating 
            point number or symbol or character...." name="m4"
            onChange={this.props.handleInputChange} />
          </label>
          <input value="Out of 100" disabled style={{marginLeft:"20px"}}></input>
          <br></br><br></br>   

          <label for="m5">
          <b>Social Science : </b>
          <input required id="m5" value={this.props.newm5} 
            type="text" inputMode="numeric" pattern="[0-9]*" title="Marks should be decimal number only.. It can not be floating 
            point number or symbol or character...." name="m5"
            onChange={this.props.handleInputChange} />
          </label>
          <input value="Out of 100" disabled style={{marginLeft:"20px"}}></input>
          <br></br><br></br>  

         

          <button type="submit" value="Submit" id="btn">Add Items in a Table</button>

          
        </form>
        
      </div>
    );
  }
}

export default Form;