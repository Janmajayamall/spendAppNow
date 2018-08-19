import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseForm from './ExpenseForm.js';
import { connect } from 'react-redux';
import {startAddExpense} from './../actions/expenses.js';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) =>{
                this.props.startAddExpense(expense);
                this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm onSubmit={this.onSubmit}/> 
            </div>
        );
    }
}

const matchDispatchToProps = (dispatch) =>{
    return{
        startAddExpense: (expense) =>{dispatch(startAddExpense(expense))}
    }
}

export default connect(undefined, matchDispatchToProps)(AddExpensePage);