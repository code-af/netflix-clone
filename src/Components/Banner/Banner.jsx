import React, {useEffect, useState} from 'react'
import './Banner.css'
import {API_KEY} from '../../Constants/Constants'
import axiosInstance from '../../axiosConfig' 

function Banner(){
    const [movie, setMovie] = useState()
    useEffect(()=>{
        axiosInstance.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            const randomMedia = Math.floor(Math.random() * response.data.results.length)
            console.log(randomMedia)
            setMovie(response.data.results[randomMedia])
            console.log(response.data.results[randomMedia])
        })
    },[])
    return(
        <div className='banner'>
            <div className='content'>
                <h1 className='title-name'>{movie ? movie.name || movie.title : ""}</h1>
                <div className='banner-btns'>
                    <button className='btn'>Play</button>
                    <button className='btn'>My List</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ""}</h1>
            </div>
        <div className="bottom-fade">
            
        </div>
        </div>
    )
}
export default Banner