import { useState,useEffect } from "react"

const usefetch = (url) =>{
    const [data,setdata] = useState(null)
    useEffect(() =>{
      setTimeout(()=>{
        fetch(url)  
        .then((response) =>{
          if(response.ok == false){
            throw Error("Oops could not fetch the data")
          }else{
            return response.json();
          }
        })
        .then((data)=>{
          setdata(data)
        })
        .catch((e)=>{
          console.log(e.message)
        });
      },1000)
    },[url])
    return{data}
  }
  export default usefetch;