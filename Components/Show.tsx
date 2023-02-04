import React, {useEffect, useState} from 'react';
import axios from "axios";
import Link from 'next/link'
const Show = () => {

  const [data, setData] = useState([])
  // console.log({data})
  useEffect(() => {
    axios.get('http://localhost:4000')
        .then((res) => {
          console.log(res.data.data)
          setData(res.data.data)
        }).catch(e => {
      console.log(e)
    })
  }, [])


  return (
      <div>
        <h1>Show Data</h1>

        <Link href={'display'} >Add Data</Link><br/><br/>
        <table border={1}>
          <thead>
          <tr>
            <th> ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          {
            data.map((r, index) => {
              return (
                  <tr key={index}>
                    <td>{r.id}</td>
                    <td>{r.name}</td>
                    <td>{r.address}</td>
                    <td>Edit</td>
                    <td>Delete</td>
                  </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
  );
};

export default Show;