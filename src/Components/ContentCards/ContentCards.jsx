import './ContentCards.css'
import React,{useEffect, useState} from 'react'
import {API_KEY, imageUrl} from '../../Constants/Constants'
import axiosInstance from '../../axiosConfig'

function ContentCards(){
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        axiosInstance.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
            console.log(response.data.results)
            setMovies(response.data.results)
        }).catch(err=>alert("Something went wrong ☹️"))
    },[])
    return(
        <div className='content-row'>
            <h2>Netflix Originals</h2>
            <div className="posters">
                {movies.map((movie)=>
                    <img className='poster-image' src={`${imageUrl+movie.poster_path}`} alt="Poster" />
                )}
            </div>
        </div>
    )
}
export default ContentCards