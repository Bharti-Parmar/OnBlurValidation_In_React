import React, { Component } from 'react';

class RegisterData extends Component {
    render() {
        return (
            <div>
                <h1 className="mt-4">Registered Data</h1>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.myData.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.username}</td>
                                    <td>{data.email}</td>
                                    <td>{data.contact}</td>
                                    <td>{data.address}</td>
                                    <td>
                                        <button className="btn btn-warning mr-1" onClick={()=>this.props.onUpdate(index)}>Edit</button> 
                                        <button className="btn btn-danger ml-1" onClick={()=>this.props.onDelete(index)}>Del</button>
                                    </td>
                                </tr>
                            ))
                        }
        
                    </tbody>
                </table>
            </div>
        );
    }
}

export default RegisterData;