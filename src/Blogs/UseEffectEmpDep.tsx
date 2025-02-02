import React ,{useState} from 'react'
import empdep from '../images/empdep.png'


interface modalprops{
    setShowModalComponent:React.Dispatch<React.setStateAction<boolean>>
}

const UseEffectEmpDep=({setShowModalComponent}:modalprops)=>{

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
                <div className="cleanup" style={{background: 'linear-gradient(90deg, rgba(245,235,239,0.07749037114845936) 0%, rgba(148,187,233,0.6293110994397759) 90%)',border:"none",animation:"none",cursor:"pointer"}}>
                    <div>
                        <h2 style={{textDecoration:"underline"}}><strong>UseEffect with an Empty Dependency Array</strong></h2>
                     </div>
                    <div>
                        <p><strong> When useEffect is provided with an empty dependency array, it executes only a single time after the component mounts and does not run again unless the component is mounted again.</strong></p>
                    </div>
                    <div>
                        <p>Here is an example where the statement will be printed on console when the component is mounted. </p>
                    </div>
                    <div>
                        <img src={empdep} alt="nodep" style={{width: "50%", height: "auto", objectFit: "contain",borderRadius:"10px"}}/>
                    </div>
                    <div>
                        <p><strong>It does not run on re-renders or state updates.</strong></p>
                        <p><strong>It is generally used for fetching data on mountor add eventListener and run code one time .</strong></p>
                    </div>
                </div>
                 <div style={{position:"absolute",top:"0",right:"1rem"}}>
                    <button className="btn" onClick={handleClick} >Close</button>
             </div>
            </div>
          
        </div>
    )
}

export default UseEffectEmpDep