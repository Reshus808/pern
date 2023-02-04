import React, {useState} from 'react';
import Link from "next/link";
import axios from "axios";

const Add = () => {

  const [name, setName] = useState('')
  const [address, setAddress] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
       axios.post('http://localhost:4000', {
        name: name,
        address: address
      })
      setName('')
      setAddress('')
    }catch (e){
      console.log(e)
    }
  }


  return (
      <div>
        <h2>Add Record</h2>
        <form>
          <label>Name</label>
          <input type={'text'} placeholder={'Enter name'}/><br/><br/>

          <label>Address</label>
          <textarea placeholder={'Enter Address'}/><br/><br/>

          <button onClick={handleSubmit}>Submit</button>
          <Link href={'/'}>Cancel</Link>
        </form>
      </div>
  );
};

export default Add;