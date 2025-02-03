import React from 'react'
import {useRef,useEffect} from 'react'
import './Blog.css'
import MainBlog from './MainBlog.tsx'

const Home=()=>{

    const mainref=useRef<HTMLInputElement>(null)
    const animateref=useRef<HTMLInputElement>(null)

    useEffect(()=>{

        setTimeout(()=>{
            if (animateref.current){
                animateref.current.style.transform='translateX(-100vw)';
            }
        },2000)

        setTimeout(()=>{
            if (mainref.current){
                mainref.current.style.opacity=1;
            }
        },2200)

        
    },[])

    return (

        <div className="homediv">
            <div className="animated" ref={animateref}>
                <div className="styling" style={{ animation:  'scaleInOut 2s ease-in-out infinite',cursor:"pointer"}} >
                    <h1 style={{width:"100%"}}>Welcome To The World Of Blogging </h1>
                </div>
            </div>
            <div className="maindiv" ref={mainref}>
                <MainBlog />
            </div>

        </div>
    )
}

export default Home