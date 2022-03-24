import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';



const Create =(props) => {

    const [authors, setAuthors] = useState([]);
    const [refresh, setRefresh] = useState(true);
    

    
    function refreshAfterFormSubmit() {
        setRefresh(!refresh);
        console.log("refresh");
    }
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors/new')
            .then(res=>setAuthors(res.data))
            .catch(err=>console.log(err))
    }, [refresh]);

    
    return (
        <>
            <AuthorForm onNewFormSubmit={refreshAfterFormSubmit}/>
        </>
    )
}

export default Create;