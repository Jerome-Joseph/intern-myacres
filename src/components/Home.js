import React from 'react'
import { useState } from 'react'

const Home = () => {
    const [mainHead, setMainHead] = useState('Find your perfect')
    const [cursiveHead, setCursiveHead] = useState('workspace')

    return (
        <>
        <div className={`container d-flex justify-content-center`} style={{marginTop:"100px"}}>
            <h2 id='mainTxt'>{mainHead}&nbsp;</h2><h2 id='scndTxt'><span>{cursiveHead}</span></h2>
        </div>

        <div className='container d-flex justify-content-center'>
        <button type="button" className="btn btn-link" onClick={()=>{setMainHead("Find your perfect");setCursiveHead("workspace")}}>Buy</button>
        <button type="button" className="btn btn-link" onClick={()=>{setMainHead("Find your perfect");setCursiveHead("Rental home")}}>Rent</button>
        <button type="button" className="btn btn-link" onClick={()=>{setMainHead("Find a home away from");setCursiveHead("home")}}>PG</button>
        <button type="button" className="btn btn-link" onClick={()=>{setMainHead("Pick your perfect piece of");setCursiveHead("plot")}}>Plot</button>
        <button type="button" className="btn btn-link" onClick={()=>{setMainHead("Find your perfect");setCursiveHead("workspace")}}>Commercial</button>
        <button type="button" className="btn btn-link" onClick={()=>{setMainHead("Post your Property Ad for");setCursiveHead("free")}}>Post Free Ad</button>
        </div>
        </>
    )
}

export default Home
