import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';

export default function Teachers(){
    const auth = useContext(AuthContext);
    const history = useHistory();
    const { sendRequest, isLoading, error, setError } = useHttpClient();

    const [email, setEmail] = useState('')
    const [cin, setCin] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [data, setData] = useState([])

    const fetchData= async()=>{
        await sendRequest("http://localhost:5000/api/users/teacher",'GET', null, {
             'Content-Type': 'application/json',
             "x-auth-token": auth.token
           }).then((res)=> {
             console.log(res)
             setData(res)
           }).catch(err => console.log(err.message) )
     }

    useEffect(()=>{
        

        fetchData()
      
    },[])

    const  onHandleSubmit = async (e)=>{
        e.preventDefault();
       
        sendRequest("http://localhost:5000/api/users",
         "POST", JSON.stringify({first_name,last_name,email,cin, role:'teacher'}), {
          'Content-Type': 'application/json',
          "x-auth-token": auth.token
        }).then((res)=> {
          console.log(res)
          setFirstName('')
          setLastName('')
          setEmail('')
          setCin('')
          fetchData()
          toast.success("student added")
        }).catch(err => console.log(err.message) )}


        const onHandelDelete = id => {
            const c = window.confirm('Are you sure!')
            if(c){
                const newData = data.filter(d => d._id !== id)
                setData([...newData])
                sendRequest("http://localhost:5000/api/users/"+id,
                            "DELETE", null, {
                            'Content-Type': 'application/json',
                             "x-auth-token": auth.token
        }).then((res)=> {
          toast.success("student deleted")
        }).catch(err => console.log(err.message) )}
      }
        
    

    return (
        <Fragment>
 <div className="row">
<div className="col-md-4">
         <h1>Add New Teacher</h1>
         <form onSubmit={onHandleSubmit}>
         <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">First Name</label>
          <input type="text" class="form-control" 
                 value={first_name}
                 onChange={e => setFirstName(e.target.value)} />
          </div>

          <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Last Name</label>
          <input type="text" class="form-control" 
                 value={last_name}
                 onChange={e => setLastName(e.target.value)} />
          </div>

         <div class="mb-3">
         <label for="exampleInputEmail1" class="form-label">Email address</label>
         <input type="email" class="form-control" 
                value={email}
                onChange={e => setEmail(e.target.value)}
          />
    
         </div>

          <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Cin</label>
          <input type="number" class="form-control" 
                 value={cin}
                 onChange={e => setCin(e.target.value)} />
          </div>
  
      <button type="submit" class="btn btn-primary">Add New Teacher</button>
   </form>
     </div>

                <div className="col-md-8">
                <table class="table">
  <thead>
    <tr>
  
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">CIN</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map(d => {
            return(
                <tr>
                    <td>{d.first_name}</td>
                    <td>{d.last_name}</td>
                    <td>{d.email}</td>
                    <td>{d.cin}</td>
                    <td>
                        <button className="btn btn-success btn-sm" onClick={()=>history.push("/edit-user/"+d._id)}>Edit</button> |
                        <button className="btn btn-danger btn-sm" onClick={()=>onHandelDelete(d._id)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }
   
  </tbody>
</table>
 </div>
            </div>
        </Fragment>
    )
}