import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Users List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> User Id</td>
                            <td> name</td>
                            <td> email</td>
                            <td> phone number</td>
                            <td> line id</td>
                            <td> createDate</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user => 
                                <tr key = {user.uid}>
                                     <td> {user.uid}</td> 
                                     <td> {user.name}</td>
                                     <td> {user.contact.email}</td>
                                     <td> {user.contact.phone_number}</td>
                                     <td> {user.contact.line_id}</td>
                                     <td> {user.createDate}</td>  
                                         
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default UserComponent