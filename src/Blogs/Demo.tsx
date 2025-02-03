import React ,{useState,useEffect} from 'react'

interface Showprops{
    setShowEffect:React.Dispatch<React.setStateAction<boolean>>
   
}

const Demo=({setShowEffect}:Showprops)=>{

    const [count,setCount]=useState<number>(0)
    const [message,setMessage]=useState<string>()
    const [removeanimation,setRemoveAnimation]=useState<boolean>(false)
    const [bg,setBg]=useState<boolean>(false);

    
    useEffect(()=>{
        setMessage(` Count Incremented to ${count}`)
        setBg(prev=>!prev)
    },[count])

     const handleClick=()=>{
        setBg(false)
            setRemoveAnimation(true);
            setTimeout(()=>{
                setShowEffect(false)
            },500)
    }
    
    return (
         <div className="backgroundmodal">
            <div className={`contentdiv ${!removeanimation ? "fadeIn" : "fadeOut"} `} style={{position:"relative"}}>
                <div className="cleanup" style={{background: 'linear-gradient(90deg, rgba(245,235,239,0.07749037114845936) 0%, rgba(148,187,233,0.6293110994397759) 90%)',border:"none",animation:"none",cursor:"pointer",backgroundColor: bg ? "grey" : "white",padding:"0.5rem"}}>

                    <div>
                        <h2 style={{color:"red",textDecoration:"underline"}}>{message}</h2>
                    </div>
                    <div>
                        <h3>Please Click on increment Button to see changed Value</h3>
                        <p><strong>useEffect</strong> called on incrementing the count since state changes</p>
                    </div>
                    <div>
                        <button className="btn" onClick={()=>setCount(prev=>prev+1)}>Increment</button>
                    </div>
                    <div style={{position:"absolute",top:"0",right:"1rem"}}>
                        <button className="btn" onClick={handleClick} >Close</button>
                     </div>
                </div>
            </div>
        </div>
    )
    
}

export default Demo