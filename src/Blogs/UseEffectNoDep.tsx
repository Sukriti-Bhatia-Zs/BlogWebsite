import React ,{useState} from 'react'
import nodep from '../images/nodep.png'

interface modalprops{
    setShowModalComponent:React.Dispatch<React.setStateAction<boolean>>
}

const UseEffectNoDep=({setShowModalComponent}:modalprops)=>{

    const handleClick=()=>{
        setRemoveAnimation(true);
        setTimeout(()=>{
            setShowModalComponent(false)
        },500)
    }
    const [removeanimation,setRemoveAnimation]=useState<boolean>(false)
    return (
        <div className="backgroundmodal">
            <div className={`contentdiv ${!removeanimation ? "fadeIn" : "fadeOut"}`} style={{position:"relative"}}>
                <div className="cleanup" style={{background: 'linear-gradient(90deg, rgba(245,235,239,0.07749037114845936) 0%, rgba(148,187,233,0.6293110994397759) 90%)',border:"none",animation:"none",cursor:"pointer",padding:"0.5rem"}}>
                    <div>
                        <h2 style={{textDecoration:"underline"}}><strong>UseEffect with No Dependency Array</strong></h2>
                    </div>
                    <div>
                        <p><strong>The useEffect hook runs after every render when no dependency array is provided.</strong></p>
                    </div>
                    <div>
                        <p>Here is an example where the statement will be printed on console everytime when the component has been rendered</p>
                    </div>
                    <div>
                        <img src={nodep} alt="nodep" style={{width: "50%", height: "auto", objectFit: "contain",borderRadius:"10px"}}/>
                    </div>
                    <div>
                        <p><strong>useEffect() executes after every render both on mount and updates.</strong></p>
                        <p>This method is not optimised as it would effect the performance when it keeps on running on every render</p>
                    </div>
                </div>
                 <div style={{position:"absolute",top:"0.5rem",right:"1rem"}}>
                    <button className="btn" onClick={handleClick} >Close</button>
                </div>
            </div>
          
        </div>
    )
}

export default UseEffectNoDep