import React, { useContext, useState }  from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../shared/context/auth-context';
import { useHttpClient } from "../shared/hooks/http-hook";

function LoginForm() {

    const auth = useContext(AuthContext);
    const history = useHistory();
    const { sendRequest, isLoading, error, setError } = useHttpClient();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const  onHandleSubmit = async (e)=>{
        e.preventDefault();
       
        sendRequest("http://localhost:5000/api/auth",
         "POST", JSON.stringify({email, password}), {
          'Content-Type': 'application/json'
        }).then((res)=> {
          console.log(res)
          auth.login(res.user, res.token)
          const {role} = res.user;

          if(role == "admin") return history.push("/admin")
          if(role == "student") return history.push("/sudent")
          if(role == "teacher") return history.push("/techer")

        }).catch(err => toast.error("Invalid Email or Password") )}
    

        return ( 
     <div className="col-md-8" style={{margin:'auto'}}>
     <h1>Login</h1>
     <form onSubmit={onHandleSubmit}>
     <div class="mb-3">
     <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" 
         value={email}
         onChange={e => setEmail(e.target.value)}
     />
    
     </div>
     <div class="mb-3">
     <label for="exampleInputPassword1" class="form-label">Password</label>
     <input type="password" class="form-control" 
      value={password}
      onChange={e => setPassword(e.target.value)} />
     </div>
  
      <button type="submit" class="btn btn-primary">Submit</button>
</form>
           </div>
         );
    }

 
export default LoginForm;