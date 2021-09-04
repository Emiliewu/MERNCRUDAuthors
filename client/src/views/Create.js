import React, {useState} from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

export default function Create() {
  const [errors, setErrors] = useState([]);
  let history = useHistory();

  const createAuthor = (author) => {
    axios.post('http://localhost:8000/api/authors', author)
      .then(res => history.push('/'))
      .catch(err => {
         console.log(err.response.data);
        const errorArr = Object.values(err.response.data.errors);
        setErrors(errorArr.map(err => err.message));
    });
  };
  
  return(
    <div id="createAuthor">
      <Link to="/">Home</Link>
      <p>Add a new author:</p>
      <AuthorForm 
        onSubmitProp={createAuthor} 
        initName=""
        errors={errors}
        button="Create" />
    </div>
  );
}

