import React, { useEffect, useState }from 'react'
import '../css/Pomodoro.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useLocation,
    useParams
  } from "react-router-dom";


class StartTaskButton extends React.Component  {
    constructor(props) {
        super(...arguments);
        this.state = {
            tasks: [],
            new_task:""
        }
      }
    handleChange(event){
        let new_task = event.target.new_task
        this.setState({new_task: new_task});
    }
    onClick(e) {
        // console.log(productId + 'を買うよ！')
        alert('event:', this.state.new_task)
      }

    render() {
        return (
            <div class="task">
                <input type="text" class="task_input" 
                    value={this.state.new_task}
                    onChange={(e) => this.setState({new_task: e})}
                    >
                </input>
                <br></br>
                <button class="btn-liquid button" onClick={this.onClick}>
                    <span class="inner">Liquid button ?</span> 
                </button>

            </div>
    );}
}


export class Pomodoro extends React.Component{
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
            <body>
                <header class="header">
                    Customed Pomodoro Tracker
                </header>
                <div id="time">
                    {this.state.time}
                    {/* {this.get_current_time()} */}
                </div>

                <StartTaskButton />

            </body>
            );
      };
    }

const styles = {
    header: {
        height: 10,
        background: "#ddd",
    },
    main: {
        height: 200,
    },
    footer: {
        height: 100,
        background: "#ddd",
    }
}

