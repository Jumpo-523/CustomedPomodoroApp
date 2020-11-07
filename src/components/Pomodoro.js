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

class OnOffButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }
    
      render() {
        return (
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        );
      }
    }

class StartTaskButton extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            tasks: ["hoge", "sample"],　
            new_task:"", 
            history: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }
    handleChange(event) {
        this.setState({new_task: event.target.value});
      }
    initialize_new_task (){
        this.setState({new_task: ""});
    }
    handleClick(event) {
        const new_task = this.state.new_task
        // console.log('event:', new_task)
        this.state.tasks.push(new_task)
        this.initialize_new_task();
      }

    render() {
        const tasks = this.state.tasks;
        const task_list = tasks.map((item)=> {
            return (
                <TaskDetails>{item}</TaskDetails>)                
            })
        // console.log(task_list)
        return (
            <div class="task">
                <input type="text" class="task_input" 
                    value={this.state.new_task}
                    onChange={this.handleChange}
                    >
                </input>
                <br></br>
                <button class="btn-liquid button" onClick={this.handleClick}>
                    <span class="inner">Liquid button ?</span> 
                </button>
                <div>The Tasks:<br></br>{task_list}</div>

            </div>
    );}
}
class TaskDetails extends React.Component{
    // task nameと、そのカテゴリ、処理時間を入力できるようにする。
    // google calendarと同期し、作業録を付けられるようにする。
    constructor(props){
        super(props);
        this.state = { 
            start_time: Date(),
            end_time: null,
         };
        this.handleClick = this.handleClick.bind(this);
      }
    componentDidMount() {
        // this.interval = setInterval(() => this.setState({
        //      start_time: Date(),
        //      end_time: Date(),
        //      }), 1000);
      }
    handleClick(event) {
        this.setState({end_time: Date()});
    }
    is_ended(){
        if (this.state.end_time){
            return true
        }else{
            return false
        }
    }
    render (){

        return (
        <li>
            {this.props.children}:<button onClick={this.handleClick}>End</button>

            <div disabled={this.is_ended()}>Ended at {this.state.end_time}</div>
        </li>
        )
    }

}

// 時間を止めて、テーブルにコメントと一緒に吐き出したい。
// 

export class Pomodoro extends React.Component{
    constructor(props){
        super(props);
        this.state = { time: Date() };
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
                <br></br>
                <OnOffButton className="footer"></OnOffButton>
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

