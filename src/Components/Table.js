import React, { Component } from 'react';

class Table extends React.Component {
  render() {
    const items = this.props.items;
   
    
    return (
      <div id="Table" >
        <table>
          <tbody>
            <tr >
              <th>Student Name</th>
              <th>  Seat No </th> 
              <th> PRN </th>
              <th> English</th>
              <th> Marathi</th>
              <th> Mathematics</th>
              <th> Science</th>
              <th> Social Science</th>
                <th>Total</th>
              <th>Percentage</th>  
              
              
            </tr>
            {items.map(item => {
              return (
                <tr>
                  <td>{item.studname}</td>
                  <td>{item.seatno}</td>
                  <td>{item.prn}</td>
                  <td>{item.m1}</td>
                  <td>{item.m2}</td>
                  <td>{item.m3}</td>
                  <td>{item.m4}</td>
                  <td>{item.m5}</td>
                   <td>{item.m1 + item.m2 + item.m3 + item.m4 + item.m5}</td>
                  <td>{(item.m1 + item.m2 + item.m3 + item.m4 + item.m5)*500/100}</td>  
                  
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;