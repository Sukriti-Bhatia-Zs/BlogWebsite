import React , {useState} from 'react'
import './Blog.css'
import FullContent from './FullContent.tsx'
import VideoContent from './VideoContent.tsx'


const Hook=()=>{

    const [showmodal,setShowModal]=useState<boolean>(false)
    const [showvideo,setShowVideo]=useState<boolean>(false)

    return (
        <div className="hookclass">
            <div className="Content" >
                <div style={{fontWeight:"bold"}}>
                    What exactly is the UseEffect hook?
                </div>
                <div>
                    <p>UseEffect is like a magic door that allows your components to perform side effects after they render.</p>
                    <p>
                    Side effects can include data fetching, subscriptions, or manually changing the DOM.
                    With UseEffect, we can easily manage these side effects in a clean and manageable way.
                    </p>
                    <p style={{fontWeight:"bold"}}>The UseEffect hook takes two arguments - a function and an optional array of dependencies.</p>
                </div>
                <div className="image-container">
                    <img src='./useEffect1.png' alt="effect1" />
                    <img src='./useEffect2.png' alt="effect2" />
                    <img src='./useEffect3.png' alt="effect3" />
                </div>
                <div>
                    <p>The function you provide will run depending upon the Dependency Array.</p>
                    <p style={{fontWeight:"bold"}}>Now, you might be wondering, why do we need an array of dependencies?</p>
                    <div>
                        <p>The effect only occurs once when the component mounts if the array is empty ([]) as shown in <strong>First Figure </strong> 
                        If the array contains values, the effect is triggered anytime any of those values change as shown in <strong>Second Figure </strong> 
                        Without a second argument, the effect executes after each render; this is less frequent and may cause performance problems if not managed properly as shown in <strong>Third Figure</strong> .</p>
                    </div>
                </div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px",padding:"0"}}>
                    <button className="btn" onClick={()=>setShowModal(true)}>Read More ...</button>
                    <button  className="btn" onClick={()=>setShowVideo(true)}>Tutorial Video </button>
                </div>
                {showmodal && <FullContent setShowModal={setShowModal} showmodal={showmodal}/>}
                {showvideo && <VideoContent setShowVideo={setShowVideo}/>}
            </div>
        </div>
    )
}

export default  Hook