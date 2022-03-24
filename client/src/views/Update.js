import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';

const Update = (props) => {
    const { id } = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [errors, setErrors] = useState([]); 
    const history = useHistory();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
            })
    }, []);
    
    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + id, {
            firstName,
            lastName
        })
            .then(res => {
                history.push('/authors/')
            console.log(res)})
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
                <h3>Update Author</h3>
                <form onSubmit={updateAuthor}>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <p>
                        <label className="form-label">First Name</label>
                        <input className="form-control" type="text" name="firstName" value={firstName} onChange={e=>setFirstName(e.target.value)}/>
                    </p>
                    <p>
                        <label className="form-label">Last Name</label>
                        <input className="form-control" type="text" name="lastName" value={lastName} onChange={e=>setLastName(e.target.value)}/>
                    </p>
                    <div >
                        <Link className="btn btn-danger" to={"/authors/"}>Cancel</Link>
                        <button className="btn btn-primary m-1">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


/*instead of putting this form in a separate component, i kept
it here as reference and a reminder that it works either way*/

export default Update;
