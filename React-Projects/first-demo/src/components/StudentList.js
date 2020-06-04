import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';


class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            students:[{
                "id":"1",
                "name":"Vasudev",
                "status":"Active"
            },{
                "id":"2",
                "name":"Naresh",
                "status":"Active"
            },{
                "id":"3",
                "name":"Lakki",
                "status":"Active"
            },{
                "id":"4",
                "name":"Kista",
                "status":"Active"
            }]
         };
    }

    handelRemove=(index)=>{

        const current = this.state;
        let newstate = current.filter(student,ind)=>{return id !== index;
        }

    }
    render() {
        return (
            <div>
                <h1>Student List</h1>
                <table className="table table-dark">
                    <thead>
                        <th>Student ID</th>
                        <th>Student NAME</th>
                        <th>Student STATUS</th>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map((Student,ind)=>{

                                return <tr key="ind">
                                        <td>{Student.id}</td>
                                        <td>{Student.name}</td>
                                        <td>{Student.status}</td>
                                        <button className="btn btn-info">Edit</button>
                                        <button className="btn btn-danger" onClick={this.handelRemove}>Remove</button>
                                </tr>
                            }

                            )
                        }
                    </tbody>
                </table>

            </div>
            
        );
    }
}

export default StudentList;