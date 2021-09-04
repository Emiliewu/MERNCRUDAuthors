import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
// import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import AuthorList from '../components/AuthorList';

export default function Main() {
  const [authors, setAuthors] = useState([]);
  const [Cached, setCached] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const handleChange = (ev) => {
    const search = ev.target.value.trim();
    setAuthors(Cached.filter(author => author.name.toLowerCase().includes(search)));
  };

  useEffect(()=>{
    axios.get('http://localhost:8000/api/authors')
      .then(res => {
        setAuthors(res.data);
        setCached(res.data);
        setLoaded(true);
      })
      .catch(err => console.log(err));    
  }, []);

  const removeFromDom = (id) => {
    setAuthors(authors.filter(author => author._id !== id));
  };

  return(
    <div id="main">
      <Link to="/new">Add an author</Link>
      <div>
        <p>We have quotes by:</p>
        <TextField
          id="search"
          label="Search by name" 
          variant="standard"
          autoComplete="off"
          spellCheck="false"
          InputProps={{
            endAdornment: 
              <InputAdornment>
                <Icon color="primary">search</Icon>
              </InputAdornment>
          }}
          onChange={handleChange}
        />
      </div>
      {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom} />}
    </div>
  );
}