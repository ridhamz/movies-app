import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';
import axios from 'axios';
import { Fragment } from 'react';

export default function Teacher(){
    const auth = useContext(AuthContext);
    const history = useHistory();
    const { sendRequest, isLoading, error, setError } = useHttpClient();
    const [data, setData] = useState()

    const fetchData= async()=>{
         /*sendRequest("http://localhost:5000/api/encadrement",'GET', null, {
        
             "x-auth-token": auth.token
           }).then((res)=> {
             alert()
           }).catch(err =>alert())*/

          

           axios.get('http://localhost:5000/api/encadrement/'+auth.user._id)
                .then(res => {
                  console.log(res.data)
                  setData(res.data)
                })
                .catch(err => console.log(err.message))
     }

     useEffect(()=>{
         fetchData()
     },[])

     const accept = (projectID, encID) => {
      axios.post('http://localhost:5000/api/encadrement/change-status/'+encID+'/'+projectID)
      .then(function (response) {
        console.log(response);
        fetchData()
      }).catch(err => console.log(err))
     }
    
     if(!data) return <div className="row">
      <div className="col-md-8" style={{margin:'auto', margin : '10px',padding:'20px'}}>
        
        <hr/>
        <h3>You Have No Invitation!</h3>
        </div>
        </div>


    return <Fragment>
    <div className="row">
        <div className="col-md-8" style={{margin:'auto',padding:'20px'}}>
            <hr/>
            <h3>PFE List :</h3>
            {data.map(d=>(
               <div className="row" style={{margin:"auto", margin: '2px'}}>
                  <div className="col-md-6" style={{margin:"auto"}}>
                      <div className="card">
                          <div style={{maring:"10px", padding:'5px'}}>
                              <div>Title : {d.project.title}</div>
                              <div>Description : {d.project.description}</div>
                              <div>Creation Date : {d.project.date}</div>
                              <div>State : {d.project.acceptation ? <span style={{color:'green'}}>Accept</span> : <span style={{color:'red'}}>Wait</span>  }</div>
                              <div> Acceptation Date : {d.project?.acceptationDate} </div>
                              <div>
                                 Student :
                              <div style={{border:'1px solid #eee', margin:'10px',padding:'10px'}}>
                                  <div>First Name : {d.student?.first_name}</div>
                                  <div>Last Name : {d.student.last_name}</div>
                              </div>
                              {!d.project.acceptation && <button className='btn btn-success btn-sm'
                                                                 onClick={()=>accept(d.project._id, d.id)}
                                                         >Accept</button>}
                                </div>
                          </div>
                      </div>
                  </div>
                  
              </div>
            ))}
              

        </div>
    </div>
</Fragment>
    }