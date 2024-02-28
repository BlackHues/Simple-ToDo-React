import { useRef, useState } from 'react'

const UseRefHook = () => {

    const [x,setX] = useState([]);

    const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder=''/>
      <button onClick={()=>{setX([...x, inputRef.current.value])}} >Submit</button>
      <p>{x.map((i,index)=>{return <h2 key={index} >{i}</h2>})}</p>
      <p>{x}</p>
    </div>
  )
}

export default UseRefHook
