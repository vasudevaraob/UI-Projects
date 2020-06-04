import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './components/Employee';
import Book from './components/Book';
import StudentList from './components/StudentList';

class App extends Component {

    state={
        employee:{"id":'123654',"branch":'Mech',"status":'Active'}
    }

  render() {
    return (
      <div className="App">
        <h1>Employees List</h1>
        {/* <Employee employee={this.state.employee}></Employee> */}
        {/* <Book></Book> */}
        <StudentList></StudentList>
      </div>
    );
  }
}

export default App;
