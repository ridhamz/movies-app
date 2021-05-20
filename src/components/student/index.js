import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';

export default function Student(){
    const auth = useContext(AuthContext);
    const history = useHistory();
    const { sendRequest, isLoading, error, setError } = useHttpClient();
    const [data, setData] = useState()
    const [encadrant, setEncadrant] = useState()
    const [year, setYear] = useState()

    const fetchData= async()=>{
        await sendRequest("http://localhost:5000/api/project/user/"+auth.user._id,'GET', null, {
             "x-auth-token": auth.token
           }).then((res)=> {
             console.log(res)
             setData(res[0])
             getEncadrant(res[0].encadrant)
             getYear(res[0].year)
           }).catch(err => console.log(err.message) )
     }

     const getEncadrant = async (id)=>{
        sendRequest("http://localhost:5000/api/users/by-user/"+id,
        "GET",null, {
         "x-auth-token": auth.token
       }).then((res)=> {
              console.log(res)
              setEncadrant(res)
        }).catch(err => console.log(err.message) )
    }
    
     
    const getYear = async (id)=>{
        sendRequest("http://localhost:5000/api/years/"+id,
        "GET",null, {
         "x-auth-token": auth.token
       }).then((res)=> {
              console.log(res)
              setYear(res)
        }).catch(err => console.log(err.message) )
    }

     

    useEffect(()=>{
        
        fetchData()
      
    },[])

    if(!data) return <div className="row">
    <div className="col-md-8" style={{margin:'auto'}}>
        <button className="btn btn-primary btn-sm"
                onClick={()=>history.push('/add-pfe')}>New PFE</button>
        <hr/>
        <h3>You Have No Graduation Project!</h3>
        </div>
        </div>


    return <Fragment>
        <div className="row">
            <div className="col-md-8" style={{margin:'auto'}}>
                {
                    data && <button className="bn btn-success btn-sm"
                    onClick={()=>history.push('/edit-pfe/'+data._id)}>Edit Informations</button>
                }
                <hr/>
                <h3>Your Graduation Project :</h3>
                  <div className="row">
                      <div className="col-md-8" style={{margin:"auto"}}>
                          <div className="card">
                              <div style={{maring:"10px", padding:'5px'}}>
                                  <div>Title : {data.title}</div>
                                  <div>Description : {data.description}</div>
                                  <div>University Year : {year?.year}</div>
                                  <div>Creation Date : {data.date}</div>
                                  <div>
                                     Encadrant :
                                  <div style={{border:'1px solid #eee', margin:'10px',padding:'10px'}}>
                                      <div>First Name : {encadrant?.first_name}</div>
                                      <div>Last Name : {encadrant?.last_name}</div>
                                      <div>State : {data.acceptation ? <span style={{color:'green'}}>Accept</span> : <span style={{color:'red'}}>Wait</span>  }</div>
                                      <div>Acceptation Date : {data?.acceptationDate}</div>
                                  </div>
                                    </div>
                              </div>
                          </div>
                      </div>
                      
                  </div>

            </div>
        </div>
    </Fragment>
}