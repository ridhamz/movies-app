import React  from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { Redirect } from 'react-router-dom';
import { login, getCurrentUser } from '../services/authService';
import { toast } from 'react-toastify';

class LoginForm extends Form {

    state = {
        data: {username: '', password: ''},
        errors: {}
    }

    schema = {
        username: Joi.string()
            .required()
            .label('Username'),
        password: Joi.string()
            .required()
            .label('Password')
    }

   

    doSubmit = async() =>{
        const { username, password } = this.state.data;
        try{
         await login(username, password);
        this.setState({data:{username: "",password:""}})
        toast("welcome!")
         const { state } = this.props.location;
        window.location = state ? state.from.pathname : '/movies-app';
        }catch(ex){
            if(ex.response && ex.response.status === 400){
             const error = ex.response.data;
             toast.error(error);
            }
        }
    }
    
   
    render() { 
        if(getCurrentUser()) return <Redirect ro="/" />;
        return ( 
           <div>
             <h1>Login</h1>
               <form onSubmit={this.handleSubmit}>
                {this.renderInput('username','Username','text')}
                {this.renderInput('password','Password','password')}
                {this.renderButton('Login')}       
               </form>
           </div>
         );
    }
}
 
export default LoginForm;