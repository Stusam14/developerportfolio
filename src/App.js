import Portfolio from "./components/Portfolio";
import './App.css';

const App = () => {

  return (
    <div id="appID" style={{
      backgroundColor: "#151515",
      width: "100%",
      maxWidth: "1110px",
      margin: "0 auto",  

      }}
    >
      <Portfolio/>
    </div>
  )
}

export default App;