import React from 'react'

const SearchBar = () => {
    return (
        <div className='container d-flex justify-content-center'>
            <div className="searchBox container d-flex justify-content-between">
                <div className="items">
                    <i className="fas fa-map-marker-alt"></i>
                    <span style={{marginLeft:"10px", fontSize:"16px"}}>Mumbai</span>
                    <input style={{border:'none', marginLeft:"8px"}} type="text" placeholder='Add more..'/>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
