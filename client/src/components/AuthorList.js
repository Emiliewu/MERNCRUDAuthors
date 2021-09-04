import React from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

export default function AuthorList(props) {
  const {authors, removeFromDom} = props;

  return(
    <table>
      <thead>
        <tr>
          <th>Author</th>
          <th>Actions available</th>
        </tr>
      </thead>
      <tbody>
      { authors.map(({_id, name}) => 
        <tr className="author" key={_id}>
          <td>{ name }</td>
          <td>
            <Link to={'/'+_id+'/edit'}>Edit</Link> 
            <DeleteButton id={_id} successCallback={() => removeFromDom(_id)} />
          </td>
        </tr>)
      }
      </tbody>
    </table>
  );
}