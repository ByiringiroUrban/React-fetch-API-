import { useEffect, useState } from "react"

const URL = `http://api.weatherapi.com/v1/current.json?key=47a53eff4b29ba811204220210&q=London&aqi=no`

 export default function Weather (){
  const [temp, setTemp] = useState(0);
  useEffect(()=> {

    const fetchData = async () => {
      const result = await fetch(URL)
      result.json().then(json => {
        setTemp(json.current.temp)
      })
    }
    fetchData()
  }, [])
   return (
     <div>
      <h1>London Temperature Now is: {temp}℉</h1>
     </div>
   )
 }