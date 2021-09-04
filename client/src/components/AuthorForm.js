  import React, {useState} from 'react';
  import { Link } from 'react-router-dom';

  export default function AuthorForm(props) {
    const { initName, onSubmitProp, button } = props;
    const [name, setName] = useState(initName);
  
    const onSubmitHandler = (evt) => {
      evt.preventDefault();
      onSubmitProp({name: name.trim()});
      setName('');
    };
  
    return (
      <form onSubmit={onSubmitHandler}>
        { props.errors.map((err, index) => <p className="error" key={index}>{err}</p>) }
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <div id="button">
          <button><Link to="/">Cancel</Link></button>
          <button type="submit">{ button }</button>
        </div>
      </form>
    );
  };
  
  