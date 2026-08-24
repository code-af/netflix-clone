import './ContentCards.css'
import React,{useEffect, useState} from 'react'
import {imageUrl} from '../../Constants/Constants'
import axiosInstance from '../../axiosConfig'

function ContentCards(props){
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        axiosInstance.get(props.url).then((response)=>{
            setMovies(response.data.results)
        }).catch(err=>alert("Something went wrong ☹️"))
    },[])
    return(
        <div className='content-row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((movie)=>
                    <img className='poster-image' src={props.isOriginal ? `${imageUrl+movie.backdrop_path}` : `${imageUrl+movie.poster_path}`} alt="Poster" />
                )}
            </div>
        </div>
    )
}
export default ContentCards