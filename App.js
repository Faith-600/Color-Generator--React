import {useState} from 'react'
import Colordata from './Color/Colordata'


import Values from 'values.js'
function App() {
  const [color,setColor] = useState('')
  const [error,setError] = useState(false)
  const [list,setList] = useState(new Values('#f15025').all(10))
  const handleSubmit =(e)=>{
    e.preventDefault()
  try {
    let colors = new Values(color).all(10)
  setList(colors)
  } catch (error) {
    setError(true)
    console.log(error)
  }
   
    }
  return (
    <>
     <div className='maindiv'>
      <form onSubmit={handleSubmit}  className='form' htmlFor='name' >
        <label htmlFor='name' className='colorgen'>Color Generator
        <input type='text' value ={color} onChange={(e)=>setColor(e.target.value)} placeholder='#f15025'  id='name' 
        className={`${error ? `error` :null}`}
        ></input> 
        </label>
        <button type='submit'>Submit</button>
      </form>
      </div>
      <section className="seconddiv">
        {list.map((color,index)=>{
          return <Colordata key={index} {...color} index={index} hexColor={color.hex} />
        })}
      </section>
    
    </>
   
  );
}

export default App;
