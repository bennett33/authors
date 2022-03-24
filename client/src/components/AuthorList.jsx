import React from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
const AuthorList = (props) => {

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                props.onNewFormSubmit()
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="text-center container">

            {/* {props.authors&& 
            props.authors.map( (author, i) =>
                <div className="d-flex align-items-center justify-content-center">
                    <p key={i}>
                        <Link to={`/authors/${author._id}`}>{author.title}</Link>
                    </p>
                    <button className="btn btn-dark ms-3" onClick={(e)=>{deleteAuthor(author._id)}}>
                        Delete
                    </button>
                </div>

            )} */}
        <h4><Link to={`/authors/new`}>Add an Author</Link></h4>   
        <div className="d-flex align-items-center justify-content-center">
            <table>
                <thead>
                <tr>
                    <th className="me-2"> Author</th>
                    <th colSpan={2}> Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.authors &&
                    props.authors.map((author, i)=>(
                        <tr key={i}>
                        <td>{author.firstName} {author.lastName}</td>
                        <td>
                        <Link to={"/authors/" + author._id + "/edit"}>Edit</Link>
                        </td>
                        <td> <button className="btn btn-sm btn-dark" onClick={()=>deleteAuthor(author._id)}>Delete</button></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>




        </div>
    )
}
    
export default AuthorList;
