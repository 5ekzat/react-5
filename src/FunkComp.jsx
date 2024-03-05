import React, {useState}
 from 'react'


const FunkComp = (props) => {
  const [count, setCount] = useState(5);
  const [status, setStatus]=useState('');
  const plus = () => {
    setCount((count) => count + 1);
  };
  const minus = () => {
    setCount((count) => count --);
  }
  return (
    <div>
    <h2>Funk Component</h2>
    <h1>{count}</h1>
    <button onClick={plus}>+</button>
    <button onClick={minus}>-</button>
    <button onClick={props.onKill}>kill</button>
    </div>
  );
};

export default FunkComp;