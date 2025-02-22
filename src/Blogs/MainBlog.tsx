import React from 'react'
import { Link } from 'react-router-dom';

const MainBlog=()=>{


    return (
        <>
            <div className="center">
                <div className="introContent">
                        <div>
                            <h1>Welcome To The World Of Blogs</h1>
                        </div>
                        <div>
                            <p  className="ptag" style={{fontWeight:"900"}}>
                            Explore content from enthusiastic producers, offer your thoughts, and expand your knowledge. 
                            The most recent writings on a variety of subjects, including technology, 
                            lifestyle, travel, and more, are available to you through our blog community.
                            </p>
                        </div>
                        <div className="ptag">
                            <p><strong>We promote involvement and innovation here at Blogging Site . </strong>
                            <br/>
                                <strong>
                                    There's always something new to learn whether you're a voracious reader or an aspiring writer!
                                </strong>
                            </p>
                        </div>
                        <div className="ptag">
                            <p ><strong>Become a part of our lively community of Blogging.</strong>
                            <br/> <strong>Whether you're visiting to read thought-provoking articles or to contribute your own thoughts, there's always a chance to learn and engage!</strong>
                            </p>
                        </div>
                        <div>
                            <Link to="/useEffect">
                                <button className="btn">Read Our Blog on useEffect</button>
                            </Link>
                        </div>
                </div>
                <div className="vids">
                    <video className="vid" src='/video1.mp4' autoPlay muted loop  style={{ pointerEvents: "none" }} >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </>
    )
}

export default MainBlog