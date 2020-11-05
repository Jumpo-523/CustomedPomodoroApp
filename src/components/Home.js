import React from 'react'
import '../css/Home.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useLocation,
    useParams
  } from "react-router-dom";
// var Plotly = require('plotly.js')

// console.log(Plotly)

// var data = [{
//     x: [1999, 2000, 2001, 2002],
//     y: [10, 15, 13, 17],
//     type: 'scatter'
//   }];
  
  
//     var graphDiv = document.getElementById('graphDiv')
  
//   // var data = [{
//   //   x: [1999, 2000, 2001, 2002],
//   //   y: [10, 15, 13, 17],
//   //   type: 'scatter'
//   // }];
  
//   var layout = {
//     height: 500,
//     title: 'Sales Growth',
//     xaxis: {
//       title: 'Year',
//       showgrid: false,
//       zeroline: false
//     },
//     yaxis: {
//       title: 'Percent',
//       showline: false
//     }
//   };
// Plotly.newPlot(graphDiv, data, layout);
  

export class Addbutton extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }
  
    updateCount() {
      this.setState((prevState, props) => {
        return { count: prevState.count + 1 }
      });
    }
  

    render() {
      return (
        <div>
            <div id="graphDiv"></div>
        <button
                onClick={() => this.updateCount()}
              >
                Clicked {this.state.count} times
              </button>
        </div>
              );
    }
  }


export class Home extends React.Component {
    render(){
      return(

        <div>
        <div class="sidenav">
            <Link to="/">Login Page</Link>
            <Link to="/Addbutton">Addbutton</Link>
            <Link to="/timer">Timer</Link>
        </div>
        </div>
      )
    }
  }
  
//  React.render(<Button />, document.getElementById('app'));