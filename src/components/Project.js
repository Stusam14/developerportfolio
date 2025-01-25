import Projectlink from "./Projectlink"

const Project = () =>{

    const projectLinksData = [
        {
            projectImage: "/images/thumbnail-project-1-large.webp",
            projectName: "DESIGN PORTFOLIO",
            projectTools: "HTML CSS",
        },
        {
            projectImage: "/images/thumbnail-project-2-large.webp",
            projectName: "E-LEARNING LANDING PAGE",
            projectTools: "HTML CSS",
        },
        {
            projectImage: "/images/thumbnail-project-3-large.webp",
            projectName: "TODO WEB APP",
            projectTools: "HTML CSS JAVASCRIPT",
        },
        {
            projectImage: "/images/thumbnail-project-4-large.webp",
            projectName: "ENTERTAINMENT WEB APP",
            projectTools: "HTML CSS JAVASCRIPT",
        },
        {
            projectImage: "/images/thumbnail-project-5-large.webp",
            projectName: "MEMORY GAME",
            projectTools: "HTML CSS JAVASCRIPT",
        },
        {
            projectImage: "/images/thumbnail-project-6-large.webp",
            projectName: "ART GALLERY SHOWCASE",
            projectTools: "HTML CSS JAVASCRIPT",
        }
    ];

    return (
        <div>
            <div style={{padding: "80px 0", display: "flex" , flexDirection: "row", justifyContent:"space-between"}}>
                <h1 style={{fontSize:"88px"}}>
                    Projects
                </h1>
                <button style={{
                        width: "117px", 
                        border: "none",
                        color: "white", 
                        height: "26px", 
                        overflow: "hidden",
                        textDecoration: "underline",
                        textDecorationThickness: "2px",
                        textDecorationColor: "#4EE1A0",
                        textUnderlineOffset: "10px",
                        backgroundColor: "#151515",
                        paddingBottom: "100px",
                        

                        }}  
                >CONTACT ME</button>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr" , rowGap:"69px",columnGap:"30px"}}>
                {projectLinksData.map((link)=> <Projectlink 
                    projectImage={link.projectImage} 
                    projectName={link.projectName} 
                    projectTools={link.projectTools}/>
                )}
            </div>
        </div>
    )
}

export default Project;