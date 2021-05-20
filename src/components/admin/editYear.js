import React, { useContext, useEffect, useState } from 'react';
import { Fragment } from 'react';
import { useHistory, useParams } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/http-hook';
import DatePicker from 'react-datepicker'
import moment from "moment"
import "react-datepicker/dist/react-datepicker.css";

export default function EditYear(){

    const auth = useContext(AuthContext);
    const history = useHistory();
    const { sendRequest, isLoading, error, setError } = useHttpClient();

  
    const [data, setData] = useState([])

    const [first_year, setFirstYear] = useState('')
    const [last_year, setLastYear] = useState('')
    const [depotDate, setDepotDate] = useState(new Date());

    const { id } = useParams();
   const getYear = async ()=>{
       sendRequest("http://localhost:5000/api/years/"+id,
       "GET",null, {
        'Content-Type': 'application/json',
        "x-auth-token": auth.token
      }).then((res)=> {
             console.log(res)
             setFirstYear(res.year.substring(0,4))
             setLastYear(res.year.substring(5,9))
             //alert(last_year)
             setDepotDate(moment(res.depotDate).toDate())
       }).catch(err => console.log(err.message) )
   }

 


    useEffect(()=>{
      getYear()
    },[])



       const  onHandleSubmit = async (e)=>{
        e.preventDefault();

        if(first_year > last_year) return toast.error("Invalid data")
        if(last_year - first_year !== 1) return toast.error("Invalid data")

        const year = first_year+"/"+last_year

     
       
        sendRequest("http://localhost:5000/api/years/"+id,
         "PUT", JSON.stringify({year,depotDate}), {
          'Content-Type': 'application/json',
          "x-auth-token": auth.token
        }).then((res)=> {
          console.log(res)
          toast.success("year updated")
          history.push("/years")
        }).catch(err => console.log(err.message) )}

       let options = [];

       for(let i=2021; i <2099; i++){
         options.push(i)
       }

    return(
        <Fragment>
            <div className="row">
<div className="col-md-8">
         <h1> Update University Year</h1>
         <form onSubmit={onHandleSubmit}>
         <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Year</label>
          <div className="row">
              <div className="col-md-6">
              <select className="form-control" 
                    value={first_year} onChange={e => setFirstYear(e.target.value)}>
                {
                    options.map(op => <option 
                                        value={op}
                                         selected={op == first_year}>
                                            {op}
                                        </option>)
                }
            </select> 
              </div>

              <div className="col-md-6">
              <select className="form-control" 
              value={last_year}  onChange={e => setLastYear(e.target.value)}>
                {
                    options.map(op => <option selected={op == last_year} value={op}>{op}</option>)
                }
            </select>
              </div>
          </div>
           
          </div>


         <div class="mb-3">
         <label for="exampleInputEmail1" class="form-label">Dépot Date </label><br/>
         <DatePicker className="form-control" selected={depotDate} onChange={date => setDepotDate(date)}/>
    
         </div>
  
      <button type="submit" class="btn btn-success">Update  Year</button>
   </form>
     </div>
     </div>
        </Fragment>
    )
}