import React from 'react'
import {shallow} from 'enzyme';
import {EditExpensePage} from './../../components/EditExpense.js';
import expenses from './../fixtures/expenses'


let startEditExpense, startRemoveExpense, wrapper, history;

beforeEach(()=>{
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = {push: jest.fn()}
    wrapper = shallow(<EditExpensePage startEditExpense = {startEditExpense} startRemoveExpense = {startRemoveExpense} history = {history} expense = {expenses[0]} />);
});

test('it should render EditExpensePage properly', ()=>{
    expect(wrapper).toMatchSnapshot();
}); 

test('should handle editExpense properly', ()=>{

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('should remove expense properly', ()=>{

    wrapper.find('button').prop('onClick')();
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[0].id);
});


