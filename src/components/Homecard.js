const Homecard = () =>{
    
    return (<div style={{boxSizing: "border-box"}}>
    
        <h1 style={{ fontSize:"79px"}}>Nice to meet you!</h1>
        <h1 style={{fontSize:"79px",display:"flex",transform: "translateY(-20px)"}} >I’m <span style={{marginLeft: "15px" , 
            textDecoration: "underline", 
            textUnderlineOffset:"15px",
            textDecorationColor:"#4EE1A0",
            }}>Adam Keyes.</span></h1>
    
        <div style={{width: "445px", height: "84px",fontSize:"18px",margin:"15px 0"}}>
            <p>
                Based in the UK, I’m a 
                front-end developer 
                passionate about building 
                accessible web apps that 
                users love.                 
            </p>
        </div>
        
        
    </div>)
}

export default Homecard;