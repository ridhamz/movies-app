import { Component } from 'react';
import { logout } from '../services/authService';

class Logout extends Component {
    componentDidMount(){
        logout();
        window.location = '/movies-app';
       //this.props.history.push('/movies');
    }
    render() { 
        return null;
    }
}
 
export default Logout;