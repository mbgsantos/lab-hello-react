import './App.css';
import ironhackLogo from './images/ironhack-logo-xs.png'
import menuTop from './images/menu-top-xs.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'

/*
const ironhackLogo = 'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png';
*/

function App() {
  return (
    <div className="App">
      <nav className='Nav'>
        <img src={ironhackLogo} alt="" />
        <img src={menuTop} alt="" />
      </nav>

      <div className='Body'>
        <h1 className='Hello'>Say hello to ReactJS</h1>
        <p className='SubTitle'>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
        <button className='Awesome'>Awesome!</button>
      </div>

      <div className='Information'>
        <div className='Icons'>
          <img src={icon1} alt="" />
          <h2 className='InfoName'>Declarative</h2>
          <p className='Text'>React makes it painless to create interactive UIs.</p>
        </div>

        <div className='Icons'>
          <img src={icon2} alt="" />
          <h2 className='InfoName'>Components</h2>
          <p className='Text'>Build encapsulated components that manage their state.</p>
        </div>

        <div className='Icons'>
          <img src={icon3} alt="" />
          <h2 className='InfoName'>Single-Way</h2>
          <p className='Text'>A set of immutable values are passed to the component's.</p>
        </div>

        <div className='Icons'>
          <img src={icon4} alt="" />
          <h2 className='InfoName'>JSX</h2>
          <p className='Text'>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
