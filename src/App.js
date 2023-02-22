import './App.css';

import illustration from "./images/illustration-hero.svg"
import music_svg from "./images/icon-music.svg"

function App() {
  return (
    <>
      <div className='container'>
        <div className='hero'>
          <img src={illustration} alt=''/>
        </div>
      <div className='text-content'>
        <h2 className='title'>
            Order Summary
        </h2>
        <p className='subtitle'>
          You can now listen to millions of songs, audiobooks, 
          and podcasts on any device you like anywhere you like!
        </p>
        <div className='plan-box'>
          <div className='plan-box-left'> 
            <img src={music_svg} alt=''/>
            <div>
              <h5>Annual Plan</h5>
              <p>$59.99/year</p>
            </div>
          </div>
            <a href='#'>Change</a>
        </div>
        <a href='#' className='proceed-btn'>Proceed to Payment </a>
        <a href='#' className='cancel-btn'>Cancel Order</a>
      </div>
      </div>
    </>
  );
}

export default App;
