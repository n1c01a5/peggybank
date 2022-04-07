import { useRef, useState } from 'react';

import './App.css';

function App() {
  const coin = useRef(null);
  const [hidden, setHidden] = useState(false);

  return (
    <div className="App" onClick={() => setHidden(!hidden)}>
      <h1>Hover over me!</h1>
      <div class="hammer">
        <div class="face"></div>
        <div class="head"></div>
        <div class="handle"></div>
      </div>
      <div id="coin" className={`${hidden ? 'animate' : ''}`} />
      <h1 className={`${hidden ? 'hidden' : ''}`}>Insert Coin</h1>
      <div className="piggy">
        <div className="insert"></div>
        <div className="cover"></div>
        <div className="coin-cover"></div>
        <div className="left-ear">
          <div className="outset"></div>
          <div className="inset"></div>
        </div>
        <div className="right-ear">
          <div className="outset"></div>
          <div className="inset"></div>
        </div>
        <div className="eye1"></div>
        <div className="eye2"></div>
        <div className="nose">
          <div className="nostril1"></div>
          <div className="nostril2"></div>
        </div>
        <div className={`mouth ${hidden ? 'smile' : ''}`}></div>
        <div id="blush" className={`${hidden ? 'animate-blush' : ''}`}></div>
        <div className="foot foot1"></div>
        <div className="foot foot2"></div>
        <div className="foot foot3"></div>
        <div className="foot foot4"></div>
      </div>
      {/* TODO: add rainbow instead of dollars */}
      <div className="money" id="bill1">
        <div className="pres"></div>
      </div>
      <div className="money" id="bill2">
        <div className="pres"></div>
      </div>
      <div className="money" id="bill3">
        <div className="pres"></div>
      </div>
      <div className="money" id="bill4">
        <div className="pres"></div>
      </div>
      <div className="money" id="bill5">
        <div className="pres"></div>
      </div>
      <div className="money" id="bill6">
        <div className="pres"></div>
      </div>
    </div>
  );
}

export default App;
