import logo from './logo.svg';
import { Canvas, useFrame } from '@react-three/fiber'
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';
import { useState } from 'react';


    /*
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
    </InfiniteScroll>*/

function App() {
  const [items, setItems] = useState(["bla", "bla"])


  
  return (
    <div className="App">

    <div>
    <h1>demo: react-infinite-scroll-component</h1>

  </div>



    </div>
  );
}

export default App;
