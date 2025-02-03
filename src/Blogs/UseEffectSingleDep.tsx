import React ,{useState} from 'react'

interface modalprops{
    setShowModalComponent:React.Dispatch<React.setStateAction<boolean>>
}

const UseEffectSingleDep=({setShowModalComponent}:modalprops)=>{

    const handleClick=()=>{
        setRemoveAnimation(true);
        setTimeout(()=>{
            setShowModalComponent(false)
        },500)
    }
    const [removeanimation,setRemoveAnimation]=useState<boolean>(false)
    return (
        <div className="backgroundmodal">
            <div className={`contentdiv ${!removeanimation ? "fadeIn" : "fadeOut"} `} style={{position:"relative"}}>
               <div className="cleanup" style={{background: 'linear-gradient(90deg, rgba(245,235,239,0.07749037114845936) 0%, rgba(148,187,233,0.6293110994397759) 90%)',border:"none",animation:"none",cursor:"pointer",padding:"0.5rem",gap:"0.5rem"}}>
                    <div>
                        <h2 style={{textDecoration:"underline"}}><strong>UseEffect with A State Dependency </strong></h2>
                    </div>
                    <div>
                        <p><strong>In order to prevent needless re-renders, useEffect only runs when a state variable is supplied as a dependency.</strong></p>
                    </div>
                    <div>
                        <p>Here is an example where the count statement will be printed on console whenever value of count is changed. </p>
                    </div>
                    <div>
                        <img src='./singledep.png' alt="nodep" className="diving"/>
                    </div>
                    <div>
                        <p><strong>useEffect runs once since count starts at 0</strong></p>
                        <p><strong>The dependency array [count] guarantees that useEffect executes solely when count is modified.</strong></p>
                        <p>In contrast to useEffect lacking dependencies, this variant does not execute after each render, thereby enhancing performance.</p>
                    </div>
                </div>
                 <div style={{position:"absolute",top:"0",right:"1rem"}}>
                    <button className="btn" onClick={handleClick} >Close</button>
             </div>
            </div>
          
        </div>
    )
}

export default UseEffectSingleDep