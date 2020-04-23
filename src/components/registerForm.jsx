import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import { register } from '../services/userService';
import { loginWithJwt , getCurrentUser } from '../services/authService';

class RegistreForm extends Form {
    state = { 
        data : {username: "", password: "", name:""},
        errors: {}
     }

     schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };

  doSubmit = async() => {
     try{
     const response = await register(this.state.data)
     this.setState({data:{username: "", name: "", password: ""}})
     loginWithJwt(response.headers['x-auth-token']);
     toast('User added successfully .');
     window.location = '/';
     }catch(ex){
       if(ex.response && ex.response.status === 400){
         /*
         const errors = {...this.state.errors}
         errors.username = ex.response.data;
         this.setState({ errors })*/
         const error = ex.response.data;
         return toast.error(error);
       }
     }
  };
    render() { 
       if(getCurrentUser()) return <Redirect ro="/" />;
        return ( 
            <div>
             <h1>Registre</h1>
               <form onSubmit={this.handleSubmit}>
                {this.renderInput('username','Username','text')}
                {this.renderInput('name','Name','text')}
                {this.renderInput('password','Password','password')}
                {this.renderButton('Register')}       
               </form>
           </div>
         );
    }
}
 
export default RegistreForm;