import './App.css';
import { useEffect, useState } from 'react'
import video from './activ.mp4'

function App() {

const [activity, setActivity] = useState('')

useEffect(() => {
  getActivity()
}, [])


const getActivity = async () => {
  const responce = await fetch(`https://www.boredapi.com/api/activity/`);
  const data = await responce.json();
  setActivity(data)    
}

    
    return (
    <div className="App">
      <div className="container">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>If you don't know what to do</h1>
        <button className="btn" onClick={ () => getActivity() }>Click here</button>
      </div>

      <div className='activContainer'>
        <p className='text'>{activity.activity}</p>
        <p className='text2'><span>Activity type:</span> {activity.type}</p>
        <p className='text2'><span>Price: </span>$ {activity.price}</p>
       
      </div>
      </div>    
    
)
  }

 

export default App;
