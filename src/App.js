import logo from './logo.svg';
import { Canvas, useFrame } from '@react-three/fiber'
import InfiniteScroll from 'react-infinite-scroll-component';
import './App.css';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(["bla", "bla"])
  return (
    <div className="App">

    <InfiniteScroll
    dataLength={items.length} //This is important field to render the next data
    //next={fetchData}
    hasMore={true}
    loader={<h4>Loading...</h4>}
    endMessage={
      <p style={{ textAlign: 'center' }}>
        <b>Yay! You have seen it all</b>
      </p>
    }
    // below props only if you need pull down functionality
    refreshFunction={this.refresh}
    pullDownToRefresh
    pullDownToRefreshThreshold={50}
    pullDownToRefreshContent={
      <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
    }
    releaseToRefreshContent={
      <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
    }
  >
    {items}
  </InfiniteScroll>

    </div>
  );
}

export default App;
