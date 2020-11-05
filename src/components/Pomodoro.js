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


export function Timer (props){
        const date = new Date().toISOString()
        return (
            <div>
                {date}
            </div>
            );
      };
