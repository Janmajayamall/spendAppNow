import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from './../actions/auth';

   

export const Header = (props)=>(
    <header className='header'>
        <div className='content-container'> 
            <div className='header__content'>
                <Link className='header__title' to="/dashboard" >
                    <h1>SpendAdd</h1>
                </Link>
                <button className='button button--link' onClick={props.startLogout}>Logout</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) =>{
    return {
        startLogout: () =>{dispatch(startLogout())}
    }
}

export default connect(undefined, mapDispatchToProps)(Header);