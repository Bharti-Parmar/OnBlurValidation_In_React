import { remove, truncate } from 'lodash';
import React, { Component } from 'react';
// import { ReactReduxContext } from 'react-redux';
import './css/Validation.css';
import RegisterData from '../RegisteredData/RegisterData';

class Index extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: '',
            email: '',
            contact: '',
            address: '',
            usernameErr: '',
            emailErr: '',
            contactErr: '',  
            myData: {}
        }
    }


    onChangeUsername = event => {
        this.setState({ username: event.target.value });
        this.validateUsername(event.target.value);
    };

    onChangeEmail = event => {
        this.setState({ email: event.target.value });
        this.validateEmail(event.target.value);
    };

    onChangeContact = event => {
        this.setState({ contact: event.target.value });
        this.validateContact(event.target.value);
    };

    onChangeAddress = event => {
        this.setState({ address: event.target.value });
    };

    validateUsername = (username) => {
        let err = false;
        let usernameErr = "";

        //when username is null
        if(username == "") {
            err = true;
            usernameErr = 'Please, Enter Username!';
        }
        
        if(!err){
            //if username not valid
            if (!username.match(/^[a-zA-Z ]*$/)) {
                // alert('Invalid Username. Enter Characters only');
                err = true;
                usernameErr = 'Invalid Username. Enter Characters only';
            }
        }
        
        this.setState({
            usernameErr,
        });

        return err;
    }

    validateEmail = (email) => {
        let emailErr = "";
        let err = false;

        // if email is null
        if (email.length == 0) {
            err = true;
            emailErr = 'Please, Enter Email!';
        }

        if(!err){
            // if email format is invalid
            if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                err = true;
                emailErr = 'This is not a valid email format. Please enter valid Email!';
            }
        }
        
        this.setState({
            emailErr,
        })

        return err;
    }

    validateContact = (contact) => {
        var allowedChars = "0123456789";
        let err = false;
        let contactErr = "";
        
        if (contact == "") {
            err = true;
            contactErr = 'Please, Enter Contact!';
        }

        if(!err){
            if(contact.length > 10 || contact.length < 10){
                err = true;
                contactErr = 'Please, Enter 10 digit contact!';
            }

            if(!err){
                if(!(/^[0-9]{10}$/.test(contact))){
                    err = true;
                    contactErr = 'Only number allowed!';
                }
            }

            // for (var idx = 0; idx < contact.length; idx++) {
            //     if (idx === 0) {
            //         err = true;
            //         if (allowedChars.indexOf(contact.charAt(idx)) === -1) {
            //             contactErr = 'Please Enter Valid contact!';
            //         }
            //     }
            // }
        }

        this.setState({
            contactErr: contactErr,
        })
        
        return err;
    }


    onEdit = (index) => {
        let nData = this.state.myData;   
        this.setState({
            username: nData.username,
            email: nData.email,
            contact: nData.contact,
            address: nData.address,
        })
    }


    onDelete = (index) => {
        let nData = {};
        this.setState({
            myData: nData
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!(this.validateUsername(this.state.username)) || !(this.validateEmail(this.state.email)) || !(this.validateContact(this.state.contact))){

            let data = {
                username: this.state.username,
                email: this.state.email,
                contact: this.state.contact,
                address: this.state.address
            };

            this.setState({
                myData: data,
                username: '',
                email: '',
                contact: '',
                address: ''
            })
        }
    }

    render() {
        return (
            <div>
                <div className="card mx-auto mt-4 p-3">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" className="form-control" value={this.state.username} onChange={this.onChangeUsername} id="username" placeholder="Enter Username" name="username" />
                            <span className="text-danger">{this.state.usernameErr}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} id="email" placeholder="Enter email" name="email" />
                            <span className="text-danger">{this.state.emailErr}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact">Contact:</label>
                            <input type="tel" className="form-control" value={this.state.contact} onChange={this.onChangeContact} id="contact" placeholder="Enter contact" name="contact" />
                            <span className="text-danger">{this.state.contactErr}</span>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address:</label>
                            <textarea type="address" className="form-control" value={this.state.address} onChange={this.onChangeAddress} id="address" placeholder="Enter address" name="address" maxLength="200" />
                        </div>
                        <button type="submit" className="btn btn-success mr-2">Submit</button>
                        {/* <button type="reset" className="btn btn-warning ml-2" onClick={this.onReset}>Reset</button> */}
                    </form>
                </div>
                <div>
                {
                    Object.keys(this.state.myData).length > 0 ? 
                        <RegisterData myData={[this.state.myData]} onUpdate={this.onEdit} onDelete={this.onDelete} />
                    : null
                 }
                    
                </div>
            </div>
        );
    }
}


export default Index;