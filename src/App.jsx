import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [mark,setMark] = useState([null,null,null,null,null,null,null,null,null]);
  const[isX,setisX]=useState(true);

  function clickhandler(index){
  let newMark=[...mark];
  if(isX==true){
    newMark[index]='X'
    setMark(newMark)
    setisX(false);
  }
  else{
      newMark[index]='0';
      setMark(newMark);
      setisX(true);
    }
  
 
  }
  return (
   <>
   <div>
   <button onClick={()=>clickhandler(0)} style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[0]}</button>
   <button onClick={()=>clickhandler(1)} style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[1]}</button>
   <button onClick={()=>clickhandler(2)} style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[2]}</button>
   </div>
   <div>
   <button onClick={()=>clickhandler(3)} style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[3]}</button>
   <button onClick={()=>clickhandler(4)} style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[4]}</button>
   <button onClick={()=>clickhandler(5)} style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[5]}</button></div>
   <div>
   <button onClick={()=>clickhandler(6)}  style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[6]}</button>
   <button onClick={()=>clickhandler(7)} style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[7]}</button>
   <button onClick={()=>clickhandler(8)} style={{border:"1px solid black",width:"50px",height:"50px"}}>{mark[8]}</button>
   </div>
</>
  )
}

export default App
