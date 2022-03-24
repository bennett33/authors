import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';

export default (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [errors, setErrors] = useState([]); 


    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors/new', {
            firstName,
            lastName
        })
            .then(res=>{ 
                console.log("Response: ", res)
                setFirstName("")
                setLastName("")
                props.onNewFormSubmit()
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })            
    }
    return (
        <div className="container">
        <h4 className="text-center"><Link to={`/authors/`}>Home</Link></h4>  
            <div className="container w-50 shadow p-3 my-5 bg-body rounded">
                <h3>Add Author</h3>
                <form onSubmit={onSubmitHandler}>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <p>
                        <label className="form-label">First Name</label>
                        <input className="form-control" type="text" name="firstName" value={firstName} onChange={e=>setFirstName(e.target.value)}/>
                    </p>
                    <p>
                        <label className="form-label">Last Name</label>
                        <input className="form-control" type="text" name="lastName" value={lastName} onChange={e=>setLastName(e.target.value)}/>
                    </p>
                    <div>
                        <Link className="btn btn-danger" to={"/authors/"}>Cancel</Link>
                        <button className="btn btn-primary m-1">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

