import React, { useEffect, useState }from 'react'
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


export class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = { time: Date };
      }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date() }), 1000);
      }
    componentWillUnmount() {
        clearInterval(this.interval);
      }
    get_current_time(){
        let d = this.state.time
        // console.log(d.getFullYear(), d.getMonth(), d.getDate(), d.getDay())
    }
      
    render (){
        return (
            <div>
                {this.state.time}
                {/* {this.get_current_time()} */}
            </div>
            );
      };
    }
