
import React, {useState, useEffect} from "react"
export default function FetchApi(){
  const [records, setRecords] = useState([]);

  useEffect(()=> {
      fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => setRecords(data))
      .catch(error => console.log(error))
  }, []);
  return (
    <div>
      <ol>
        {records.map((record, index) => 
        <li key={index}>{record.id} {record.name}</li>)}
      </ol>
    </div>
  )
}