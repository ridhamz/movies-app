import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';

export default function Profile(){
    const auth = useContext(AuthContext);
    const { sendRequest, isLoading, error, setError } = useHttpClient();
    const history = useHistory()

    const {user} = auth;


    const [email, setEmail] = useState('')
    const [cin, setCin] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')

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

    return <Fragment>
        <div className="row">
            <div className="col-md-8" style={{margin:'auto', padding:'30px'}}>
                <button className="btn btn-primary btn-sm"
                        onClick={()=>history.push("/edit-profile")}>Edit Profile</button> {" "}
                <button className="btn btn-danger btn-sm"
                        onClick={()=>history.push('/change-password')}>Change Password</button>
                <hr/>
                <div className="card" style={{margin:'auto', padding:'20px'}}>
                    <pre>
                    <div>First Name : {first_name}</div>
                    <div>Last Name  : {last_name}</div>
                    <div>Email      : {email}</div>
                    <div>Cin        : {cin}</div>
                    </pre>
                </div>
            </div>
        </div>
    </Fragment>
}