import React ,{useState} from 'react'
import {Link} from 'react-router-dom'
import UseEffectNoDep from './UseEffectNoDep.tsx'
import UseEffectEmpDep from './UseEffectEmpDep.tsx'
import UseEffectSingleDep from './UseEffectSingleDep.tsx'
import Demo from './Demo.tsx'

interface Showprops{
    setShowModal:React.Dispatch<React.setStateAction<boolean>>
    showmodal:boolean
}

const FullContent=({setShowModal,showmodal}:Showprops)=>{

    const [removeanimation, setRemoveAnimation] = useState<boolean>(false);
    const [showmodalcomponent,setShowModalComponent]=useState<boolean>(false)
    const [chosencomponent,setChosenComponent]=useState<string|null>(null)
    const [showeffect,setShowEffect]=useState<boolean>(false)


    const handleClick=()=>{
        setRemoveAnimation(true)
        setTimeout(() => {
            setShowModal(false)
        }, 1000);
        
    }

    const handlecompclick=(component:string)=>{
        setChosenComponent(component)
        setShowModalComponent(true)
    }

    return (
        <div className="backgroundmodal">
            <div className={`contentdiv ${!removeanimation ? "fadeIn" : "fadeOut"}` } >
                <div className="cleanup" style={{padding:"0.5rem",overflowX:"hidden",gap:"0.2rem"}}>
                    <div>
                        <strong>How to perform cleanup with UseEffect.</strong>
                    </div>
                    <div>
                        <p>When the component unmounts or before the effect is rerun, any side effects are 
                            cleaned up or reversed using the cleanup function in useEffect. It aids in stopping undesirable actions
                            like <strong>deleting timers, unsubscribing from outside events</strong> , or rescinding API calls, as well as memory leaks.
                        </p>
                        <p>
                        When the component unmounts or dependencies change, the cleanup function, which is returned from the effect function, 
                        executes automatically.
                        </p>
                        <p>In this example we have attached an <strong>evenListener on resize when component unmounts 
                        we want eventListener to be removed</strong> hence we write the logic in cleanup function</p>
                    </div>
                    <div>
                        <img src="./Cleanup.png" alt="" className="divimg" />
                    </div>
                    <button className="demobtn" onClick={()=>{setShowEffect(true)}} style={{padding:"3px"}}>See Demo</button>
                    <div className="realLife">
                        <div>Click to see different type of useEffect Methods</div>
                        <div className="dependencies">
                            <Link><button  className="btnlink" onClick={()=>handlecompclick("nodep")} style={{padding:"5px"}}>No Dependency Array</button></Link>
                            <Link><button  className="btnlink" onClick={()=>handlecompclick("empdep")} style={{padding:"5px"}}>Empty Dependency Array</button></Link>
                            <Link><button  className="btnlink" onClick={()=>handlecompclick("singledep")} style={{padding:"5px"}}>State Dependency Array</button></Link>
                        </div>
                    </div>
                </div>
                {showmodalcomponent && chosencomponent==='nodep' && <UseEffectNoDep setShowModalComponent={setShowModalComponent}/>}
                {showmodalcomponent && chosencomponent==='empdep' && <UseEffectEmpDep setShowModalComponent={setShowModalComponent}/>}
                {showmodalcomponent && chosencomponent==='singledep' && <UseEffectSingleDep setShowModalComponent={setShowModalComponent}/>}
                {showeffect && <Demo setShowEffect={setShowEffect}/>}
                <div style={{position:"absolute",top:"0",right:"1rem"}}>
                    <button className="btn" onClick={handleClick} >Close</button>
                </div>

            </div>
        </div>
    )
}

export default FullContent