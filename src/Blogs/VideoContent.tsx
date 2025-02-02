import React ,{useState} from 'react'


interface modalprops{
    setShowVideo:React.Dispatch<React.setStateAction<boolean>>
}

const VideoContent=({setShowVideo}:modalprops)=>{

    const handleClick=()=>{
        setRemoveAnimation(true);
        setTimeout(()=>{
            setShowVideo(false)
        },500)
    }
    const [removeanimation,setRemoveAnimation]=useState<boolean>(false)
    return (
        <div className="backgroundmodal">
            <div className={`contentdiv ${!removeanimation ? "fadeIn" : "fadeOut"}`} >
                    <iframe 
                        height="100%"
                        width="100%"
                        src="https://www.youtube.com/embed/bio2eP5YXyw" 
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="useEffect Tutorial Video"
                    />
            </div>
            <div style={{position:"absolute",top:"0",right:"1rem"}}>
                    <button className="btn" onClick={handleClick} >Close</button>
            </div>
          
        </div>
    )
}

export default VideoContent