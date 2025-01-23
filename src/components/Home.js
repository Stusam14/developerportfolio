import Homecard from "./Homecard";

const Home = ()=>{

    return (
        <div >
            <div style={{color:"white",boxSizing: "content-box", display: "flex", flexDirection: "row",justifyContent: "space-between"}}>

                <div style={{display:"flex",flexDirection: "column",justifyContent:"space-between"}}>
                    <h1 style={{marginTop: "39px",transform: "translateX(7px)"}}>adamkeyes</h1>
                    <button style={{width: "117px", 
                        border: "none",
                        color: "white", 
                        height: "26px", 
                        textDecoration: "underline",
                        textDecorationThickness: "2px",
                        textDecorationColor: "#4EE1A0",
                        textUnderlineOffset: "10px",
                        backgroundColor: "#151515",
                        marginBottom: "153px",
                        transform: "translateX(-7px)",

                        }}
                    >CONTACT ME</button>
                </div>
                <img alt="ImgProfile" src="/images/image-profile-desktop.webp" style={{ maxWidth: "445px", maxHeight: "720px",}}/>
            </div>
            <div style={{boxSizing: "content-box" , transform: "translate(7px, -530px)"}}>
                <Homecard/>
            </div>
            
        </div>
    )
}

export default Home;