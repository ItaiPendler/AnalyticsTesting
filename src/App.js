import './App.css';
import ReactGA from "react-ga";
import useEffect from 'react'
function App() {

  ReactGA.initialize('UA-000000-01');
  useEffect(() => {
ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])
  return (
    <div className="App">
      <p onClick={(e) =>{
        console.log('clciked')
        ReactGA.event({
          category: 'Click',
          action: 'Click',
          label: 'Click'
        });
      }}>Hello</p>

      </div>
  );
}

export default App;
