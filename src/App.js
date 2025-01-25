import Portfolio from "./components/Portfolio";
import './App.css';
import './index.css';
import Form from "./components/Form";
import Logoandcontact from "./components/Logoandcontact";


const App = () => {

  return (

    <div>
      <div id="appID">
        <Portfolio/>
      </div>
      <footer style={{
              height:"675px",
              width:"100%",
              backgroundColor: "#242424",
              marginTop: "139px",
              }}
      >
        <div style={{
              maxWidth: "1110px",
              margin: "0 auto",
              // background: "red",
              display: "flex",
              flexDirection:"row",
              justifyContent: "space-between",
            }}
        >
          <div style={{paddingTop:"84px", paddingBottom: "92px"}}>
            <h1 style={{fontSize: "88px"}}>Contact</h1>
            <p style={{paddingTop: "36px" ,width: "445px", height: "208px"}}>I would love to hear about
               your project and how I could
                help. Please fill in the form, 
                and I’ll get back to you as soon 
                as possible.</p>
          </div>
          <Form/>
          
        </div>

        <div style={{
              maxWidth: "1110px",
              margin: "0 auto",
              paddingTop: "47px",
              borderTop: "1px solid #979797",
            }}>
          <Logoandcontact />
        </div>
        
      </footer>
    </div>
  )
}

export default App;