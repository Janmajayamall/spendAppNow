import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'


const NotFoundPage = () =>(
    <div>
        404! - <NavLink to="/">Go Home</NavLink>
    </div>
);  

export default NotFoundPage;