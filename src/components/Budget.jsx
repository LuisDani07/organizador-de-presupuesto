import { useContext } from 'react';
import {AppContext} from '../context/AppContext';

function Budget() {
  const {budget}=useContext(AppContext)

  return (
    <div className="alert alert-secondary d-flex">
        <span>Budget: $ {budget}</span>
        <button  className='btn btn-primary ms-5'>Edit</button>
    </div>
  )
}

export default Budget