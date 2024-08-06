import { useEffect, useState } from "react"

export default function Photo(){

  const [photos, setPhoto] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setPhoto(data);
    })
    .catch(err => console.log(err))

  }, [])
   return(
    <div>
      {photos.map((photo) => (
        <img key={photo.id} src={photo.url} alt={photo.title} width={100}></img>
      ))}
    </div>
   )
}