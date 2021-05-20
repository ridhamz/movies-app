import React, { useContext, useEffect, useReducer, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';

export default function ChangePassword(){
    const history = useHistory();

    const auth = useContext(AuthContext);
    const { sendRequest, isLoading, error, setError } = useHttpClient();

    const {user} = auth;

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


   

    const  onHandleSubmit = async (e)=>{
        e.preventDefault();
        if(!newPassword || !oldPassword) return toast.error('Invalid Data')
       if(newPassword !== confirmPassword ) return toast.error(' Confirm Password')
        sendRequest("http://localhost:5000/api/users/change-password/"+user._id,
         "PUT", JSON.stringify({newPassword, oldPassword}), {
          'Content-Type': 'application/json',
          "x-auth-token": auth.token
        }).then((res)=> {
          console.log(res)
         toast.success("password changed")
         history.push('/profile')
        }).catch(err =>{
            toast.success("password changed")
            history.push('/profile')
        } )}

       

    return <div className="row">
        <div className="col-md-8" style={{margin:'auto', padding:'20px'}}>
            <div className="card" style={{padding:'20px'}}>
                <h4>Change Password</h4>
            <form onSubmit={onHandleSubmit}>
         <div class="mb-3">
          <label class="form-label">Old Password</label>
          <input type="passwoed" class="form-control" 
                 value={oldPassword}
                 onChange={e => setOldPassword(e.target.value)} />
          </div>

          <div class="mb-3">
          <label class="form-label">New Password</label>
          <input type="password" class="form-control" 
                 minLength="6"
                 value={newPassword}
                 onChange={e => setNewPassword(e.target.value)} />
          </div>

          <div class="mb-3">
          <label class="form-label">Confirm New Password</label>
          <input type="password" class="form-control" 
                 minLength="6"
                 value={confirmPassword}
                 onChange={e => setConfirmPassword(e.target.value)} />
          </div>

          <button type="submit"  className="btn btn-danger btn-sm">Change...</button>
          </form>
            </div>

        </div>
    </div>    
}