import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';
import DatePicker from 'react-datepicker'
import moment from "moment"
import "react-datepicker/dist/react-datepicker.css";

export default function Years(){
    const auth = useContext(AuthContext);
    const history = useHistory();
    const { sendRequest, isLoading, error, setError } = useHttpClient();

    const [first_year, setFirstYear] = useState('2021')
    const [last_year, setLastYear] = useState('2022')
    const [depotDate, setDepotDate] = useState(new Date());
 
    const [data, setData] = useState([])

    const fetchData= async()=>{
        await sendRequest("http://localhost:5000/api/years",'GET', null, {
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

        if(first_year > last_year) return toast.error("Invalid data")
        if(last_year - first_year !== 1) return toast.error("Invalid data")

        const year = first_year+"/"+last_year

        const exist = data.find(d => d.year === year)
        if(exist) return toast.error("Year exist")
       
        sendRequest("http://localhost:5000/api/years",
         "POST", JSON.stringify({year,depotDate}), {
          'Content-Type': 'application/json',
          "x-auth-token": auth.token
        }).then((res)=> {
          console.log(res)
          fetchData()
          toast.success("year added")
        }).catch(err => console.log(err.message) )}


        const onHandelDelete = id => {
            const c = window.confirm('Are you sure!')
            if(c){
                const newData = data.filter(d => d._id !== id)
                setData([...newData])
                sendRequest("http://localhost:5000/api/years/"+id,
                            "DELETE", null, {
                            'Content-Type': 'application/json',
                             "x-auth-token": auth.token
        }).then((res)=> {
          toast.success("student deleted")
        }).catch(err => console.log(err.message) )}
      }
      
      let options = [];

      for(let i=2021; i <2099; i++){
        options.push(i)
      }
        
    

    return (
        <Fragment>
 <div className="row">
<div className="col-md-4">
         <h1>Add New university Year</h1>
         <form onSubmit={onHandleSubmit}>
         <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Year</label>
          <div className="row">
              <div className="col-md-6">
              <select className="form-control" 
                    value={first_year} onChange={e => setFirstYear(e.target.value)}>
                {
                    options.map(op => <option value={op}>{op}</option>)
                }
            </select> 
              </div>

              <div className="col-md-6">
              <select className="form-control" 
              value={last_year} onChange={e => setLastYear(e.target.value)}>
                {
                    options.map(op => <option value={op}>{op}</option>)
                }
            </select>
              </div>
          </div>
           
          </div>

         

         <div class="mb-3">
         <label for="exampleInputEmail1" class="form-label">Dépot Date </label><br/>
         <DatePicker  className="form-control" selected={depotDate} onChange={date => setDepotDate(date)}/>
    
         </div>

         
  
      <button type="submit" class="btn btn-primary">Add New Year</button>
   </form>
     </div>

 <div className="col-md-8">
 <table class="table">
  <thead>
    <tr>
  
      <th scope="col">Year</th>
      <th scope="col">Depot Date </th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map(d => {
            return(
                <tr>
                    <td>{d.year}</td>
                    <td>
                    <DatePicker selected={moment(d.depotDate).toDate()} disabled/>
                        </td>
                    <td>
                        <button className="btn btn-success btn-sm" onClick={()=>history.push("/edit-year/"+d._id)}>Edit</button> |
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
 </Fragment>)}