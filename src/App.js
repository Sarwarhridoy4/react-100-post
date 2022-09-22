import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <District name='Madaripur' speciality='friendly'></District>
      <District name='Comilla' speciality='clash of clans'></District>
      <District name='Barishal' speciality='nice personalities'></District>
      <LoadPost></LoadPost>
    </div>
  );
}

function District(props) {
  const [power, setPower] = useState(1);
  const boostPower = () => {
    const nwePower = power * 2;
    setPower(nwePower);
  };
  return (
    <div className='dist'>
      <h1>Name :{props.name}</h1>
      <p>Specialty : {props.speciality}</p>
      <h4>Power :{power}</h4>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  );
}

function LoadPost() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
    .then(data => setPost(data))
  },[])
  return (
    <div>
      <h1>Posts : {posts.length}</h1>
      <div className='posts'>
      
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>
    </div>
  );
}

function Post(props) {
  return (
    <div className="post">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
  </div>
)
}

export default App;
