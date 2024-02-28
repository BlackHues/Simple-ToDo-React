import { useState } from "react";
import FirstComponent from "./UseStateHook";


const Button = () => {
  
    const [data, setData] = useState(0);

    const HandleEvent = () => {
        setData(data+1);
    }

    return (
        <div>
            <p>{data}</p>
            <button onClick={()=>{HandleEvent()}}>click me</button>
            <FirstComponent data={data} newItem="Arjun" fn={setData} />
        </div>
    )
    }

export default Button
