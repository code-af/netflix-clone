import './ContentCards.css'
import React,{useEffect, useState} from 'react'
import {imageUrl, API_KEY} from '../../Constants/Constants'
import axiosInstance from '../../axiosConfig'
import YouTube from 'react-youtube'

function ContentCards(props){
    const [urlKey, setUrlKey] = useState('')
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        axiosInstance.get(props.url).then((response)=>{
            setMovies(response.data.results)
        }).catch(err=>alert("Something went wrong ☹️"))
    },[])
    const options = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const handleVideos = (id)=>{
        axiosInstance.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            const video = response.data.results.find(videoInfo => videoInfo.name.toLowerCase().includes("trailer"))
            video ? setUrlKey(video.key) : console.log('No Videos Available')
        })
    }
    return(
        <div className='content-row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((movie)=>
                    <img onClick={()=>{handleVideos(movie.id)}} className='poster-image' src={props.isOriginal ? `${imageUrl+movie.backdrop_path}` : `${imageUrl+movie.poster_path}`} alt="Poster" />
                )}
            </div>
            {urlKey &&  <YouTube opts={options} videoId={urlKey}/>}
        </div>
    )
}
export default ContentCards