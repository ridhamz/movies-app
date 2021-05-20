import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';

export default function AddPFE(){
    const auth = useContext(AuthContext);
    const history = useHistory();
    const { sendRequest, isLoading, error, setError } = useHttpClient();
    
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [year, setYear] = useState(null)
    const [years, setYears] = useState([])
    const [encadrant, setEncadrant] = useState(null)
    const [teachers,setTeachers] = useState([])

    const fetchData= async()=>{
        await sendRequest("http://localhost:5000/api/years",'GET', null, {
             'Content-Type': 'application/json',
             "x-auth-token": auth.token
           }).then((res)=> {
             console.log(res)
             setYears(res)
             setYear(res[0]._id)
           }).catch(err => console.log(err.message) )
     }

     const getTeachers = async ()=> {
        await sendRequest("http://localhost:5000/api/users/teacher",'GET', null, {
            'Content-Type': 'application/json',
            "x-auth-token": auth.token
          }).then((res)=> {
            console.log(res)
            setTeachers(res)
          }).catch(err => console.log(err.message) )
     }

    useEffect(()=>{
        
        fetchData()
        getTeachers()
      
    },[])

    const  onHandleSubmit = async (e)=>{
        e.preventDefault();
       
        sendRequest("http://localhost:5000/api/project",
         "POST", JSON.stringify({title,description,year, encadrant}), {
          'Content-Type': 'application/json',
          "x-auth-token": auth.token
        }).then((res)=> {
          console.log(res)
          toast.success("Project added")
          history.push("/")
        }).catch(err => console.log(err.message) )}

    return <Fragment>
        <div className="row">
            <div className="col-md-8" style={{margin:'auto'}}>
                <center><h2>Add Graduation Project</h2></center>
                <hr/>
                
         <form onSubmit={onHandleSubmit}>
         <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Title</label>
          <input type="text" class="form-control" 
                 value={title}
                 onChange={e => setTitle(e.target.value)} />
          </div>

          <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Description</label>
          <input type="text" class="form-control" 
                 value={description}
                 onChange={e => setDescription(e.target.value)} />
          </div>

          <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">University Year</label>
           <select className="form-control" value={year} onChange={e =>setYear(e.target.value)} >
               {
                   years.map(y => <option value={y._id}>{y.year}</option>)
               }
           </select>
          </div>

          <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Teacher</label>
           <select className="form-control" value={encadrant} onChange={e =>setEncadrant(e.target.value)} >
               {
                   teachers.map(t => <option value={t._id}>{t.first_name+" "+t.last_name}</option>)
               }
           </select>
          </div>

    
           <button type="submit" class="btn btn-primary">Add</button>
     </form>
            </div>
        </div>
    </Fragment>
}