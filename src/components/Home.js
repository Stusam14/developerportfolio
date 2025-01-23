import Homecard from "./Homecard";

const Home = ()=>{

    return (
        <div>
            <h1>adamkeyes</h1>
            <Homecard/>
            <button style={{width: "117px", 
                border: "none",
                color: "white", 
                height: "26px", 
                textDecoration: "underline",
                textDecorationThickness: "2px",
                textDecorationColor: "#4EE1A0",
                textUnderlineOffset: "5px",
                backgroundColor: "#151515",

                }}
            >CONTACT ME</button>
        </div>
    )
}

export default Home;