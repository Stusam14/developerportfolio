

const Form = () =>{

    return (
    <div style={{display:"flex", flexDirection:"column",paddingTop:"84px", width: "445px", height:"327px"}} >
        <form style={{display:"flex", flexDirection:"column"}} >
            <label for="name" >NAME</label>
            <input  style={{marginBottom:"32px" ,borderBottom: "1px solid #979797" ,backgroundColor: "#242424"}}type="text"/>
            <label for="email" type="email" >EMAIL</label>
            <input type="email" style={{marginBottom:"32px",borderBottom: "1px solid #979797", backgroundColor: "#242424"}}/>
            <label>MESSAGE</label>
            <textarea rows="3" style={{marginBottom: "32px", borderBottom: "1px solid #979797", backgroundColor: "#242424"}} />
            <button type="submit" style={{
                        width: "117px", 
                        border: "none",
                        color: "white", 
                        height: "26px", 
                        overflow: "hidden",
                        textDecoration: "underline",
                        textDecorationThickness: "2px",
                        textDecorationColor: "#4EE1A0",
                        textUnderlineOffset: "10px",
                        backgroundColor: "#242424",
                        margin: "0 0 0 335px",
                        }}  
                    >SEND MESSAGE</button>
            
        </form>    
    </div>)
}

export default Form;