//** Import Statements
import { error } from "console"
import { useEffect, useState } from "react"
import { Routes, Route } from "react-router"
//** Setup (define helper functions and variables here)

function Homepage(props) {
    //** Destructure Props
    const {
  
    } = props
  
    //** State Variables
  const [data, setData] = useState(null)
  console.log(data)
    //** Component Logic
    fetch(`https://api.themoviedb.org/3/movie/popular`, {
        header: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`, 
        }
      })
      .then((response) => {
        if(!response.ok) {
            throw new Error ('error fetching data!')
        }
        return response.json()
      })
      .then((result) => setData(result))
      .catch((err) => err)
    //** Return JSX
    if (!data){
        return (
          <div>Loading...</div>
        )
      }
    return (
      <div> 
        {data}
      </div>
    )
  }
  export default Homepage