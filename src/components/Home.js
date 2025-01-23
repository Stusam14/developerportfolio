import Homecard from "./Homecard";

const Home = ()=>{

    return (
        <div>
            <div style={{color:"blue",boxSizing: "content-box", display: "flex"}}>

                <div>
                    <h1>adamkeyes</h1>
                    <button style={{width: "117px", 
                        border: "none",
                        color: "white", 
                        height: "26px", 
                        textDecoration: "underline",
                        textDecorationThickness: "2px",
                        textDecorationColor: "#4EE1A0",
                        textUnderlineOffset: "10px",
                        backgroundColor: "#151515",

                        }}
                    >CONTACT ME</button>
                </div>
                <img alt="ImgProfile" src="./images/image-profile-desktop.webp" style={{ maxWidth: "445px", maxHeight: "720px",}}/>
            </div>
            <Homecard/>
            
        </div>
    )
}

export default Home;