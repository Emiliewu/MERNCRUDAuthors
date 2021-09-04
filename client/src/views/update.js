import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useHistory, useParams } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

export default function Update(props) {
  const [author, setAuthor] = useState({});
  const [errors, setErrors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const {id} = useParams();
  //console.log("update id: "+id);
  let history = useHistory();

  useEffect(()=>{
    axios.get('http://localhost:8000/api/author/'+id)
      .then(res =>{
        setAuthor(res.data);
        setLoaded(true);
      })
  },[]);

  const updateAuthor = (author) => {
    axios.put(`http://localhost:8000/api/author/${id}`, author)
      .then(res => history.push('/'))
      .catch(err => {
        const errorArr = Object.values(err.response.data.errors);
        setErrors(errorArr.map(err => err.message));
    });
  }
  return(
    <div id="updateAuthor">
      <Link to="/">Home</Link>
      <p>Edit author:</p>
      { loaded && 
        <AuthorForm 
          onSubmitProp={updateAuthor} 
          initName={author.name}
          errors={errors}
          button="Update" />
      }
    </div>
  );
}