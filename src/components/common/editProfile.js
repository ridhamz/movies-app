import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';

export default function EditProfile(){
    const history = useHistory();

    const auth = useContext(AuthContext);
    const { sendRequest, isLoading, error, setError } = useHttpClient();

    const {user} = auth;

    const [email, setEmail] = useState('')
    const [cin, setCin] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')

   

    const  onHandleSubmit = async (e)=>{
        e.preventDefault();
       
        sendRequest("http://localhost:5000/api/users/"+user._id,
         "PUT", JSON.stringify({first_name,last_name,email,cin, role: user.role}), {
          'Content-Type': 'application/json',
          "x-auth-token": auth.token
        }).then((res)=> {
          console.log(res)
         toast.success("profile updated")
         history.push('/profile')
        }).catch(err => console.log(err.message) )}

        const getUser = async ()=>{
            sendRequest("http://localhost:5000/api/users/by-user/"+user._id,
            "GET",null, {
             'Content-Type': 'application/json',
             "x-auth-token": auth.token
           }).then((res)=> {
                  console.log(res)
             setFirstName(res.first_name)
             setLastName(res.last_name)
             setEmail(res.email)
             setCin(res.cin)
            }).catch(err => console.log(err.message) )
        }

        useEffect(()=>{
            getUser()
        },[])

    return <div className="row">
        <div className="col-md-8" style={{margin:'auto', padding:'20px'}}>
            <div className="card" style={{padding:'20px'}}>
                <h4>Edit Profile</h4>
            <form onSubmit={onHandleSubmit}>
         <div class="mb-3">
          <label class="form-label">First Name</label>
          <input type="text" class="form-control" 
                 value={first_name}
                 onChange={e => setFirstName(e.target.value)} />
          </div>

          <div class="mb-3">
          <label class="form-label">Last Name</label>
          <input type="text" class="form-control" 
                 value={last_name}
                 onChange={e => setLastName(e.target.value)} />
          </div>

          <div class="mb-3">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" 
                 value={email}
                 onChange={e => setEmail(e.target.value)} />
          </div>

          <div class="mb-3">
          <label class="form-label">Cin</label>
          <input type="text" class="form-control" 
                 value={cin}
                 onChange={e => setCin(e.target.value)} />
          </div>
          <button type="submit"  className="btn btn-success btn-sm">Update</button>
          </form>
            </div>

        </div>
    </div>    
}