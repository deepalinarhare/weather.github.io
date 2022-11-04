import React,{useEffect, useState} from 'react'
import './temp.css'

function Temp() {

    const[city,setCity]=useState(null);
    const[search,setSearch]=useState("Mumbai");

    useEffect(()=>{

        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=da68c6615641e384d128dfdee9534488`
            //console.log(url);
            const response=await fetch(url);
            console.log(response);
            const rejson=await response.json();
            console.log(rejson);
            setCity(rejson.main);
        }
        fetchApi();
    },[search])
  return (
    <>
    <div className='box'>
        <div className='input'>
            <input type="search"
            className='inputfield'
            value={search }
            onChange={(event)=>{
                setSearch(event.target.value)
            }}
          />
        </div>
        {
            !city ? (<p>No Data Found</p>):(  
                <div>
            <div className='info'>
            <h2 className='location'>{search}</h2>
            <h1 className='temp'>
                {city.temp}°cel
            </h1>
            <h4 className='max'>Min: {city.temp_min}°cel | Max: {city.temp_max}°cel</h4>
    </div>

    <div className='one'></div>
    <div className='two'></div>
    <div className='three'></div>
    </div>)
        }
     

   
    </div>
    </>
  )
}

export default Temp