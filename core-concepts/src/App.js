import { useEffect, useState } from 'react';
import './App.css';

function App() {

  return(
    <div className="App">
      {/* <Counter></Counter>
      <Counters></Counters> */}

      <ExternalUsers></ExternalUsers>
    </div>
  )
}

function ExternalUsers() {
  const [users, setUsers] = useState([]) 
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  } , [])
  return(
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
       users.map(user => <ShowUser name={user.name} email = {user.email} address = {user.address.city} username = {user.username}></ShowUser>) 
      }
    </div>
  )
 }

 function ShowUser(props) { 

    return(
      <div style = {{border: '2px solid purple', margin: '10px', padding: '10px'}}>
        <h1>Name : {props.name}</h1>
        <h4>Address : {props.address.city}</h4>
        <h5>Username : {props.username}</h5>
        <h6>Email : {props.email}</h6>
      </div>
    )

  }

  function Counter(){ 
    const [count, setCount] = useState(0);

    const increaseCount = () => setCount(count + 1)
    const decreaseCount = () => setCount(count - 1)
    
    return <div className="counter">
        <h1>Count: {count} </h1>
        <button onClick={increaseCount} className='increase'>Increase</button>
        <br />
        <button className='increase' onClick={decreaseCount}>Decrease</button>
    </div>
   }


function Counters(){
  const [counters, setCounters] = useState(1)
  const increasesCount = () => {
      const newCounts = counters * 2;
      setCounters(newCounts)
  }
  return(
    <div>
        <h1>Counts: {counters} </h1>
        <button className='increase' onClick={increasesCount}>Increases</button>
    </div>
  )
}

export default App;

/* 


  const actors = [
    {name: 'Johnny Depp', age: 37, Occupation: 'Actor'},
    {name: 'Winona Ryder', age: 35, Occupation: 'Actress'},
    {name: 'Lio', age: 30, Occupation: 'Actor'},
    {name: 'Tom', age: 31, Occupation: 'Actor'}
  ]

  const footballers = ['Rooney', 'Ronaldo', 'Messi', 'Buffon', 'Beckham', 'Cafu', 'Cristiano Ronaldo', 'Seedorf']

  return (
    
    <div className='App'>
  {  {
      footballers.map(footballer => <Player name = {footballer} ></Player>)
    } }

    {
      actors.map(actor => <Player name = {actor.name}></Player>)
    }
     {  <Player name="Bleh Bleh Bleh"></Player>
      <Player name="hehe heh hehe"></Player>
      <Player></Player>
      <Player></Player> }
    </div>
  );
}



function Player(props) {
  console.log(props);
  return ( 
  <div className='player'>
    <h1>{props.name}</h1>
    
  </div>
)

*/