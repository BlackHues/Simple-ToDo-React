

const FirstComponent = ({data,newItem,fn}) => {
  return (
    <div>
        <h2>FirstComponent</h2>
        <button onClick={()=>{fn(50)}} >Set 50</button>
        <p>{data}</p>
        <p>{newItem}</p>
    </div>
  )
}

export default FirstComponent
