import './Banner.css'
import React from 'react'
function Banner(){
    return(
        <div className='banner'>
            <div className='content'>
                <h1 className='title-name'>Movie Name</h1>
                <div className='banner-btns'>
                    <button className='btn'>Play</button>
                    <button className='btn'>My List</button>
                </div>
                <h1 className='description'>It is a long established fact that a reader will be distracted
                     by the readable content of a page when looking at its layout. </h1>
            </div>
        <div className="bottom-fade">
            
        </div>
        </div>
    )
}
export default Banner