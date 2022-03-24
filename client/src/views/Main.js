import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import AuthorList from '../components/AuthorList';



const Main =(props) => {

    const [authors, setAuthors] = useState([]);
    const [refresh, setRefresh] = useState(true);
    
    function refreshAfterFormSubmit() {
        setRefresh(!refresh);
        console.log("refresh");
    }
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>setAuthors(res.data))
            .catch(err=>console.log(err))
    }, [refresh]);

    
    return (
        <>
            <AuthorList onNewFormSubmit={refreshAfterFormSubmit} authors={authors}/>
        </>
    )
}

export default Main;