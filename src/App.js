import logo from './logo.svg';
import { Canvas, useFrame } from '@react-three/fiber'
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';
import { useState } from 'react';





function App() {

  const [items, setItems] = useState(Array.from({ length: 20 }))

  const fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      setItems(items.concat(Array.from({length : 20})))
    }, 1500);
  };

  const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
  };


  
  return (
    <div className="App">

    <div>
    <h1>demo: react-infinite-scroll-component</h1>
    
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      {items.map((i, index) => (
        <div style={style} key={index}>
          div - #{index}
        </div>
      ))}
    </InfiniteScroll>
  </div>



    </div>
  );
}

export default App;
